import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import logo from "./assets/TestLogo.svg";
import home from "./assets/home_FILL0_wght300_GRAD0_opsz24.svg";
import people from "./assets/group_FILL0_wght300_GRAD0_opsz24.svg";
import scheduoe from "./assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg";
import message from "./assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg";
import transaction from "./assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg";
import user from "./assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.jpg";
import settings from "./assets/settings_FILL0_wght300_GRAD0_opsz24.svg";
import icon from "./assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg";

const NavBar = () => {
  return (
    <Box
      // m={"0.5rem"}
      backgroundColor={"#fff"}
      p={"15px 2rem"}
      borderRadius={"30px"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Image src={logo} display={"block"} />

        <Flex className="links" b gap={"3rem"}>
          <Flex justifyContent={"center"} alignItems={"center"} gap={3} cursor={"pointer"}>
            <Image src={home} w={"15px"} /> <Text>Home</Text>
          </Flex>
          <Flex justifyContent={"center"} alignItems={"center"} cursor={"pointer"} gap={3} backgroundColor={"#01F0D0"} borderRadius={"20px"} p={"5px 15px"}>
            <Image src={people} w={"15px"} /> <Text> Patients</Text>
          </Flex>
          <Flex justifyContent={"center"} alignItems={"center"} cursor={"pointer"} gap={3}>
            <Image src={scheduoe} w={"15px"} /> <Text>Schedule</Text>
          </Flex>
          <Flex justifyContent={"center"} alignItems={"center"} cursor={"pointer"} gap={3}>
            <Image src={message} w={"15px"} /> <Text>Message</Text>
          </Flex>
          <Flex justifyContent={"center"} alignItems={"center"} cursor={"pointer"} gap={3}>
            <Image src={transaction} w={"15px"} /> <Text>Transaction</Text>
          </Flex>
        </Flex>

        <Flex justifyContent={"center"} alignItems={"center"} gap={"15px"}>
          <Image display={"block"} src={user} w={"50px"} h={"50px"} />
          <Box mr={3} cursor={"pointer"}>
            <Heading fontSize={"large"}>Dr. Jose Simmons</Heading>
            <Text color={"#707070"}>General Practitioner</Text>
          </Box>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            gap={"10px"}
            borderLeft={"2px solid lightGray"}
            paddingLeft={"5px"}
            h={"100%"}
          >
            <Image src={settings} ml={3} cursor={"pointer"}/>
            <Image src={icon} mr={3} cursor={"pointer"}/>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
