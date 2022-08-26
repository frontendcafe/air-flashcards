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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Trash from "../Icons/Trash";
import { useRouter } from "next/router";

interface StudySessionCardProps {
  id: string;
  name: string;
  cardsAmount: number;
  collection: string;
  percentage: number;
  deleteFunction: (id: string) => void;
}

function StudySessionCard({
  id,
  name,
  cardsAmount,
  collection,
  percentage,
  deleteFunction,
}: StudySessionCardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <>
      <Box
        bg="white"
        boxSize="xs"
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
            onClick={() => router.push(`/StudySession/${id}`)}
          >
            <Box>
              <Text fontWeight="400">{name}</Text>
              <Box color="primary.50" display="flex" alignItems="center" justifyContent="start">
                <Text fontSize="sm" bg="primary.100" borderRadius="lg" p="1" color="white">
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
              <Trash />
            </Box>
            <Box fontWeight="600">{percentage}%</Box>
          </Flex>
        </Flex>
      </Box>
      {/* <Button onClick={() => deleteFunction(id)}></Button> */}
      {/* <Button onClick={onOpen}></Button> */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default StudySessionCard;
