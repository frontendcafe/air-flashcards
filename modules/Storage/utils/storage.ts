import {
  getDownloadURL,
  ref,
  StorageError,
  uploadBytesResumable,
  UploadTaskSnapshot,
} from "firebase/storage";

import { storage } from "@/firebaseConfig";

interface Props {
  file: File;
  onProgress: (progress: number) => void;
  onCompleted: (downloadURL: string) => void;
  onError: (error: StorageError) => void;
  storageFolder?: string;
}

export const uploadToImagesFolder = ({
  file,
  onProgress,
  onCompleted,
  onError,
  storageFolder = "images",
}: Props) => {
  const storageRef = ref(storage, `${storageFolder}/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot: UploadTaskSnapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      onProgress(progress);
    },
    (error) => {
      onError(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: any) => {
        onCompleted(downloadURL);
      });
    }
  );
};
