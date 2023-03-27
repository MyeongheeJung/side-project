import * as S from "./styles";
import { IFormType, IPropsType } from "./types";
import { Container, FlexRowStart } from "../../../../commons/styles/container";
import { SubTitle } from "../../../../commons/styles/text";
import { EditIcon } from "../../../../commons/icon/styledIcon";
import { useForm } from "react-hook-form";
import Input from "../../../commons/Input";
import { CommentTextArea } from "../../../commons/Input/style";
import { useEffect } from "react";

const BoardCommentWriteForm = ({ isEdit, ...props }: IPropsType) => {
  console.log("BoardCommentWriteForm Props : ", props);

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm<IFormType>({
    mode: "onSubmit",
    defaultValues: {
      writer: "",
      password: "",
      contents: "",
    },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ writer: "", password: "", contents: "" });
    }
  }, [isSubmitSuccessful]);

  useEffect(() => {
    reset({
      writer: props.comment?.writer,
      contents: props.comment?.contents,
    });
  }, [props.comment]);

  return (
    <Container>
      <S.Wrapper>
        <form
          onSubmit={
            isEdit
              ? handleSubmit(props.handleUpdateBoardCommemt)
              : handleSubmit(props.handleCreateBoardComment)
          }
        >
          <FlexRowStart>
            <EditIcon color="#ddd" />
            <SubTitle>댓글</SubTitle>
          </FlexRowStart>

          <S.TopWrap>
            <Input
              name="WriteInput"
              inputProps={{
                type: "text",
                placeholder: "작성자",
                ...register("writer", {
                  required: true,
                }),
              }}
              defaultValue={props.comment?.writer ?? ""}
            />
            <Input
              name="WriteInput"
              inputProps={{
                type: "password",
                placeholder: "비밀번호",
                ...register("password", {
                  required: true,
                }),
              }}
            />
            <FlexRowStart>
              <S.StarRate
                onChange={props.setRating}
                value={props.rating ?? props.comment?.rating}
              />
            </FlexRowStart>
          </S.TopWrap>

          <S.CommentsWrapp>
            <CommentTextArea
              maxLength={100}
              {...register("contents", {
                required: true,
              })}
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            >
              {props.comment?.contents ?? ""}
            </CommentTextArea>

            <S.TextLength>
              {/* {props.contents.length || props.el?.contents.length || 0} / 100 */}
            </S.TextLength>
            <S.TextRegisterBtn>
              {isEdit ? "수정하기" : "등록하기"}
            </S.TextRegisterBtn>
          </S.CommentsWrapp>
        </form>
      </S.Wrapper>
    </Container>
  );
};

export default BoardCommentWriteForm;
