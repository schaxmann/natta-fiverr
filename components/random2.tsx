import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Text,
  Input,
  Spinner,
} from "@chakra-ui/react";
import {
  MdMoreTime,
  MdOutlineSkipNext,
  MdOutlineQuestionAnswer,
  MdOutlinedFlag,
  MdPlayArrow,
  MdStop,
} from "react-icons/md";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { RiAccountPinBoxLine } from "react-icons/ri";
import NextImage from "next/image";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import {
  ICameraVideoTrack,
  IRemoteVideoTrack,
  IAgoraRTCClient,
  IRemoteAudioTrack,
} from "agora-rtc-sdk-ng";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

type TCreateRoomResponse = {
  room: Room;
  rtcToken: string;
  rtmToken: string;
};

type TGetRandomRoomResponse = {
  rtcToken: string;
  rtmToken: string;
  rooms: Room[];
};

// type TGetRandomQuestionResponse = {
//   question: Question;
// };

// type Question = {
//   question: string;
// };

type Room = {
  _id: string;
  status: string;
};

function createRoom(userId: string): Promise<TCreateRoomResponse> {
  return fetch(`/api/rooms?userId=${userId}`, {
    method: "POST",
  }).then((response) => response.json());
}

function getRandomRoom(userId: string): Promise<TGetRandomRoomResponse> {
  return fetch(`/api/rooms?userId=${userId}`).then((response) =>
    response.json()
  );
}

function getRandomQuestion(): any {
  return fetch(`/api/questions`).then((response) => response.json());
}

function setRoomToWaiting(roomId: string) {
  return fetch(`/api/rooms/${roomId}`, { method: "PUT" }).then((response) =>
    response.json()
  );
}

export const VideoPlayer = ({
  videoTrack,
  style,
}: {
  videoTrack: IRemoteVideoTrack | ICameraVideoTrack;
  style: object;
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const playerRef = ref.current;
    if (!videoTrack) return;
    if (!playerRef) return;

    videoTrack.play(playerRef);

    return () => {
      videoTrack.stop();
    };
  }, [videoTrack]);

  return <div ref={ref} style={style}></div>;
};

async function connectToAgoraRtc(
  roomId: string,
  userId: string,
  onVideoConnect: any,
  onWebcamStart: any,
  onAudioConnect: any,
  token: string
) {
  const { default: AgoraRTC } = await import("agora-rtc-sdk-ng");

  const client = AgoraRTC.createClient({
    mode: "rtc",
    codec: "vp8",
  });

  await client.join(
    process.env.NEXT_PUBLIC_AGORA_APP_ID!,
    roomId,
    token,
    userId
  );

  client.on("user-published", (themUser, mediaType) => {
    client.subscribe(themUser, mediaType).then(() => {
      if (mediaType === "video") {
        onVideoConnect(themUser.videoTrack);
      }
      if (mediaType === "audio") {
        onAudioConnect(themUser.audioTrack);
        themUser.audioTrack?.play();
      }
    });
  });

  const tracks = await AgoraRTC.createMicrophoneAndCameraTracks();
  onWebcamStart(tracks[1]);
  await client.publish(tracks);

  return { tracks, client };
}

