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
      <Flex flexGrow="1" height="calc(100vh / 3)">
        <Flex position="absolute" right="10" top="8" gap="3">
          <MdLightMode style={{ marginTop: "2px" }} />
          <Switch colorScheme="blackAlpha"></Switch>
          <MdDarkMode style={{ marginTop: "2px" }} />
        </Flex>
      </Flex>
      <Flex
        flexDir="column"
        flexGrow="1"
        pr="3.15rem"
        pl="7rem"
        height="calc(100vh / 3)"
        justifyContent="center"
      >
        <Heading fontSize="3xl" textAlign="right" fontWeight="800">
          Under The Hood:
        </Heading>
        <Text fontSize="2xl" textAlign="right" pt="20px">
          This section will contain explanations of features and functionality
          during demonstration of the app.
        </Text>
      </Flex>
      <Flex flexGrow="1" height="calc(100vh / 3)">
        <Box></Box>
      </Flex>
    </Flex>
  );
};

export default RightColumn;
