import Image from "next/image";

import { Flex, Text } from "@chakra-ui/react";

const NoCollections = () => {
  return (
    <Flex flexDir="column">
      <Image src="/images/cuate.svg" width={160} height={160} alt="ilustración" />
      <Text mt={6} color="#A7B0C0">
        Aun no tienes colecciones
      </Text>
    </Flex>
  );
};

export default NoCollections;
