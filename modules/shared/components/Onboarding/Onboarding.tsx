import Image from "next/image";
import Link from "next/link";

import CheckIcon from "@/modules/shared/components/Icons/Check";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const task = ["Crea colecciones", "Estudia en comunidad", "Visualiza tus resultados"];

const OnboardingBody = () => {
  return (
    <Flex bg="primary.200" h="100vh" color="white" direction="column" align="center" p="90px 0px">
      <Box width="250px" height="250px">
        <Image src="/images/Happy-student.png" width={250} height={250} alt="students" />
      </Box>
      <Text textAlign="center" mt="46px" w="200px" fontSize="20px" fontWeight="600">
        ¡Les damos la bienvenida a Flash!
      </Text>
      <Flex direction="column" m="30px 0px">
        {task.map((item) => {
          return (
            <Flex key={item}>
              <CheckIcon />
              <Text ml="13px" fontWeight="500" fontSize="20px">
                {item}
              </Text>
            </Flex>
          );
        })}
      </Flex>
      <Button variant="secondary" w="320px" mt="40px" display={{ lg: "none" }}>
        <Link href="/">Comenzar</Link>
      </Button>
    </Flex>
  );
};

export default OnboardingBody;
