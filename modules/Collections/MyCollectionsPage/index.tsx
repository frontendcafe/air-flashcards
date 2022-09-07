import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";

import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
} from "@chakra-ui/react";

import useFilterUserCollection from "../hooks/useFilterUserCollections";
import useUserCollections from "../hooks/useUserCollections";

import CollectionsList from "./colletionList/CollectionsList";
import NoCollections from "./NoCollections";

const inputColor = "#CBD5E0";

const MyCollectionsPage = () => {
  const { userCollections, isLoading } = useUserCollections();
  const router = useRouter();

  const { query, setQuery, filteredCollections } = useFilterUserCollection(userCollections);

  function handleClick() {
    router.push("/collections/create");
  }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column" mx={6}>
      <Heading mb={10} fontSize="18px">
        Mis colecciones
      </Heading>
      <InputGroup mb={4}>
        <InputLeftElement pointerEvents="none">
          <AiOutlineSearch color={inputColor} size={25} />
        </InputLeftElement>
        <Input
          type="search"
          placeholder="Buscar"
          borderColor={inputColor}
          _placeholder={{ color: inputColor }}
          value={query}
          onChange={(e) => {
            return setQuery(e.target.value);
          }}
        />
      </InputGroup>
      {(!userCollections || userCollections.length === 0) && !isLoading && <NoCollections />}
      {userCollections && !isLoading && (
        <CollectionsList collections={filteredCollections || userCollections} />
      )}
      {isLoading && <Spinner color="#A7B0C0" size="xl" />}

      <Button
        mt={6}
        width="100%"
        colorScheme="messenger"
        onClick={() => {
          handleClick();
        }}
      >
        Crear Colección
      </Button>
    </Flex>
  );
};

export default MyCollectionsPage;
