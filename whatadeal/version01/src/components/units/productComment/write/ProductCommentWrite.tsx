import * as S from "./style";
import { Button, Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutaionCreateUsedItemQuestion } from "../../../../commons/hooks/mutations/useMutaionCreateUseditemQuestion";
import { useMutationUpdateUseditemQuestion } from "../../../../commons/hooks/mutations/useMutationUpdateUseditemQuestion";
import { FETCH_USED_ITEM_QUESTIONS } from "../../../../commons/hooks/queries/useQueryFetchUseditemQuestions";
import {
  Container,
  Section,
  Wrapper,
} from "../../../../commons/styles/container";
import { SubTitle } from "../../../../commons/styles/text";

interface IFormType {
  contents: string;
}

export default function ProductCommentWrite(props: any) {
  console.log("댓글 수정하고 싶엉?", props);
  const router = useRouter();

  const [createUseditemQuestion] = useMutaionCreateUsedItemQuestion();
  const [updateUseditemQuestion] = useMutationUpdateUseditemQuestion();

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm<IFormType>({
    mode: "onSubmit",
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ contents: "" });
    }
  }, [isSubmitSuccessful]);

  const handleCreateUseditemQuestion = async (data: IFormType) => {
    try {
      const result = await createUseditemQuestion({
        variables: {
          useditemId: router.query.productId,
          createUseditemQuestionInput: { contents: data.contents },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: router.query.productId,
              page: 1,
            },
          },
        ],
      });
      console.log(result);
      Modal.success({ content: "댓글을 작성했습니다." });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: "댓글을 작성할 수 없습니다.",
          afterClose() {
            router.push("/login");
          },
        });
    }
  };

  const handleUpdateUseditemQuestion = async (data: IFormType) => {
    try {
      const result = await updateUseditemQuestion({
        variables: {
          useditemQuestionId: props.data._id,
          updateUseditemQuestionInput: { contents: data.contents },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTIONS,
              variables: {
                useditemId: props.data._id,
                page: 1,
              },
            },
          ],
        },
      });
      console.log(result);
      props.setIsEdit(false);
      props.setEditId("");
      Modal.success({ content: "댓글이 수정 되었습니다." });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "댓글을 수정할 권한이 없습니다." });
    }
  };

  const onClickCancle = () => {
    console.log("취소");
    props.setEditId("");
  };

  return (
    <Wrapper>
      <Container>
        <Section>
          <SubTitle mb="1rem">{!props.isEdit && "Q & A"}</SubTitle>
          <form>
            <S.TextareaWrap>
              <S.Textarea
                type="text"
                maxLength="100"
                placeholder="로그인 후 작성 가능합니다."
                {...register("contents")}
                defaultValue={props.isEdit ? props.data.contents : ""}
              />
              <S.BtnBox>
                {props.isEdit && <Button onClick={onClickCancle}>취소</Button>}
                <Button
                  onClick={
                    props.isEdit
                      ? handleSubmit(handleUpdateUseditemQuestion)
                      : handleSubmit(handleCreateUseditemQuestion)
                  }
                >
                  {props.isEdit ? "수정하기" : "문의하기"}
                </Button>
              </S.BtnBox>
            </S.TextareaWrap>
          </form>
        </Section>
      </Container>
    </Wrapper>
  );
}
