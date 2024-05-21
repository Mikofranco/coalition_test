import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import authImg from "../../components/assets/images/authImg.svg";
import Register from "../../components/AuthPage/Register";
import Login from "../../components/AuthPage/Login";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setISregister] = useState(true);

  const handleLoginBtn = () => {
    if (!isLogin) {
      setIsLogin(true);
      setISregister(false);
    }
  };
  const handleRegisterBtn = () => {
    if (!isRegister) {
      setIsLogin(false);
      setISregister(true);
    }
  };
  return (
    <Box
      display={"flex"}
      alignItems="center"
      justifyContent="center"
      bg="gray.100"
      h={"100vh"}
      p={"2rem"}
    >
      <Flex
        className="wrapper"
        w={["100%", ""]}
        maxW={["  ", "1200px"]}
        border={"1px solid #b2b0c0"}
        h={["80vh"]}
        justifyContent={"center"}
        borderRadius={5}
      >
        <Box
          className="image-area"
          backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${authImg})`}
          backgroundSize="cover"
          backgroundPosition="center"
          color="white"
          p="20px"
          flex={"1"}
          display={["none", "block"]}
        >
          <Heading>Chatter</Heading>
          <Text fontSize={"large"}>
            Unleash the Power of Words, Connect with Like-minded Readers and
            Writers
          </Text>
        </Box>

        <Box className="auth-area" flex={"1"} p={["1rem", "2rem"]}>
          <Flex gap={1}>
            <Box flex={"1"}>
              <Text cursor={"pointer"} onClick={handleRegisterBtn} pl={5} fontSize={"x-large"}>
                Register
              </Text>
              <Box backgroundColor={isRegister ? "rgba(84, 62, 224, 1)":"lightGray"} w={"100%"} h={1}   transition="background-color 0.3s ease"></Box>
            </Box>
            <Box flex={"1"}>
              <Text cursor={"pointer"} onClick={handleLoginBtn} textAlign={"right"} pr={5} fontSize={"x-large"}>
                Login
              </Text>
              <Box backgroundColor={isLogin ? "rgba(84, 62, 224, 1)":"lightGray"} w={"100%"} h={1 }   transition="background-color 0.3s ease"></Box>
            </Box>
          </Flex>
          {isRegister && <Register />}
          {isLogin && <Login />}
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthPage;
