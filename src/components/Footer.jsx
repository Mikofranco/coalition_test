import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "./assets/Logo";

const Footer = () => {
  return (
    <Box bgColor={"#FFEDCC"} p={["2rem 2rem", "5rem"]}>
      <SimpleGrid columns={[2,4]} maxW={"1400px"} m={"auto"} gap={"15px"}>
        <Logo />
        <Box>
          <Heading fontSize={"mediun"} mb={"15px"}>Explore</Heading>
          <Text mb={"5px"}>Community</Text>
          <Text mb={"5px"}>Trending Blogs</Text>
          <Text mb={"5px"}>Chatter for teams</Text>
        </Box>
        <Box>
          <Heading fontSize={"medium"} mb={"15px"}>Support</Heading>
          <Text mb={"5px"}>Support Docs</Text>
          <Text mb={"5px"}>Join Slack</Text>
          <Text mb={"5px"}>Contact</Text>
        </Box>
        <Box>
          <Heading fontSize={"medium"} mb={"15px"}>Official Blog</Heading>
          <Text mb={"5px"}>Official Blog</Text>
          <Text mb={"5px"}>Engineering Blog</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
