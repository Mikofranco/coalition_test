import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import calender from "../assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg";
import femaleIcon from "../assets/FemaleIcon.svg";
import phone from "../assets/PhoneIcon.svg";
import insuranceIcon from "../assets/InsuranceIcon.svg";
import { formatDate, jessicaData } from "../../service/getService";
import { jesica } from "../../utils/data";

const RightSect = ({ patient }) => {
  const [jessicaDate, setJessicaDate] = useState("");

  useEffect(() => {
    setJessicaDate(formatDate(jesica.profile_picture));
  }, []);

  console.log("jessica", jesica);

  if (!patient) {
    return (
      <Box
        borderRadius={"25px"}
        width={"100%"}
        backgroundColor={"#fff"}
        p={7}
        h={"fit-content"}
      >
        <Box mt={4} margin={"auto"} maxW={"200px"}>
          <Image
            src={jesica?.profile_picture}
            alt={`${jesica?.name}'s profile`}
            w={"100%"}
          />
        </Box>

        <Box mt={4}>
          <Heading fontSize={"x-large"} textAlign={"center"} mb={7}>
            {jesica?.name}
          </Heading>

          <Flex gap={"15px"} alignItems={"center"} mb={4}>
            <Box w={"14px"} m={2}>
              <Image src={calender} display={"block"} w={"100%"} />
            </Box>
            <Box>
              <Text fontSize={"14px"} mb={0}>
                Date of birth
              </Text>
              <Text fontWeight={"bold"} fontSize={"14px"}>
                {jesica.date_of_birth}
              </Text>
            </Box>
          </Flex>

          <Flex gap={"15px"} alignItems={"center"} mb={4}>
            <Box w={"30px"}>
              <Image src={femaleIcon} display={"block"} w={"100%"} />
            </Box>
            <Box>
              <Text fontSize={"14px"}>Gender</Text>
              <Text fontWeight={"bold"} fontSize={"14px"}>
                {jesica?.gender}
              </Text>
            </Box>
          </Flex>

          <Flex gap={"15px"} alignItems={"center"} mb={4}>
            <Box w={"30px"}>
              <Image src={phone} display={"block"} w={"100%"} />
            </Box>
            <Box>
              <Text fontSize={"14px"}>Contact info</Text>
              <Text fontWeight={"bold"} fontSize={"14px"}>
                {jesica?.phone_number}
              </Text>
            </Box>
          </Flex>

          <Flex gap={"15px"} alignItems={"center"} mb={4}>
            <Box w={"30px"}>
              <Image src={phone} display={"block"} w={"100%"} />
            </Box>
            <Box>
              <Text fontSize={"14px"}>Emergency Contacts</Text>
              <Text fontWeight={"bold"} fontSize={"14px"}>
                {jesica?.emergency_contact}
              </Text>
            </Box>
          </Flex>

          <Flex gap={"15px"} alignItems={"center"} mb={4}>
            <Box w={"30px"}>
              <Image src={insuranceIcon} display={"block"} w={"100%"} />
            </Box>
            <Box>
              <Text fontSize={"14px"}>Insurance Provider</Text>
              <Text fontWeight={"bold"} fontSize={"14px"}>
                {jesica?.insurance_type}
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box textAlign={"center"} m={"2rem auto"}>
          <Button
            backgroundColor={"#01F0D0"}
            color={"#000"}
            borderRadius={"20px"}
            fontSize={"14px"}
            textAlign={"center"}
          >
            Show All Information
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box
        borderRadius={"25px"}
        width={"100%"}
        backgroundColor={"#fff"}
        p={7}
        h={"fit-content"}
      >
        <Box mt={4} margin={"auto"} maxW={"200px"}>
          <Image
            src={patient?.profile_picture}
            alt={`${patient?.name}'s profile`}
            w={"100%"}
          />
        </Box>

        <Box mt={4}>
          <Heading fontSize={"x-large"} textAlign={"center"} mb={7}>
            {patient?.name}
          </Heading>

          <Flex gap={"15px"} alignItems={"center"} mb={4}>
            <Box w={"14px"} m={2}>
              <Image src={calender} display={"block"} w={"100%"} />
            </Box>
            <Box>
              <Text fontSize={"14px"} mb={0}>
                Date of birth
              </Text>
              <Text fontWeight={"bold"} fontSize={"14px"}>
                {patient.date_of_birth}
              </Text>
            </Box>
          </Flex>

          <Flex gap={"15px"} alignItems={"center"} mb={4}>
            <Box w={"30px"}>
              <Image src={femaleIcon} display={"block"} w={"100%"} />
            </Box>
            <Box>
              <Text fontSize={"14px"}>Gender</Text>
              <Text fontWeight={"bold"} fontSize={"14px"}>
                {patient?.gender}
              </Text>
            </Box>
          </Flex>

          <Flex gap={"15px"} alignItems={"center"} mb={4}>
            <Box w={"30px"}>
              <Image src={phone} display={"block"} w={"100%"} />
            </Box>
            <Box>
              <Text fontSize={"14px"}>Contact info</Text>
              <Text fontWeight={"bold"} fontSize={"14px"}>
                {patient?.phone_number}
              </Text>
            </Box>
          </Flex>

          <Flex gap={"15px"} alignItems={"center"} mb={4}>
            <Box w={"30px"}>
              <Image src={phone} display={"block"} w={"100%"} />
            </Box>
            <Box>
              <Text fontSize={"14px"}>Emergency Contacts</Text>
              <Text fontWeight={"bold"} fontSize={"14px"}>
                {patient?.emergency_contact}
              </Text>
            </Box>
          </Flex>

          <Flex gap={"15px"} alignItems={"center"} mb={4}>
            <Box w={"30px"}>
              <Image src={insuranceIcon} display={"block"} w={"100%"} />
            </Box>
            <Box>
              <Text fontSize={"14px"}>Insurance Provider</Text>
              <Text fontWeight={"bold"} fontSize={"14px"}>
                {patient?.insurance_type}
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box textAlign={"center"} m={"2rem auto"}>
          <Button
            backgroundColor={"#01F0D0"}
            color={"#000"}
            borderRadius={"20px"}
            fontSize={"14px"}
            textAlign={"center"}
          >
            Show All Information
          </Button>
        </Box>
      </Box>
  );
};

export default RightSect;
