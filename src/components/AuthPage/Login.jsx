import { Box, Heading, Input } from "@chakra-ui/react";
import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Box>
      <Heading fontSize={"x-large"} color={"#484747"} mb={5} mt={5} textAlign={"center"}>
        Welcome back
      </Heading>
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
      <Input
        type="submit"
        cursor={"pointer"}
        backgroundColor={"rgba(84, 62, 224, 1)"}
        color={"#fff"}
        mb={5}
      />
    </Box>
  );
};

export default Login;
