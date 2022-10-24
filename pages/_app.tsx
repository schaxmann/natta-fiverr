import {
  Box,
  Button,
  ButtonGroup,
  calc,
  ChakraProvider,
  extendTheme,
  Flex,
  Heading,
  Highlight,
  Text,
} from "@chakra-ui/react";
import "reset-css";
import {
  MdMoreTime,
  MdOutlineSkipNext,
  MdOutlineQuestionAnswer,
  MdOutlinedFlag,
} from "react-icons/md";
import { RiQuestionnaireLine } from "react-icons/ri";
import NextImage from "next/image";
import Head from "next/head";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#F5F5F5",
      200: "#EEEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

// { Component, pageProps }

function MyApp() {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Natta.</title>
      </Head>
      <Flex
        position="absolute"
        height="100vh"
        width="100vw"
        justify="center"
        justifyContent="space-between"
      >
        <Flex
          id="leftColumn"
          height="100vh"
          maxWidth="calc(50vw - 50vh * 9 / 19.5)"
          flexGrow="1"
          bg="white"
          flexDirection="row"
          alignItems="center"
        >
          <Box p="50px" pr="7rem">
            <Box position="relative" display="inline" top="15px">
              <NextImage
                src="/favicon.ico"
                width="50px"
                height="50px"
              ></NextImage>
            </Box>
            <Heading lineHeight="tall" fontWeight="800" display="inline">
              {" "}
              Natta.
            </Heading>
            <Heading lineHeight="tall" fontSize="3xl" pt="10px" pb="1">
              The home of{" "}
              <Highlight
                query={["real"]}
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "whatsapp.50",
                  // outline: "3px solid red",
                  // textDecoration: "underline",
                  // borderBottom: "solid 4px var(--chakra-colors-gray-800)",
                  color: "var(--chakra-colors-gray-800)",
                }}
              >
                real conversation.
              </Highlight>
            </Heading>
            <Text fontSize="2xl" pt="20px">
              Natta was founded on the fundamental belief that good conversation
              is food for the soul.
            </Text>
            <Text fontSize="2xl" pt="20px">
              Our framework exists to facilitate meaningful one-to-one
              interaction, for those tired of traditional platforms.
            </Text>
          </Box>
        </Flex>
        <Box
          id="boundingBox"
          height="100vh"
          width="calc(100vh * (9/19.5))"
          minWidth="calc(100vh * (9/19.5))"
          bg="black"
          boxShadow="xl"
        >
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
              <NextImage
                src="/Person_2.jpeg"
                layout="responsive"
                height="468px"
                width="540px"
              ></NextImage>
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
                    Jaime F.
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
        </Box>
        <Flex
          id="leftColumn"
          height="100vh"
          maxWidth="calc(50vw - 50vh * 9 / 19.5)"
          flexGrow="1"
          bg="white"
          alignItems="center"
        >
          <Box p="50px" pl="7rem">
            <Heading fontSize="3xl" textAlign="right" fontWeight="800">
              Under The Hood:
            </Heading>
            <Text fontSize="2xl" textAlign="right" pt="20px">
              This section will contain explanations of features and
              functionality during demonstration of the app.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
