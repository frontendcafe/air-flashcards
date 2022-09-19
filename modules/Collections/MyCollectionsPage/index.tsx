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
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      mx={6}
      mb={20}
      maxW="660px"
      w={["inherit", "100%"]}
    >
      <Heading
        mb={[8, 0]}
        fontSize="18px"
        mt={[0, 9]}
        w={["fit-content", "fit-content", "fit-content", "100vw"]}
        pl={[0, 0, 0, 20]}
      >
        Mis colecciones
      </Heading>
      {userCollections && userCollections.length > 0 && (
        <InputGroup mb={4} mt={[0, 9]}>
          <InputLeftElement pointerEvents="none">
            <AiOutlineSearch color={inputColor} size={25} />
          </InputLeftElement>
          <Input
            w="100%"
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
      )}
      {(!userCollections || userCollections.length === 0) && !isLoading && <NoCollections />}
      {userCollections && !isLoading && (
        <CollectionsList collections={filteredCollections || userCollections} />
      )}
      {isLoading && <Spinner color="#A7B0C0" size="xl" />}

      <Button
        mt={6}
        mb={20}
        width="100%"
        maxW="366"
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
