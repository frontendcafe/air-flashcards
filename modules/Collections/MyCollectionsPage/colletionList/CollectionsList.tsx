import { FC } from "react";

import { UserCollections } from "../../hooks/useUserCollections";

import CollectionItem from "./CollectionItem";

interface ICollectionsList {
  collections: UserCollections[];
}

const CollectionsList: FC<ICollectionsList> = ({ collections }) => {
  return (
    <>
      {collections.map((collection) => {
        return <CollectionItem collection={collection} key={collection.id} />;
      })}
    </>
  );
};

export default CollectionsList;
