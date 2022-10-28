import { Box, Button, ButtonGroup, Flex, Text, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Launch = (props) => {
  const { setRunDemo, setUsername } = props;
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (firstNameInput.length === 0 || lastNameInput.length === 0) {
      setButtonDisabled(true);
    }
    if (lastNameInput.length > 0) {
      setButtonDisabled(false);
    }
  }, [firstNameInput, lastNameInput]);

  return (
    <Flex
      height="100%"
      width="100%"
      color="black"
      opacity="80%"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Input
        width="50%"
        placeholder="First Name"
        textAlign="center"
        textColor="white"
        onChange={(e) => {
          setFirstNameInput(e.target.value);
        }}
      />
      <Input
        mt="0.5rem"
        width="50%"
        placeholder="Last Name"
        textAlign="center"
        textColor="white"
        onChange={(e) => {
          setLastNameInput(e.target.value);
        }}
      />
      <Button
        disabled={buttonDisabled}
        colorScheme="gray"
        color="var(--chakra-colors-gray-800)"
        border="2px solid black"
        mt="2rem"
        _hover={{
          color: "white",
          backgroundColor: "black",
          border: "2px solid white",
        }}
        onClick={() => {
          setRunDemo(true);
          setUsername(
            `${firstNameInput[0].toUpperCase()}${firstNameInput.substring(
              1
            )} ${lastNameInput[0].toUpperCase()}.`
          );
        }}
      >
        Run Demo
      </Button>
    </Flex>
  );
};

export default Launch;
