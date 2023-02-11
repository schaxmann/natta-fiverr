import {
  Box,
  Heading,
  Text,
  Flex,
  Switch,
  Stack,
  Center,
} from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const RightColumn = () => {
  return (
    <Center flex="1">
      <Flex height="calc(100vh / 3)">
        {/* <Flex position="absolute" right="10" top="8" gap="3">
          <MdLightMode style={{ marginTop: "2px" }} />
          <Switch colorScheme="darkMode"></Switch>
          <MdDarkMode style={{ marginTop: "2px" }} />
        </Flex> */}
      </Flex>
      <Stack spacing={4}>
        <Heading
          fontSize={{ md: "2xl", xl: "3xl" }}
          textAlign="right"
          fontWeight="800"
        >
          Feedback:
        </Heading>
        <Text fontSize={{ md: "xl", xl: "2xl" }} textAlign="right">
          Whether you rate us or want to slate us, your opinion matters to our
          team.
        </Text>
        <Text fontSize={{ md: "xl", xl: "2xl" }} textAlign="right">
          *Feedback form pending...*
        </Text>
      </Stack>
    </Center>
  );
};

export default RightColumn;
