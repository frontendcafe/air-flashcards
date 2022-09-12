import Image from "next/image";

import { Box, Flex, Text } from "@chakra-ui/react";

const NoCollections = () => {
  return (
    <Flex flexDir="column" align="center" mt={20}>
      <Box w="50vw" textAlign="center">
        <Image src="/images/cuate.svg" width={313} height={313} alt="ilustración" />
      </Box>
      <Text mt={6} color="#A7B0C0" fontSize={["16", "20"]}>
        Aun no tienes colecciones
      </Text>
    </Flex>
  );
};

export default NoCollections;
