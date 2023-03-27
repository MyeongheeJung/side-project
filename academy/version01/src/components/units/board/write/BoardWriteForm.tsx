import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../../../commons/button/Button";
import Error from "../../../commons/errorMsg";
import Input from "../../../commons/Input";
import { WriteTextarea } from "../../../commons/Input/style";
import UploadImage from "../../../commons/upload/UploadImage";
import { schema_boards } from "../../../../commons/validation/schma";
import * as S from "./styles";
import { IFormType, IPropsType } from "./types";

const BoardWriteForm = ({ sourceData, ...props }: IPropsType) => {
  console.log(sourceData);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormType>({
    resolver: yupResolver(schema_boards),
    mode: "onChange",
  });

  return (
    <form>
      <S.GridWrap>
        <label>작성자</label>
        <Input
          name="WriteBigInput"
          inputProps={{
            type: "text",
            placeholder: "이름을 적어주세요.",
            ...register("writer"),
          }}
          defaultValue={sourceData?.fetchBoard.writer ?? ""}
          readOnly={!!sourceData?.fetchBoard.writer}
        />
      </S.GridWrap>
      <S.GridWrap>
        <div></div>
        <Error name="FormError" text={errors.writer?.message} />
      </S.GridWrap>

      <S.GridWrap>
        <label>비밀번호</label>
        <Input
          name="WriteBigInput"
          inputProps={{
            type: "password",
            placeholder: "비밀번호를 작성해주세요.",
            ...register("password"),
          }}
        />
      </S.GridWrap>
      <S.GridWrap>
        <div></div>
        <Error name="FormError" text={errors.password?.message} />
      </S.GridWrap>

      <S.GridWrap>
        <label>제목</label>
        <Input
          name="WriteBigInput"
          inputProps={{
            type: "text",
            placeholder: "제목을 작성해주세요.",
            ...register("title"),
          }}
          defaultValue={sourceData?.fetchBoard.title ?? ""}
        />
      </S.GridWrap>
      <S.GridWrap>
        <div></div>
        <Error name="FormError" text={errors.title?.message} />
      </S.GridWrap>
      <S.GridWrap>
        <label>내용</label>
        <WriteTextarea
          placeholder="내용을 작성해주세요."
          defaultValue={sourceData?.fetchBoard.contents ?? ""}
          {...register("contents")}
        />
      </S.GridWrap>
      <S.GridWrap>
        <div></div>
        <Error name="FormError" text={errors.contents?.message} />
      </S.GridWrap>

      <S.GridWrap>
        <label>유튜브</label>
        <Input
          name="WriteBigInput"
          inputProps={{
            placeholder: "링크를 복사해주세요.",
            ...register("youtubeUrl"),
          }}
          defaultValue={sourceData?.fetchBoard.youtubeUrl ?? ""}
        />
      </S.GridWrap>
      <S.GridWrap>
        <label>사진첨부</label>
        <S.FlexWrap>
          <UploadImage
            fileUrls={props.fileUrls}
            setFileUrls={props.setFileUrls}
            sourceData={sourceData?.fetchBoard.images}
          />
        </S.FlexWrap>
      </S.GridWrap>
      <S.ButtonWrapper>
        <Button
          type="submit"
          name="SubmitBtn"
          onClick={
            props.isEdit
              ? handleSubmit(props.handleUpdateBoard)
              : handleSubmit(props.handleCreateBoard)
          }
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </Button>
      </S.ButtonWrapper>
    </form>
  );
};

export default BoardWriteForm;
