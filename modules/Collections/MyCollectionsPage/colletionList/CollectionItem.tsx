import { FC } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { Box, Flex, Heading, Tag, Text } from "@chakra-ui/react";

import { UserCollections } from "../../hooks/useUserCollections";

interface IcollectionItem {
  collection: UserCollections;
}

const CollectionItem: FC<IcollectionItem> = ({ collection }) => {
  return (
    <Box border="solid 1px #A7B0C0" borderRadius="15px" width="100%" p={3}>
      <Flex justifyContent="space-between">
        <Box>
          <Heading size="xs" mb={2} fontWeight="700">
            {collection.name}
          </Heading>
          <Tag mb={2} backgroundColor="#CFD3DC80" color="#1867FF" borderRadius="10px" px={2}>
            Add Tags
          </Tag>
          <Text fontSize="xs" color="#768998">
            {collection.cards.length} tarjetas
          </Text>
        </Box>
        <Box>
          <BsThreeDotsVertical size={20} />
        </Box>
      </Flex>
    </Box>
  );
};

export default CollectionItem;
