import { Heading, Box, Text, Image, Flex } from "@chakra-ui/react";
import respiratoryIcon from "../assets/respiratory rate.svg";
import heartIcon from "../assets/HeartBPM.svg";
import tempatureIcon from "../assets/temperature.svg";
import { jesica } from "../../utils/data";


import React from "react";
import Graph from "../Graph/Graph";

const Middle = ({ patient }) => {
  console.log("middle", patient);
  return (
    <Box borderRadius={"25px"}  backgroundColor={"#fff"} p={5}>
      <Heading fontSize={"x-large"} mb={7}>Diagnosis History</Heading>
      <Box>
        <Graph/>
        <Flex w={"100%"} gap={4}>
          <Box backgroundColor={"#E0F3FA"} borderRadius={"12px"} w={"100%"} p={4}>
            <Image src={respiratoryIcon} />
            <Text mt={5}>Respiratory rate</Text>
            <Text fontSize={"x-large"} fontWeight={"bold"}>{jesica.diagnosis_history[0].respiratory_rate.value} bpm</Text>
            <Text>{jesica.diagnosis_history[0].respiratory_rate.levels}</Text>
          </Box>
          <Box backgroundColor={"#FFE6E9"} borderRadius={"12px"} w={"100%"}  p={4}>
            <Image src={tempatureIcon} />
            <Text mt={5}>Temprature</Text>
            <Text fontSize={"x-large"} fontWeight={"bold"}>{jesica.diagnosis_history[0].temperature.value} f</Text>
            <Text>{jesica.diagnosis_history[0].temperature.levels}</Text>
          </Box>
          <Box backgroundColor={"#FFE6F1"} borderRadius={"12px"} w={"100%"}  p={4}>
            <Image src={heartIcon} />
            <Text mt={5}>Heart rate</Text>
            <Text fontSize={"x-large"} fontWeight={"bold"}>{jesica.diagnosis_history[0].heart_rate.value} bpm</Text>
            <Text>{jesica.diagnosis_history[0].heart_rate.levels}</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Middle;
