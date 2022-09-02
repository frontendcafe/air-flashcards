import { useEffect, useState } from "react";

import { Card } from "@/modules/Cards/models";
import { Collection } from "@/modules/Collections/models";
import { StudySession } from "@/modules/StudySession/models";

export interface UserCollections extends Collection {
  cards: Card[];
  studySession: StudySession[];
}

export default function useUserCollections(uid: string) {
  const [userCollections, setUserCollections] = useState<UserCollections[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/collections/user/${uid}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserCollections(data);
        setIsLoading(false);
      });
  }, [uid]);

  return { userCollections, isLoading };
}