const AppDemo = (props: any) => {
  const [userId] = useState(parseInt(`${Math.random() * 1e6}`) + "");
  const [room, setRoom] = useState<Room | undefined>();
  const [themVideo, setThemVideo] = useState<IRemoteVideoTrack>();
  const [myVideo, setMyVideo] = useState<ICameraVideoTrack>();
  const [themAudio, setThemAudio] = useState<IRemoteAudioTrack>();
  const rtcClientRef = useRef<IAgoraRTCClient>();
  const [currentQuestion, setCurrentQuestion] = useState(
    "Press play to natta!"
  );
  const [isChatting, setIsChatting] = useState(false);
  const [playDisabled, setPlayDisabled] = useState(false);
  const [stopDisabled, setStopDisabled] = useState(true);
  const [skipQuestion, setSkipQuestion] = useState(false);
  const [effectCount, setEffectCount] = useState(0);
  const [startTimer, setStartTimer] = useState(false);

  function handleNextClick() {
    connectToARoom();
  }

  function handleStartChattingClicked() {
    connectToARoom();
    setIsChatting(true);
    setPlayDisabled(true);
    setStopDisabled(false);
  }

  function handleSkipQuestion() {
    setSkipQuestion(!skipQuestion);
  }

  async function handleQuestion() {
    const newQ = await getRandomQuestion();
    setStartTimer(true);
    setCurrentQuestion(newQ[0].question);
  }

  async function connectToARoom() {
    setThemAudio(undefined);
    setThemVideo(undefined);
    setMyVideo(undefined);

    const { rooms, rtcToken, rtmToken } = await getRandomRoom(userId);

    if (room) {
      setRoomToWaiting(room._id);
    }

    if (rooms.length > 0) {
      setRoom(rooms[0]);

      const { tracks, client } = await connectToAgoraRtc(
        rooms[0]._id,
        userId,
        (themVideo: IRemoteVideoTrack) => setThemVideo(themVideo),
        (myVideo: ICameraVideoTrack) => setMyVideo(myVideo),
        (themAudio: IRemoteAudioTrack) => setThemAudio(themAudio),
        rtcToken
      );
      rtcClientRef.current = client;
    } else {
      const { room, rtcToken, rtmToken } = await createRoom(userId);
      setRoom(room);

      const { tracks, client } = await connectToAgoraRtc(
        room._id,
        userId,
        (themVideo: IRemoteVideoTrack) => setThemVideo(themVideo),
        (myVideo: ICameraVideoTrack) => setMyVideo(myVideo),
        (themAudio: IRemoteAudioTrack) => setThemAudio(themAudio),
        rtcToken
      );
      rtcClientRef.current = client;
    }
  }

  // const isChatting = room!!;

  useEffect(() => {
    if (isChatting) {
      if (!themVideo) {
        setCurrentQuestion("Waiting for a partner to join...");
      } else {
        if (effectCount == 0) {
          setCurrentQuestion("Let's natta!");
          setEffectCount(effectCount + 1);
          setTimeout(() => handleQuestion(), 1000);
        } else handleQuestion();
        const interval = setInterval(() => handleQuestion(), 10000);
        return () => clearInterval(interval);
      }
    }
  }, [isChatting, themVideo, skipQuestion]);

  // const { runDemo, username } = props;
  // const [webcamStreaming, setWebcamStreaming] = useState(false);

  // const videoConstraints = {
  //   width: 540,
  //   height: 468,
  //   facingMode: "user",
  // };

  // const handleUserMedia = () =>
  //   setTimeout(() => setWebcamStreaming(true), 1_000);

  return (
    <Flex flexDir="column" align="center">
      <Box width="100%" height="calc(100vh * 0.4)" bg="black">
        <Flex
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            className="timer-wrapper"
            position="relative"
            // top="61%"
            // left="38.2%"
            opacity={1}
            zIndex={3}
            alignSelf="flex-start"
            padding={3}
          >
            {/* {startTimer && ( */}
            <CountdownCircleTimer
              isPlaying
              duration={60}
              trailColor={"#000000"}
              colors={["#ffffff", "#ffffff", "#ae0000", "#ae0000"]}
              colorsTime={[60, 15, 10, 0]}
              onComplete={() => ({ shouldRepeat: true, delay: 1 })}
              size={50}
              strokeWidth={6}
              trailStrokeWidth={0}
            ></CountdownCircleTimer>
            {/* )} */}
          </Box>
        </Flex>
        {/* <NextImage
            src="/Person_3.jpeg"
            layout="responsive"
            height="468px"
            width="540px"
          ></NextImage> */}
        <Flex className="video-stream" height="100%" width="100%">
          {themVideo && (
            <VideoPlayer
              style={{ width: "100%", height: "100%" }}
              videoTrack={themVideo}
            />
          )}
        </Flex>
        <Flex
          width="100%"
          height="calc(100vh * 0.10)"
          bg="gray.300"
          flexDirection="column"
          justifyContent="flex-end"
          position="relative"
          top="calc(100vh * -0.1)"
          sx={{
            background:
              "linear-gradient(to top, rgb(0,0,0,0.6) 10%, rgb(0,0,0,0.3) 40%, rgb(255,255,255,0) 80%)",
          }}
        >
          <Flex
            width="100%"
            height="calc(100vh * 0.15)"
            bg="gray.300"
            flexDirection="row"
            position="relative"
            alignItems="flex-end"
            pb="10px"
            justifyContent="space-between"
            sx={{
              background:
                "linear-gradient(to top, rgb(0,0,0,0.7), rgb(0,0,0,0))",
            }}
          >
            <Text
              fontSize="3xl"
              color="white"
              p="1"
              pl="3"
              fontWeight="600"
              position="relative"
              top="0.5rem"
            >
              {/* Them */}
            </Text>
            <ButtonGroup
              size={["xs", "sm", "md"]}
              variant="outline"
              spacing="2"
              color="white"
              p="0.2rem"
              pr="0.75rem"
            >
              <Button
                onClick={handleStartChattingClicked}
                disabled={playDisabled}
                _hover={{ color: "black", bg: "#f4f4f5", borderColor: "white" }}
              >
                <MdPlayArrow />
              </Button>
              <Button
                disabled={stopDisabled}
                _hover={{ color: "black", bg: "#f4f4f5", borderColor: "white" }}
              >
                <MdStop />
              </Button>
              <Button colorScheme="red">
                <MdOutlinedFlag />
              </Button>
            </ButtonGroup>
          </Flex>
        </Flex>
      </Box>
      <Flex
        width="100%"
        height="calc(100vh * 0.2)"
        bg="white"
        flexDirection="column"
        justifyContent="center"
      >
        <Text
          // fontSize="2xl"
          fontSize={{
            base: "12px",
            sm: "13px",
            md: "15px",
            lg: "20px",
            xl: "24px",
          }}
          textAlign="center"
          fontWeight="600"
          paddingBottom="3px"
          zIndex={2}
          // minHeight="100px"
          // maxHeight="300px"
        >
          {/* &quot;If you could live anywhere in the world, but you had to move
            there tomorrow, where would you go?&quot; */}
          {currentQuestion}
        </Text>
      </Flex>
      <Box width="100%" height="calc(100vh * 0.4)" bg="black">
        {/* {!webcamStreaming && (
            <Flex
              width="100%"
              height="100%"
              alignItems="center"
              justifyContent="center"
            >
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.100"
                color="gray.800"
                size="xl"
                position="relative"
                top="-10"
              />
            </Flex>
          )}
          {}
          <Webcam
            videoConstraints={videoConstraints}
            mirrored={true}
            onUserMedia={handleUserMedia}
            style={{
              height: "100%",
              width: "100%",
              display: !webcamStreaming ? "none" : "block",
            }}
          ></Webcam> */}
        <Flex
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            className="timer-wrapper"
            position="relative"
            // top="61%"
            // left="38.2%"
            opacity={1}
            zIndex={3}
            alignSelf="flex-start"
            padding={3}
          >
            {/* {startTimer && ( */}
            <CountdownCircleTimer
              isPlaying
              duration={60}
              trailColor={"#000000"}
              colors={["#ffffff", "#ffffff", "#ae0000", "#ae0000"]}
              colorsTime={[60, 15, 10, 0]}
              onComplete={() => ({ shouldRepeat: true, delay: 1 })}
              size={50}
              strokeWidth={6}
              trailStrokeWidth={0}
            ></CountdownCircleTimer>
            {/* )} */}
          </Box>
          <div
            className="video-stream"
            style={{ width: "100%", height: "100%" }}
          >
            {myVideo && (
              <VideoPlayer
                style={{ width: "100%", height: "100%" }}
                videoTrack={myVideo}
              />
            )}
          </div>
        </Flex>
        <Flex
          width="100%"
          height="calc(100vh * 0.1)"
          bg="gray.300"
          flexDirection="column"
          justifyContent="flex-end"
          position="relative"
          top="calc(100vh * -0.1)"
          sx={{
            background:
              "linear-gradient(to top, rgb(0,0,0,0.6) 10%, rgb(0,0,0,0.3) 40%, rgb(255,255,255,0) 80%)",
          }}
        >
          <Flex
            width="100%"
            height="calc(100vh * 0.15)"
            bg="gray.300"
            flexDirection="row"
            position="relative"
            alignItems="flex-end"
            pb="10px"
            justifyContent="space-between"
            sx={{
              background:
                "linear-gradient(to top, rgb(0,0,0,0.7), rgb(0,0,0,0))",
            }}
          >
            <Text
              fontSize="3xl"
              color="white"
              p="1"
              pl="3"
              fontWeight="600"
              position="relative"
              top="0.5rem"
            >
              You
            </Text>
            <ButtonGroup
              size={["xs", "sm", "md"]}
              variant="outline"
              spacing="2"
              color="white"
              p="0.2rem"
              pr="0.75rem"
            >
              <Button
                _hover={{ color: "black", bg: "#f4f4f5", borderColor: "white" }}
              >
                <TbArrowsDoubleNeSw className="icon" />
              </Button>
              <Button
                _hover={{ color: "black", bg: "#f4f4f5", borderColor: "white" }}
                onClick={handleSkipQuestion}
              >
                <MdOutlineSkipNext />
              </Button>
              <Button
                _hover={{ color: "black", bg: "#f4f4f5", borderColor: "white" }}
              >
                <MdOutlineQuestionAnswer />
              </Button>
            </ButtonGroup>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default AppDemo;
