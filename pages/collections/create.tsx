import React from "react";

import CollectionFormsView from "@/modules/Collections/components/CollectionFormsView";
import Menu from "@/modules/shared/components/Menu/Menu";
import { Flex } from "@chakra-ui/react";

const CreateCollection: React.FC = () => {
  return (
    <div>
      <Flex align="center" flexDir="column" maxH="100vh" overflowX="hidden">
        <Menu />
        <CollectionFormsView />
      </Flex>
    </div>
  );
};

export default CreateCollection;
