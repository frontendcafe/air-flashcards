import {
  Box,
  Container,
  Flex,
  Spacer,
  Text,
  Button,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";

function StudySessionCard() {
  return (
    <Box
      bg="white"
      w="300px"
      h="150px"
      boxShadow="lg"
      borderColor="gray.50"
      color="primary.300"
      borderWidth="2px"
      borderRadius="lg"
    >
      <Flex direction="row" p={4} justify="space-between" h="100%">
        <Flex direction="column" justify="space-between">
          <Text fontWeight="700">Medicina Tema 2</Text>
          <Button size="sm" variant="primary">
            Medicina
          </Button>
          <Text fontWeight="500" color="gray.200">
            10 tarjetas
          </Text>
        </Flex>
        <Flex align="flex-start">
          <Menu>
            <MenuButton aria-label="Options">asd</MenuButton>
            <MenuList>
              <MenuItem>Editar</MenuItem>

              <MenuItem>Eliminar</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}

export default StudySessionCard;
