import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { useAuth } from "@/modules/Auth/context/AuthProvider";
import { Button, Flex, Heading, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

import { Collection } from "../models";

import NoCollections from "./NoCollections";

const imputColor = "#CBD5E0";

const MyCollectionsPage = () => {
  const [userCollection, setUserCollections] = useState<Collection>();
  const user = useAuth();
  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column" mx={6}>
      <Heading mb={10} mt="5" fontSize="18px">
        Mis colecciones
      </Heading>
      <InputGroup mb={12}>
        <InputLeftElement pointerEvents="none">
          <AiOutlineSearch color={imputColor} size={25} />
        </InputLeftElement>
        <Input
          type="search"
          placeholder="Buscar"
          borderColor={imputColor}
          _placeholder={{ color: imputColor }}
        />
      </InputGroup>
      {!userCollection && <NoCollections />}
      <Button mt={6} width="100%" colorScheme="messenger">
        Crear Colección
      </Button>
    </Flex>
  );
};

export default MyCollectionsPage;
