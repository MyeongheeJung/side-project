import { ChangeEvent, useEffect, useMemo, useRef } from "react";
import checkValidationFile from "../../../commons/libraries/validationFile";
import { useMutationUploadFile } from "../../../commons/hooks/mutations/useMutationUploadFile";
import { DeleteBtn, GetImg, ImgBox } from "../../units/board/write/styles";
import { SubText } from "../../../commons/styles/text";
import Button from "../button/Button";
import { CameraIcon } from "../../../commons/icon/antdicon";
import { Modal } from "antd";

const UploadImage = (props: any) => {
  console.log("업로드이미지의 프롭스", props);

  const FileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutationUploadFile();

  const handleFiles = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files?.length === 0) return;
    if (props.fileUrls?.length >= 3) {
      Modal.error({ content: "최대 3까지 업로드 가능합니다." });
      return;
    }

    // file 유효성 검사
    files.map(async (file) => {
      if (!checkValidationFile(file)) return;

      const result = await uploadFile({ variables: { file } });
      props.setFileUrls((prev: Array<string>) => [
        ...prev,
        result.data?.uploadFile.url,
      ]);
    });
  };

  // const handleDeleteFile = (index: number) => {
  //   const FileUrls = [...props?.fileUrls];
  //   const newfileUrls = FileUrls.filter((file) => file !== url);
  //   FileUrls.splice(index, 1);
  //   props.setFileUrls([...FileUrls]);
  // };

  // 이미지 수정부분, useEffect 처리하면 유지보수는 좋지만, 리렌더링이 한번 더 발생하므로 성능은 떨어진다.
  useEffect(() => {
    if (props.sourceData) {
      let data = props.sourceData.filter((url: string) => url !== "");
      props.setFileUrls(data);
    }
  }, []);

  return (
    <>
      {props.fileUrls.length === 0 ? (
        <ImgBox>
          <CameraIcon />
        </ImgBox>
      ) : (
        props?.fileUrls.map((url: string, index: number) => (
          <ImgBox key={index}>
            <GetImg src={`https://storage.googleapis.com/${url}`} />
            {/* <DeleteBtn onClick={() => handleDeleteFile(index)}>X</DeleteBtn> */}
          </ImgBox>
        ))
      )}

      <div>
        <SubText size="1.4rem" mb="3px">
          파일 첨부
        </SubText>
        <SubText size="1.2rem" mb="1rem">
          5MB 이하의 jpeg, jpg, png 파일
          <br /> 3개까지 업로드 가능합니다.
        </SubText>
        <Button
          type="button"
          name="SmallBtn_Point"
          onClick={() => {
            FileRef.current?.click();
          }}
        >
          파일 선택
        </Button>
      </div>
      <input
        ref={FileRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png"
        style={{ display: "none" }}
        multiple={false}
        onChange={handleFiles}
      />
    </>
  );
};

export default UploadImage;
