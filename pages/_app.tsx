import {
  Box,
  calc,
  ChakraProvider,
  extendTheme,
  Flex,
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
            <Text fontSize="5xl">Natter.ly</Text>
            <Text fontSize="3xl">The home of interesting conversation</Text>
            <Text fontSize="2xl">
              Natterly was founded on the fundamental belief that good
              conversation is food for the soul.
            </Text>
            <Text fontSize="2xl">
              The framework we have created exists to facilitate meaningful
              one-to-one interaction at scale, for those tired of traditional
              platforms.
            </Text>
          </Box>
        </Box>
        <Box
          id="boundingBox"
          height="100vh"
          width="calc(100vh * (9/19.5))"
          minWidth="calc(100vh * (9/19.5))"
          bg="black"
        ></Box>
        <Box
          id="leftColumn"
          height="100vh"
          maxWidth="calc(50vw - 50vh * 9 / 19.5)"
          flexGrow="1"
          bg="gray.400"
        >
          <Box height="100%" p="50px" pt="35px">
            <Text fontSize="3xl" textAlign="right">
              Under The Hood:
            </Text>
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
