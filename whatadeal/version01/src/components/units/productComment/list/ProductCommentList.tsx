import * as S from "./style";
import { Button, Modal } from "antd";
import {
  PlusOutlined,
  ScissorOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { useMutationDeleteitemQuestion } from "../../../../commons/hooks/mutations/useMutaionDeleteitemQuestion";
import {
  FETCH_USED_ITEM_QUESTIONS,
  useQueryFetchUsedItemQuestions,
} from "../../../../commons/hooks/queries/useQueryFetchUseditemQuestions";
import { getDate } from "../../../../commons/libraries/getDate";
import { Container } from "../../../../commons/styles/container";
import ProductCommemtSubList from "../../productCommentSub/list/ProductCommentSubList";
import ProductCommentSubWrite from "../../productCommentSub/write/ProductCommentSubWrite";
import ProductCommentWrite from "../write/ProductCommentWrite";
import { SubText, SubText_Grey } from "../../../../commons/styles/text";
import { Avatar } from "../../../../commons/icon/antdicon";

export default function ProductCommemtList() {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [EditId, setEditId] = useState("");
  const [QuestionId, setQuestionId] = useState("");

  const { data } = useQueryFetchUsedItemQuestions(
    String(router.query.productId)
  );
  const [deleteUseditemQuestion] = useMutationDeleteitemQuestion();

  const HandleDeleteUseditemQuestion = async (QuestionId: string) => {
    try {
      const result = await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: QuestionId,
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
      Modal.success({ content: "댓글이 삭제 되었습니다." });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "댓글을 삭제할 권한이 없습니다." });
    }
  };

  return (
    <Container>
      {data?.fetchUseditemQuestions.map((Question) => (
        <>
          <Fragment key={Question._id}>
            {EditId !== Question._id ? (
              <>
                <S.QuestionWrap>
                  <S.UserBox>
                    {Question.user.picture !== null ? (
                      <img
                        src={`https://storage.googleapis.com/${Question.user.photo}`}
                      />
                    ) : (
                      <Avatar />
                    )}

                    <SubText size="14px">{Question.user.name}</SubText>
                  </S.UserBox>

                  <SubText
                    dangerouslySetInnerHTML={{
                      __html: Question.contents ?? "",
                    }}
                  ></SubText>

                  <S.FlexBox>
                    <SubText_Grey size="14px">
                      {getDate(Question.createdAt)}
                    </SubText_Grey>
                    <S.ButtonWrap>
                      <Button
                        onClick={() => setQuestionId(Question._id)}
                        icon={<PlusOutlined />}
                      />
                      <Button
                        onClick={() => {
                          setEditId(Question._id);
                          setIsEdit(true);
                        }}
                        icon={<ScissorOutlined />}
                      />

                      <Button
                        onClick={() =>
                          HandleDeleteUseditemQuestion(Question._id)
                        }
                        icon={<DeleteOutlined />}
                      />
                    </S.ButtonWrap>
                  </S.FlexBox>
                </S.QuestionWrap>

                {QuestionId === Question._id && (
                  <ProductCommentSubWrite
                    QuestionId={QuestionId}
                    setQuestionId={setQuestionId}
                  />
                )}
                <ProductCommemtSubList QuestionId={Question._id} />
              </>
            ) : (
              <>
                <ProductCommentWrite
                  isEdit={isEdit}
                  setIsEdit={setIsEdit}
                  EditId={EditId}
                  setEditId={setEditId}
                  data={Question}
                />
              </>
            )}
          </Fragment>
        </>
      ))}
    </Container>
  );
}
