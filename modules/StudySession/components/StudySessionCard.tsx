import React from "react";
import { useRouter } from "next/router";

import {
  Box,
  Button,
  Flex,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import Trash from "../../shared/components/Icons/Trash";

interface StudySessionCardProps {
  id: string;
  name: string;
  cardsAmount: number;
  collection: string;
  percentage: number;
  deleteFunction: (id: string) => void;
}

const StudySessionCard = ({
  id,
  name,
  cardsAmount,
  collection,
  percentage,
  deleteFunction,
}: StudySessionCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <>
      <Box
        bg="white"
        boxSize="xs"
        w={{ base: "100%", desktop: "320px" }}
        h="153px"
        boxShadow="lg"
        borderColor="gray.50"
        color="primary.300"
        borderWidth="2px"
        borderRadius="lg"
        _hover={{
          borderColor: "primary.100",
          cursor: "pointer",
        }}
      >
        <Flex direction="row" p={4} justify="space-between" h="100%">
          <Flex
            direction="column"
            justify="space-between"
            onClick={() => {
              return router.push(`/StudySession/${id}`);
            }}
          >
            <Box>
              <Text fontWeight="400">{name}</Text>
              <Box color="primary.50" display="flex" alignItems="center" justifyContent="start">
                <Text
                  fontSize="sm"
                  bg="primary.100"
                  mt="14px"
                  borderRadius="lg"
                  p="5px 12px"
                  color="white"
                >
                  {collection}
                </Text>
              </Box>
            </Box>
            <Text fontWeight="400" color="gray.200">
              {cardsAmount} tarjetas
            </Text>
          </Flex>
          <Flex display="flex" h="100%" direction="column" justify="space-between">
            <Box onClick={onOpen}>
              <Trash color="#0D378D" height={24} width={24} />
            </Box>
            <Box fontWeight="600">{percentage}%</Box>
          </Flex>
        </Flex>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" justifyContent="center" textAlign="center">
            <Box
              bg="red.500"
              p={15}
              borderRadius="100%"
              width="60px"
              height="60px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Trash color="#fff" height={24} width={24} />
            </Box>
          </ModalHeader>

          <ModalHeader textAlign="center">¿Deseas borrar esta sesión?</ModalHeader>

          <ModalFooter justifyContent="center">
            <Button
              variant="primary"
              width="50%"
              onClick={() => {
                deleteFunction(id), onClose();
              }}
            >
              Aceptar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default StudySessionCard;
