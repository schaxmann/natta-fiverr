import { Box, Heading, Text, Flex } from "@chakra-ui/react";

const RightColumn = () => {
  return (
    <Flex
      id="rightColumn"
      height="100vh"
      maxWidth="calc(50vw - 50vh * 9 / 19.5)"
      flexGrow="1"
      bg="white"
      alignItems="center"
    >
      <Box pr="3.15rem" pl="7rem">
        <Heading fontSize="3xl" textAlign="right" fontWeight="800">
          Under The Hood:
        </Heading>
        <Text fontSize="2xl" textAlign="right" pt="20px">
          This section will contain explanations of features and functionality
          during demonstration of the app.
        </Text>
      </Box>
    </Flex>
  );
};

export default RightColumn;
