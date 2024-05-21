import { Heading, Box, Input, Flex, Button, Image } from "@chakra-ui/react";
import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import gmail from "../assets/images/gmail.svg";
import linkedin from "../assets/images/linkedin.svg";
const Register = () => {
  return (
    <Box>
      <Heading fontSize={"x-large"} color={"#484747"} mb={5} mt={5} textAlign={"center"}>Register as a Writer/Reader</Heading>
      <Flex gap={3}>
        <FormControl mb={5} isRequired>
          <FormLabel color={"#484747"}>First name</FormLabel>
          <Input
            type="name"
            boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          />
        </FormControl>
        <FormControl mb={5} isRequired>
          <FormLabel color={"#484747"}>Last name</FormLabel>
          <Input
            type="name"
            boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          />
        </FormControl>
      </Flex>

      <FormControl mb={5} isRequired>
        <FormLabel color={"#484747"}>Email address</FormLabel>
        <Input
          type="email"
          boxShadow={"rgba(99, 99, 99, 0.1) 0px 2px 4px 4px"}
        />
      </FormControl>

      <FormControl mb={5} isRequired>
        <FormLabel color={"#484747"}>Password</FormLabel>
        <Input
          type="password"
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
        />
      </FormControl>

      <FormControl mb={5} isRequired>
        <FormLabel color={"#484747"}>Confirm password</FormLabel>
        <Input
          type="password"
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
        />
      </FormControl>

      <Input
        type="submit"
        cursor={"pointer"}
        backgroundColor={"rgba(84, 62, 224, 1)"}
        color={"#fff"}
        mb={5}
      />
      <Button
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
        color={"#474545"}
        w={"100%"}
        mb={5}
      >
        {" "}
        <Image src={gmail} alt="gmail logo" ml={5}/> Sign up with google
      </Button>
      <Button
        border={"1px solid lightGray"}
        color={"#474545"}
        w={"100%"}
      >
        <Image src={linkedin} alt="linkedin logo" /> Sign up with linkedin
      </Button>
    </Box>
  );
};

export default Register;
