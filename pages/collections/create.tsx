import React from "react";

import CollectionCreateView from "@/modules/Collections/components/CollectionCreateView";

const CreateCollection: React.FC = () => {
  // const [collections, setCollections] = useState<Collection[]>([]);
  // const [selectedCollectionCardAmount, setSelectedCollectionCardAmount] = useState<number>(1);
  // const selectedCollectionId = watch("collectionId");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch("/api/collections");
  //     const data = await result.json();
  //     setCollections(data);
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch(
  //       `${process.env.NEXT_PUBLIC_API_URL}/collections/${selectedCollectionId}/cards`
  //     );
  //     const data = await result.json();
  //     setSelectedCollectionCardAmount(data.length);
  //   };

  //   if (selectedCollectionId) {
  //     fetchData();
  //   }
  // }, [selectedCollectionId]);

  return <CollectionCreateView />;
};

export default CreateCollection;
