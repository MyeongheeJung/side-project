import * as S from "./style";
import { Button, Modal } from "antd";
import { ScissorOutlined, EditOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutationCreateUseditemQuestionAnswer } from "../../../../commons/hooks/mutations/useMutationCreateUseditemQuestionAnswer";
import { useMutationUpdateUseitemQuestionAnswer } from "../../../../commons/hooks/mutations/useMutationUpdateUseitemQuestionAnswer";
import { FlexRow } from "../../../../commons/styles/container";
import { Textarea } from "../../productComment/write/style";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../../../../commons/hooks/queries/useQueryFetchUsedItemQuestionAnswers";

interface IFormType {
  contents: string;
}

export default function ProductCommentSubWrite(props) {
  console.log(props, "props로 전달받은 수정 확인하기");
  const router = useRouter();

  const [createUseditemQuestionAnswer] =
    useMutationCreateUseditemQuestionAnswer();
  const [updateUseditemQuestionAnswer] =
    useMutationUpdateUseitemQuestionAnswer();

  const { register, handleSubmit } = useForm<IFormType>({
    mode: "onChange",
  });

  const handleCreateUseditemQuestionAnswer = async (data: IFormType) => {
    try {
      const result = await createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId: props.QuestionId,
          createUseditemQuestionAnswerInput: { contents: data.contents },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.QuestionId,
              page: 1,
            },
          },
        ],
      });
      console.log(result, "답변등록");
      props.setQuestionId("");
      Modal.success({ content: "답변을 등록했습니다." });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: "답변을 등록할 권한이 없습니다.",
          afterClose() {
            router.push("/login");
          },
        });
    }
  };

  const handleUpdateUseditemQuestionAnswer = async (data: IFormType) => {
    if (data.contents === "") {
      Modal.error({ content: "수정사항을 입력해주세요" });
      return;
    }
    try {
      const result = await updateUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: props.Answer._id,
          updateUseditemQuestionAnswerInput: {
            contents: data.contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.Answer.useditemQuestion._id,
              page: 1,
            },
          },
        ],
      });
      props.setIsEdit(false);
      props.setEditId("");
      Modal.success({ content: "댓글이 수정 되었습니다." });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "댓글을 작성할 권한이 없습니다." });
    }
  };

  return (
    <FlexRow>
      {props.isEdit ? (
        <></>
      ) : (
        <S.ArrowImgBox>
          <img src="/icons/commentArrow.png" />
        </S.ArrowImgBox>
      )}
      <S.SubCommentWrap>
        <form>
          <Textarea
            autoFocus
            {...register("contents")}
            defaultValue={props.isEdit ? props.Answer.contents : ""}
          ></Textarea>
          <S.BtnBox>
            <Button
              icon={props.isEdit ? <ScissorOutlined /> : <EditOutlined />}
              onClick={
                props.isEdit
                  ? handleSubmit(handleUpdateUseditemQuestionAnswer)
                  : handleSubmit(handleCreateUseditemQuestionAnswer)
              }
            />
          </S.BtnBox>
        </form>
      </S.SubCommentWrap>
    </FlexRow>
  );
}
