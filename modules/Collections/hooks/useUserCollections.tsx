import { useEffect, useState } from "react";

import { useAuth } from "@/modules/Auth/context/AuthProvider";
import { Card } from "@/modules/Cards/models";
import { Collection } from "@/modules/Collections/models";
import { StudySession } from "@/modules/StudySession/models";

export interface UserCollections extends Collection {
  cards: Card[];
  studySession: StudySession[];
}

export default function useUserCollections() {
  const [userCollections, setUserCollections] = useState<UserCollections[]>();
  const [isLoading, setIsLoading] = useState(true);
  const auth = useAuth() as any;

  useEffect(() => {
    if (auth.user) {
      fetch(`/api/collections/user/${auth.user.uid || auth.user.user.uid}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setUserCollections(data);
          setIsLoading(false);
        });
    }
  }, [auth]);

  return { userCollections, isLoading };
}
