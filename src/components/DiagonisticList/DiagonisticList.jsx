import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import "../leftSect/scrolbar.css";
import { jesica } from "../../utils/data";

const DiagonisticList = ({patient}) => {
  const jessicaDiagonisticList = jesica.diagnostic_list;
  
  return (
    <Box backgroundColor={"#fff"} borderRadius={"20px"} mt={7} p={7}>
      <Heading fontSize={"x-large"} mb={7}>Diagonistic List</Heading>
      <Flex
        alignItems={"center"}
        backgroundColor={"#f3efefc5"}
        p={4}
        borderRadius={"20px"}
        gap={5}
      >
        <Heading fontSize={"medium"} flex={1}>
          Problem/diagnosis
        </Heading>
        <Heading fontSize={"medium"} flex={2}>
          Description
        </Heading>
        <Heading fontSize={"medium"} flex={1}>
          Status
        </Heading>
      </Flex>
      <Box mt={4} height="20vh" overflowY="scroll" className="custom-scrollbar">
        {jessicaDiagonisticList.map((item) => (
          <Flex alignItems={"center"} p={5} gap={5}>
            <Text fontSize={"medium"} flex={1}>
              {item.name}
            </Text>
            <Text fontSize={"medium"} flex={2}>
              {item.description}
            </Text>
            <Text fontSize={"medium"} flex={1}>
              {item.status}
            </Text>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default DiagonisticList;
