import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { storage } from "@/firebase";

export const uploadToImagesFolder = ({
  file,
  onProgress,
  onCompleted,
  onError,
}: {
  file: File;
  onProgress: (progress: any) => void;
  onCompleted: (downloadURL: any) => void;
  onError: (error: any) => void;
}) => {
  const storageRef = ref(storage, `images/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot: any) => {
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
