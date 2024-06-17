import React, { useState } from "react";
import { jesica } from "../../utils/data";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip,
} from "chart.js";
import { Box, Flex, Heading, Skeleton, Text } from "@chakra-ui/react";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip
);

const Graph = ({ patient }) => {
  const [noOfMonths, setNoOfMonths] = useState(6);
  const diagnosisHistory = jesica.diagnosis_history.slice(0, noOfMonths);
  const patientDiagnosisHistory = patient ? patient.diagnosis_history.slice(0, noOfMonths) : [];

  const years = diagnosisHistory
    .map((history) => `${history.month}, ${history.year}`)
    .reverse();
  const diastolicValues = diagnosisHistory
    .map((item) => item.blood_pressure.diastolic.value)
    .reverse();
  const systolicValues = diagnosisHistory
    .map((item) => item.blood_pressure.systolic.value)
    .reverse();

  const patientYears = patientDiagnosisHistory
    .map((history) => `${history.month}, ${history.year}`)
    .reverse();
  const patientDiastolicValues = patientDiagnosisHistory
    .map((item) => item.blood_pressure.diastolic.value)
    .reverse();
  const patientSystolicValues = patientDiagnosisHistory
    .map((item) => item.blood_pressure.systolic.value)
    .reverse();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Blood Pressure Over Time",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const linechartData = {
    labels: patient ? patientYears : years,
    datasets: [
      {
        label: "Systolic values",
        data: patient ? patientSystolicValues : systolicValues,
        borderColor: "#E66FD2",
        pointBackgroundColor: "#E66FD2",
        borderWidth: 5,
        tension: 0.4,
      },
      {
        label: "Diastolic values",
        data: patient ? patientDiastolicValues : diastolicValues,
        borderColor: "#8C6FE6",
        pointBackgroundColor: "#8C6FE6",
        borderWidth: 5,
        tension: 0.4,
      },
    ],
  };

  console.log("diagnosis history", linechartData);

  return (
    <Box backgroundColor={"#F4F0FE"} p={7} borderRadius={"20px"} mb={7}>
      <Heading fontSize={"medium"}>Blood pressure</Heading>
      <Box display={"flex"} gap={3}>
        <Line options={options} data={linechartData} />
        <Box w={"150px"}>
          <Flex alignItems={"center"} gap={3}>
            <Box w={2} h={2} backgroundColor={"#E66FD2"} borderRadius={"50%"}></Box>
            <Text fontWeight={"bold"} fontSize={"small"}>Systolic</Text>
          </Flex>
          <Text fontSize={"x-large"} fontWeight={"bold"}>160</Text>
          <Text fontSize={"small"}>Higher Than Average</Text>
          <Skeleton h={"1px"} m={"15px 0"} />
          <Flex alignItems={"center"} gap={3}>
            <Box w={2} h={2} backgroundColor={"#8C6FE6"} borderRadius={"50%"}></Box>
            <Text fontWeight={"bold"} fontSize={"small"}>Diastolic</Text>
          </Flex>
          <Text fontSize={"x-large"} fontWeight={"bold"}>160</Text>
          <Text fontSize={"small"}>Higher Than Average</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Graph;
