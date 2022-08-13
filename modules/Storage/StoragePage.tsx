import React, { useState } from "react";
import type { StorageError } from "firebase/storage";

import { uploadToImagesFolder } from "@/modules/Storage/utils/storage";

import styles from "./StoragePage.module.css";

const StoragePage = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [progresspercent, setProgresspercent] = useState(0);
  const [uploadError, setUploadError] = useState<StorageError>();
  const [localTempImgUrl, setLocalTempImgUrl] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [eventTarget]: any = e.target;
    const file = eventTarget.files?.[0];
    if (!file) return;

    uploadToImagesFolder({
      file,
      onProgress: (percent: number) => {
        setProgresspercent(percent);
      },
      onCompleted: (downloadUrl: string) => {
        setImgUrl(downloadUrl);
      },
      onError: (err: StorageError) => {
        setUploadError(err);
      },
    });
  };

  const onImageChange = (e: React.FormEvent<HTMLInputElement>) => {
    const eventTarget = e.target as HTMLInputElement;
    const file = eventTarget.files?.[0];
    if (!file) return;

    setLocalTempImgUrl(URL.createObjectURL(file));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {uploadError && (
          <>
            <h2>ERROR!</h2>
            {uploadError}
          </>
        )}
        <div>
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={onImageChange} accept="image/*" />
            <button type="submit">Upload</button>
          </form>
          {!imgUrl && (
            <div className="outerbar">
              <div className="innerbar" style={{ width: `${progresspercent}%` }}>
                {progresspercent}%
              </div>
            </div>
          )}
          {imgUrl && <img src={imgUrl} alt="uploaded file" height={200} />}
        </div>
        <div className={styles.previewWrapper}>
          <div className={styles.item}>
            <h3>Preview de tu imagen a subir</h3>
            {localTempImgUrl && (
              <img className={styles.previewImage} src={localTempImgUrl} alt="" />
            )}
          </div>
          {imgUrl && (
            <div className={styles.item}>
              <h3>tu imagen se ha subido exitosamente</h3>
              <span>URL: {imgUrl}</span>
              {imgUrl && <img className={styles.previewImage} src={imgUrl} alt="" />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoragePage;
