import { ChangeEvent, useRef } from "react";
import { checkValidationImage } from "./Uploads01.validation";
import { IUploads01Props } from "./Uploads01.types";
import { Modal } from "antd";

import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
} from "./Uploads01.styles";
import { useMutationUploadFile } from "../../../../commons/hooks/mutations/useMutationUploadFile";
import { type } from "os";

export default function Uploads01(props: IUploads01Props) {
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutationUploadFile();

  const onClickUpload = (e) => {
    e.preventDefault();
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    console.log("file", file);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  console.log(props.fileUrl);
  return (
    <>
      {props.fileUrl ? (
        <UploadImage
          onClick={onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadButton onClick={onClickUpload} type="button">
          <>+</>
          <>Upload</>
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={fileRef}
        hidden={true}
        onChange={onChangeFile}
      />
    </>
  );
}
