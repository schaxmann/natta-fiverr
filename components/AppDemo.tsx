import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Text,
  Input,
  Spinner,
  Tooltip,
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
import { useEffect, useRef, useState } from "react";
import {
  ICameraVideoTrack,
  IRemoteVideoTrack,
  IAgoraRTCClient,
  IRemoteAudioTrack,
} from "agora-rtc-sdk-ng";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useRouter } from "next/router";
import { useBeforeunload } from "react-beforeunload";
import io from "socket.io-client";

let socket: any;

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

function deleteRoom(roomId: string): Promise<TCreateRoomResponse> {
  return fetch(`/api/rooms/${roomId}`, {
    method: "DELETE",
  }).then((response) => response.json());
}

function getRandomRoom(userId: string): Promise<TGetRandomRoomResponse> {
  return fetch(`/api/rooms?userId=${userId}`).then((response) =>
    response.json()
  );
}

function setQuestionDb(roomId: string, questionId: string): any {
  return fetch(`/api/rooms?roomId=${roomId}&questionId=${questionId}`, {
    method: "PUT",
  }).then((response) => response.json());
}

function getRandomQuestion(): any {
  return fetch(`/api/questions`).then((response) => response.json());
}

function setRoomToWaiting(roomId: string) {
  return fetch(`/api/rooms/${roomId}`, { method: "PUT" }).then((response) =>
    response.json()
  );
}

