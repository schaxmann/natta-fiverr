import { Box, Button, ButtonGroup, Flex, Text, Input } from "@chakra-ui/react";
import {
  MdMoreTime,
  MdOutlineSkipNext,
  MdOutlineQuestionAnswer,
  MdOutlinedFlag,
} from "react-icons/md";
import NextImage from "next/image";
import { useEffect, useRef, useState } from "react";
import { withTheme } from "@emotion/react";

const AppView = () => {
  const [runDemo, setRunDemo] = useState(false);
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [username, setUsername] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [webcamStreaming, setWebcamStreaming] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    // if (runDemo) {
    //   if (!videoEl) {
    //     return;
    //   }
    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 540, height: 468 },
        });
        videoRef.current.srcObject = stream;
      } catch (err) {
        console.log(err);
      }
    };
    getUserMedia();
  }, [runDemo, videoRef]);

  useEffect(() => {
    if (firstNameInput.length === 0 || lastNameInput.length === 0) {
      setButtonDisabled(true);
    }
    if (lastNameInput.length > 0) {
      setButtonDisabled(false);
    }
  }, [firstNameInput, lastNameInput]);

  return (
    <Box
      id="boundingBox"
      height="100vh"
      width="calc(100vh * (9/19.5))"
      minWidth="calc(100vh * (9/19.5))"
      bg="black"
      boxShadow="xl"
    >
      {!runDemo ? (
        <Flex
          height="100%"
          width="100%"
          color="black"
          opacity="80%"
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Input
            width="50%"
            placeholder="First Name"
            textAlign="center"
            textColor="white"
            onChange={(e) => {
              setFirstNameInput(e.target.value);
            }}
          />
          <Input
            mt="0.5rem"
            width="50%"
            placeholder="Last Name"
            textAlign="center"
            textColor="white"
            onChange={(e) => {
              setLastNameInput(e.target.value);
            }}
          />
          <Button
            disabled={buttonDisabled}
            colorScheme="gray"
            color="var(--chakra-colors-gray-800)"
            border="2px solid black"
            mt="2rem"
            _hover={{
              color: "white",
              backgroundColor: "black",
              border: "2px solid white",
            }}
            onClick={() => {
              setRunDemo(true);
              setUsername(
                `${firstNameInput[0].toUpperCase()}${firstNameInput.substring(
                  1
                )} ${lastNameInput[0].toUpperCase()}.`
              );
            }}
          >
            Run Demo
          </Button>
        </Flex>
      ) : (
        <Flex flexDir="column" align="center">
          <Box width="100%" height="calc(100vh * 0.4)" bg="white">
            <NextImage
              src="/Person_1.jpeg"
              layout="responsive"
              height="468px"
              width="540px"
            ></NextImage>
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
                  Callum R.
                </Text>
                <ButtonGroup
                  size="md"
                  variant="outline"
                  spacing="2"
                  colorScheme="gray"
                  color="white"
                  p="0.2rem"
                  pr="0.75rem"
                >
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
              fontSize="2xl"
              textAlign="center"
              fontWeight="600"
              display="inline"
              paddingBottom="3px"
            >
              <span
                style={{
                  borderBottom: "4px solid var(--chakra-colors-gray-800)",
                }}
              >
                &quot;If you could live anywhere in the world, but you had
              </span>{" "}
              to move there tomorrow, where would you go?&quot;
            </Text>
          </Flex>
          <Box width="100%" height="calc(100vh * 0.4)" bg="white">
            {webcamStreaming ? (
              <NextImage
                src="/Person_2.jpeg"
                layout="responsive"
                height="468px"
                width="540px"
              ></NextImage>
            ) : (
              <video ref={videoRef} autoPlay />
            )}
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
                  {username}
                </Text>
                <ButtonGroup
                  size="md"
                  variant="outline"
                  spacing="2"
                  colorScheme="gray"
                  color="white"
                  p="0.2rem"
                  pr="0.75rem"
                >
                  <Button>
                    <MdMoreTime />
                  </Button>
                  <Button>
                    <MdOutlineSkipNext />
                  </Button>
                  <Button>
                    <MdOutlineQuestionAnswer />
                  </Button>
                </ButtonGroup>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default AppView;

// TODO Webcam stream loading
