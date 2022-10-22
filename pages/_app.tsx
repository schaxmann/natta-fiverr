import {
  Box,
  calc,
  ChakraProvider,
  extendTheme,
  Flex,
  Heading,
  Highlight,
  Text,
} from "@chakra-ui/react";
import "reset-css";
import NextImage from "next/image";

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
      <Flex
        position="absolute"
        height="100vh"
        width="100vw"
        justify="center"
        justifyContent="space-between"
      >
        <Box
          id="leftColumn"
          height="100vh"
          maxWidth="calc(50vw - 50vh * 9 / 19.5)"
          flexGrow="1"
          bg="gray.400"
        >
          <Box height="100%" p="50px" pt="0">
            <NextImage src="/favicon" width="20px" height="20px"></NextImage>
            <Heading lineHeight="tall"> Natter.ly</Heading>
            <Heading lineHeight="tall" fontSize="3xl" pt="10px">
              The home of{" "}
              <Highlight
                query={["real"]}
                styles={{ px: "2", py: "1", rounded: "full", bg: "teal.100" }}
              >
                real conversation
              </Highlight>
            </Heading>
            <Text fontSize="2xl" pt="20px">
              Natterly was founded on the fundamental belief that good
              conversation is food for the soul.
            </Text>
            <Text fontSize="2xl" pt="20px">
              Our framework exists to facilitate meaningful one-to-one
              interaction, for those tired of traditional platforms.
            </Text>
          </Box>
        </Box>
        <Box
          id="boundingBox"
          height="100vh"
          width="calc(100vh * (9/19.5))"
          minWidth="calc(100vh * (9/19.5))"
          bg="black"
        >
          <Flex flexDir="column" align="center">
            <Box width="100%" height="calc(100vh * 0.4)" bg="white">
              <NextImage
                src="/Person_1.jpeg"
                layout="responsive"
                height="398px"
                width="540px"
              ></NextImage>
              <Flex
                width="100%"
                height="calc(100vh * 0.06)"
                bg="gray.300"
                opacity="70%"
                flexDirection="column"
                justifyContent="flex-end"
              >
                <Text fontSize="3xl">Username</Text>
              </Flex>
            </Box>
            <Flex
              width="100%"
              height="calc(100vh * 0.2)"
              bg="orange"
              flexDirection="column"
              justifyContent="center"
            >
              <Text fontSize="2xl" textAlign="center">
                This will be the question
              </Text>
            </Flex>
            <Box width="100%" height="calc(100vh * 0.4)" bg="white">
              <NextImage
                src="/Person_2.jpeg"
                layout="responsive"
                height="398px"
                width="540px"
              ></NextImage>
              <Flex
                width="100%"
                height="calc(100vh * 0.06)"
                bg="gray.300"
                opacity="70%"
                flexDirection="column"
                justifyContent="flex-end"
              >
                <Text fontSize="3xl">Username</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box
          id="leftColumn"
          height="100vh"
          maxWidth="calc(50vw - 50vh * 9 / 19.5)"
          flexGrow="1"
          bg="gray.400"
        >
          <Box height="100%" p="50px" pt="35px">
            <Heading fontSize="3xl" textAlign="right">
              Under The Hood:
            </Heading>
            <Text fontSize="2xl" textAlign="right">
              Natterly was founded on the fundamental belief that good
              conversation is food for the soul.
            </Text>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;

{
  /* {Component.authpage ? (
        <Component {...pageProps} />
      ) : (
        <PlayerLayout>
          <Component {...pageProps} />
        </PlayerLayout>
      )} */
}
