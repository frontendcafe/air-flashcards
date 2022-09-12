import { useEffect, useState } from "react";

import { UserCollections } from "./useUserCollections";

function getTagMatch(tags: string[], regExp: RegExp) {
  let tagMatch = false;
  // eslint-disable-next-line no-restricted-syntax, no-unreachable-loop
  for (const tag of tags) {
    if (regExp.test(tag)) {
      tagMatch = true;
      break;
    }
  }
  return tagMatch;
}

export default function useFilterUserCollection(userCollections: UserCollections[] | undefined) {
  const [query, setQuery] = useState("");
  const [filteredCollections, setFilteredCollections] = useState<UserCollections[] | null>(null);

  useEffect(() => {
    if (query && userCollections) {
      const regExp = new RegExp(query, "gi");

      const result = userCollections.filter((collection) => {
        return regExp.test(collection.title) || getTagMatch(collection.tags!, regExp);
      });

      setFilteredCollections(result);
    }

    if (!query) setFilteredCollections(null);
  }, [query, userCollections]);

  return {
    query,
    setQuery,
    filteredCollections,
  };
}
