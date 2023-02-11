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
    <Center flex="1" p={{ base: 4, md: 0 }}>
      <Flex height="calc(100vh / 3)">
        {/* <Flex position="absolute" right="10" top="8" gap="3">
          <MdLightMode style={{ marginTop: "2px" }} />
          <Switch colorScheme="darkMode"></Switch>
          <MdDarkMode style={{ marginTop: "2px" }} />
        </Flex> */}
      </Flex>
      <Stack
        spacing={4}
        textAlign={{ xl: "end" }}
        fontSize={{ base: "xl", xl: "2xl" }}
      >
        <Heading fontSize={{ base: "2xl", xl: "3xl" }} fontWeight="800">
          Feedback:
        </Heading>
        <Text>
          Whether you rate us or want to slate us, your opinion matters to our
          team.
        </Text>
        <Text>*Feedback form pending...*</Text>
      </Stack>
    </Center>
  );
};

export default RightColumn;
