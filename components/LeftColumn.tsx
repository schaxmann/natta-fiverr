import { Box, Flex, Heading, Highlight, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import { Image } from "@chakra-ui/react";

const LeftColumn = () => {
  return (
    <Flex
      id="leftColumn"
      height="100vh"
      maxWidth="calc(50vw - 50vh * 9 / 19.5)"
      flexGrow="1"
      bg="white"
      flexDirection="row"
      alignItems="center"
    >
      <Box pl="3.15rem" pr="7rem">
        <Box position="relative" display="inline" top="15px">
          <Image src="/natta-logo.png" width="70%" pb={5}></Image>
        </Box>
        {/* <Heading lineHeight="tall" fontWeight="800" display="inline">
          {" "}
          Natta.
        </Heading> */}
        <Heading lineHeight="tall" fontSize="3xl" pt="10px" pb="1">
          The home of{" "}
          {/* <Highlight
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
          > */}
          real conversation.
          {/* </Highlight> */}
        </Heading>
        <Text fontSize="2xl" pt="20px">
          Natta was founded on the fundamental belief that good conversation is
          food for the soul.
        </Text>
        <Text fontSize="2xl" pt="20px" pb={55}>
          We facilitate meaningful interaction for users who are tired of
          antisocial networks.
        </Text>
      </Box>
    </Flex>
  );
};

export default LeftColumn;
