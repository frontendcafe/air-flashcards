export interface CollectionFirebaseData {
  name: string;
  userId: string;
}

export interface Collection extends CollectionFirebaseData {
  id: string;
}