const VideoPlayer = ({
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

// async function listenForChanges() {
//   const db = await dbConnect();
//   const collection = db.collection("rooms");
//   // Define change stream
//   const changeStream = collection.watch();
//   // start listen to changes
//   changeStream.on("change", function (event: any) {
//     console.log(JSON.stringify(event));
//   });
// }

const AppDemo = (props: any) => {
  const [userId] = useState(parseInt(`${Math.random() * 1e6}`) + "");
  const [room, setRoom] = useState<Room | undefined>();
  const [themVideo, setThemVideo] = useState<IRemoteVideoTrack>();
  const [myVideo, setMyVideo] = useState<ICameraVideoTrack>();
  const [themAudio, setThemAudio] = useState<IRemoteAudioTrack>();
  const rtcClientRef = useRef<IAgoraRTCClient>();
  const [currentQuestion, setCurrentQuestion] = useState({
    question: "Press play to natta!",
    questionNo: 0,
  });
  const [isChatting, setIsChatting] = useState(false);
  const [playDisabled, setPlayDisabled] = useState(false);
  const [stopDisabled, setStopDisabled] = useState(true);
  const [skipDisabled, setSkipDisabled] = useState(true);
  const [reverseDisabled, setReverseDisabled] = useState(true);
  const [freeDisabled, setFreeDisabled] = useState(true);
  const [startTimer, setStartTimer] = useState(false);
  const [asker, setAsker] = useState(false);
  const [readyToGo, setReadyToGo] = useState(false);
  const [userLeft, setUserLeft] = useState(false);
  const [skip, setSkip] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [free, setFree] = useState(false);
  const [timerKey, setTimerKey] = useState(0);
  const [emittedQuestion, setEmittedQuestion] = useState({
    question: "",
    questionNo: 0,
  });

  useEffect(() => {
    if (isChatting) {
      socketInitializer();
      return () => {
        socket.disconnect();
      };
    }
  }, [isChatting]);

  useEffect(() => {
    if (readyToGo && asker) {
      setFreeDisabled(false);
      setSkipDisabled(true);
      setReverseDisabled(true);
    } else if (readyToGo && !asker) {
      setFreeDisabled(true);
      setSkipDisabled(false);
      setReverseDisabled(false);
    }
  }, [asker, readyToGo]);

  async function socketInitializer() {
    await fetch("/api/socket");

    socket = io("/");

    socket.on("receive-message", (data: any) => {
      console.log(data);
      if (data.message == "skipQ") setSkip(true);
      else if (data.message == "reverseQ") {
        setReverse(true);
      } else if (data.message == "emitQuestion") emittedQHandler(data.question);
      else if (data.message == "freeQ") setFree(true);
    });
  }

  function handleSocket(button: string) {
    if (isChatting) {
      socket.emit("send-message", {
        message: button,
      });
    }
  }

  // function emitQ() {
  //   socket.emit("send-message", {
  //     message: "emitQuestion",
  //     question: currentQuestion,
  //   });
  // }

  useEffect(() => {
    if (reverse) {
      socket.emit("send-message", {
        message: "emitQuestion",
        question: currentQuestion,
      });
    }
  }, [currentQuestion, reverse]);

  function emittedQHandler(emittedQ: any) {
    setCurrentQuestion(emittedQ);
  }

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

    client.on("user-left", () => {
      setUserLeft(true);
    });

    return { tracks, client };
  }

  const router = useRouter();

  function handleStopClick() {
    deleteARoom();
    router.reload();
  }

  async function deleteARoom() {
    if (room) {
      deleteRoom(room._id);
    }
  }

  function handleStartChattingClicked() {
    connectToARoom();
    setIsChatting(true);
    setPlayDisabled(true);
    setStopDisabled(false);
  }

  async function handleQuestion(shouldChangeAsker: boolean) {
    const newQ = await getRandomQuestion();
    setCurrentQuestion({
      question: newQ[0].question,
      questionNo: currentQuestion.questionNo + 1,
    });
    if (shouldChangeAsker) {
      setAsker(!asker);
    }
  }

  async function handleSkipQuestion(shouldChangeAsker: boolean) {
    const newQ = await getRandomQuestion();
    setCurrentQuestion({
      question: newQ[0].question,
      questionNo: currentQuestion.questionNo + 1,
    });
    if (shouldChangeAsker) {
      setAsker(!asker);
    }
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
      // setAsker(false);

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
      setAsker(true);

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
        setCurrentQuestion({
          question: "Waiting for a partner to join...",
          questionNo: currentQuestion.questionNo + 1,
        });
      } else {
        // if (effectCount == 0) {
        // if (!readyToGo) {
        //   setCurrentQuestion({
        //     question: "Let's natta!",
        //     questionNo: currentQuestion.questionNo + 1,
        //   });
        setReadyToGo(true);
        handleQuestion(false);
        // const timeout = setTimeout(() => handleQuestion(false), 1100);
        // return () => {
        //   clearTimeout(timeout);
        // };
      }
    }
  }, [isChatting, themVideo]);

  useEffect(() => {
    if (skip) {
      handleSkipQuestion(false);
      setSkip(false);
    } else if (reverse) {
      setAsker(!asker);
      setReverse(false);
      setCurrentQuestion(emittedQuestion);
    } else if (free) {
      setCurrentQuestion({
        question: "Ask anything that your heart desires!",
        questionNo: currentQuestion.questionNo + 1,
      });
      setFree(false);
    } else if (readyToGo) {
      const timeout = setTimeout(() => handleQuestion(true), 60000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [currentQuestion, skip, reverse, free]);

  // useEffect(() => {
  //   if (readyToGo && room && asker) {
  //     setQuestionDb(room._id, currentQuestion.questionNo.toString());
  //   }
  // }, [currentQuestion]);

  // useEffect(() => {
  //   if (readyToGo) {
  //     const timeout = setTimeout(() => handleQuestion(true), 30100);
  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }
  // }, [themVideo]);

  useEffect(() => {
    if ((readyToGo && skip) || (readyToGo && reverse) || (readyToGo && free)) {
      setTimerKey(timerKey + 1);
    } else if (readyToGo) {
      setTimeout(() => setStartTimer(true), 200);
    }
  }, [readyToGo, skip, reverse, free]);

  useEffect(() => {
    if (userLeft) {
      router.reload();
    }
  }, [userLeft]);

  useBeforeunload(deleteARoom);

  return (
    <Flex flexDir="column" align="center">
      <Box width="100%" height="calc(100vh * 0.4)" bg="black">
        <Flex
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <div
            className="video-stream"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            {themVideo && (
              <VideoPlayer
                style={{ width: "100%", height: "100%" }}
                videoTrack={themVideo}
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
            <Box
              className="timer-wrapper"
              // top="61%"
              // left="38.2%"
              opacity={1}
              zIndex={3}
              p="0.2rem"
              pl="0.75rem"
            >
              {startTimer && (
                <CountdownCircleTimer
                  isPlaying
                  key={timerKey}
                  duration={60}
                  trailColor={"#000000"}
                  colors={["#ffffff", "#ffffff", "#ae0000", "#ae0000"]}
                  colorsTime={[60, 10, 5, 0]}
                  onComplete={() => ({ shouldRepeat: true, delay: 0 })}
                  size={50}
                  strokeWidth={6}
                  trailStrokeWidth={0}
                ></CountdownCircleTimer>
              )}
            </Box>
            <ButtonGroup
              size={["xs", "sm", "md"]}
              variant="outline"
              spacing="2"
              color="white"
              p="0.2rem"
              pr="0.75rem"
            >
              <Button
                size={{ base: "md", lg: "lg" }}
                onClick={handleStartChattingClicked}
                disabled={playDisabled}
                _hover={{ color: "black", bg: "#f4f4f5", borderColor: "white" }}
              >
                <MdPlayArrow />
              </Button>
              <Button
                size={{ base: "md", lg: "lg" }}
                disabled={stopDisabled}
                _hover={{ color: "black", bg: "#f4f4f5", borderColor: "white" }}
                onClick={handleStopClick}
              >
                <MdStop />
              </Button>
              <Button size={{ base: "md", lg: "lg" }} colorScheme="red">
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
        >
          {!readyToGo ? (
            <Text fontSize="xl">{currentQuestion.question}</Text>
          ) : (
            <>
              {!asker ? (
                <Text fontSize="xl">Your partner is asking a question</Text>
              ) : (
                <Text fontSize="xl">{currentQuestion.question}</Text>
              )}
            </>
          )}
        </Text>
      </Flex>
      <Box width="100%" height="calc(100vh * 0.4)" bg="black">
        <Flex
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
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
              <Tooltip
                label="Return Question"
                fontSize="sm"
                placement="top-start"
                bg="rgba(255,255,255,0.4)"
                color="black"
              >
                <Button
                  size={{ base: "md", lg: "lg" }}
                  id="reverseQ"
                  _hover={{
                    color: "black",
                    bg: "#f4f4f5",
                    borderColor: "white",
                  }}
                  onClick={() => handleSocket("reverseQ")}
                  disabled={reverseDisabled}
                >
                  <TbArrowsDoubleNeSw className="icon" />
                </Button>
              </Tooltip>
              <Tooltip
                label="Skip Question"
                fontSize="sm"
                bg="rgba(255,255,255,0.4)"
                color="black"
              >
                <Button
                  size={{ base: "md", lg: "lg" }}
                  id="skipQ"
                  _hover={{
                    color: "black",
                    bg: "#f4f4f5",
                    borderColor: "white",
                  }}
                  onClick={() => handleSocket("skipQ")}
                  disabled={skipDisabled}
                >
                  <MdOutlineSkipNext />
                </Button>
              </Tooltip>
              <Tooltip
                label="Free Question"
                fontSize="sm"
                placement="top-end"
                bg="rgba(255,255,255,0.4)"
                color="black"
              >
                <Button
                  size={{ base: "md", lg: "lg" }}
                  id="freeQ"
                  _hover={{
                    color: "black",
                    bg: "#f4f4f5",
                    borderColor: "white",
                  }}
                  onClick={() => handleSocket("freeQ")}
                  disabled={freeDisabled}
                >
                  <MdOutlineQuestionAnswer />
                </Button>
              </Tooltip>
            </ButtonGroup>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default AppDemo;
