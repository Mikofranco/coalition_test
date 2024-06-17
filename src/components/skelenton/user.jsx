import { Skeleton, SkeletonCircle, Box, Flex } from '@chakra-ui/react'
import React from 'react'

const User = () => {
  return (
    <Flex gap={3} alignItems={'center'}mb={5}>
        <SkeletonCircle/>
        <Box>
        <Skeleton h={3} mb={2} w={"15rem"} />
        <Skeleton h={1} w={"10rem"}/>
        </Box>
    </Flex>
  )
}

export default User