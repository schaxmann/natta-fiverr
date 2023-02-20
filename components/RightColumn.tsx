import { Box, Heading, Text, Flex, Switch } from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const RightColumn = () => {
  return (
    <Flex
      id="rightColumn"
      height="100vh"
      flexDir="column"
      maxWidth="calc(50vw - 50vh * 9 / 19.5)"
      flexGrow="1"
      bg="white"
      alignItems="center"
    >
      <Flex flexGrow="1" height="calc(100vh / 3)"></Flex>
      <Flex
        flexDir="column"
        flexGrow="1"
        pr="3.15rem"
        pl="10rem"
        height="calc(100vh / 3)"
        justifyContent="center"
      >
        <Heading
          fontSize="3xl"
          textAlign="right"
          fontWeight="800"
          pt={16}
          pb="1"
        >
          Feedback:
        </Heading>
        <Text fontSize="2xl" textAlign="right" pt="20px">
          Whether you rate us or want to slate us, your opinion matters to our
          team.
        </Text>
        <Text fontSize="2xl" textAlign="right" pt="20px">
          *Feedback form pending...*
        </Text>
      </Flex>
      <Flex flexGrow="1" height="calc(100vh / 3)">
        <Box></Box>
      </Flex>
    </Flex>
  );
};

export default RightColumn;
