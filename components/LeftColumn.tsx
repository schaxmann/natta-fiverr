import { Box, Flex, Heading, Highlight, Stack, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import { Image } from "@chakra-ui/react";

const LeftColumn = () => {
  return (
    <Flex flex="1" id="leftColumn" alignItems="center">
      <Stack spacing={5}>
        <Image src="/natta-logo.png" maxW="70%" alt="logo" />
        {/* <Heading lineHeight="tall" fontWeight="800" display="inline">
          {" "}
          Natta.
        </Heading> */}
        <Heading
          fontWeight="800"
          pt="1"
          lineHeight="tall"
          fontSize={{ md: "2xl", xl: "3xl" }}
        >
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
        <Stack spacing="2">
          <Text fontSize={{ md: "xl", xl: "2xl" }}>
            Natta was founded on the fundamental belief that good conversation
            is food for the soul.
          </Text>
          <Text fontSize={{ md: "xl", xl: "2xl" }}>
            We facilitate meaningful interaction for users who are tired of
            antisocial networks.
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default LeftColumn;
