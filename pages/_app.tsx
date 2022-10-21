import { Box, ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import "reset-css";

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
      <Flex position="absolute" height="100vh" width="100vw" justify="center">
        <Box id="leftColumn" height="100vh" flexGrow="1" bg="gray.400">
          <p>I'm the left column</p>
        </Box>
        <Box
          id="boundingBox"
          height="100vh"
          width="calc(100vh * (9/19.5))"
          minWidth="calc(100vh * (9/19.5))"
          bg="black"
        ></Box>
        <Box id="rightColumn" height="100vh" bg="gray.400" flexGrow="1">
          <p>I'm the right column</p>
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
