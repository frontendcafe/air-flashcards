export interface CollectionFirebaseData {
  title: string;
  category: string;
  description: string;
  // tags?: string[];
  userId: string;
  createdAt: string;
}

export interface Collection extends CollectionFirebaseData {
  id: string;
}
