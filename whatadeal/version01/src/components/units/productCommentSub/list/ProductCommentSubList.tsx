import { Button, Modal } from "antd";
import { ScissorOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useMutationDeleteUsedItemQuestionAnswer } from "../../../../commons/hooks/mutations/useMutationDeleteUseditemquestionAnswer";
import {
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  useQueryFetchUseditemQuestionAnswers,
} from "../../../../commons/hooks/queries/useQueryFetchUsedItemQuestionAnswers";
import { Avatar } from "../../../../commons/icon/antdicon";

import { getDate } from "../../../../commons/libraries/getDate";
import { FlexRow } from "../../../../commons/styles/container";
import { SubText, SubText_Grey } from "../../../../commons/styles/text";
import ProductCommentSubWrite from "../write/ProductCommentSubWrite";
import * as S from "./style";

export default function ProductCommemtSubList(props) {
  const [EditId, setEditId] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const { data } = useQueryFetchUseditemQuestionAnswers(props.QuestionId);
  console.log(props, "대댓글 리스트");
  console.log(data, "대댓글 리스트");

  const [deleteUseditemQuestionAnswer] =
    useMutationDeleteUsedItemQuestionAnswer();

  const onClickEdit = (useditemQuestionAnswerId: string) => {
    setEditId(useditemQuestionAnswerId);
    setIsEdit(true);
  };

  const handleDeleteUseditemQuestionAnswer = async (
    useditemQuestionAnswerId: string
  ) => {
    try {
      const result = await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId,
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
      console.log(result);
      Modal.success({ content: "댓글이 삭제 되었습니다." });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "댓글을 삭제할 권한이 없습니다." });
    }
  };

  return (
    <>
      {data?.fetchUseditemQuestionAnswers.map((Answer) => (
        <FlexRow>
          <S.ArrowImgBox>
            <img src="/icons/commentArrow.png" />
          </S.ArrowImgBox>
          {EditId !== Answer._id ? (
            <S.CommentWrap key={Answer._id}>
              <S.UserBox>
                {Answer.user.picture !== null ? (
                  <img
                    src={`https://storage.googleapis.com/${Question.user.photo}`}
                  />
                ) : (
                  <Avatar />
                )}
                <SubText size="14px">{Answer.user.name}</SubText>
              </S.UserBox>

              <SubText>{Answer.contents}</SubText>

              <S.FlexBox>
                <SubText_Grey size="14px">
                  {getDate(Answer.createdAt)}
                </SubText_Grey>
                <S.BtnBox>
                  <Button
                    onClick={() => onClickEdit(Answer._id)}
                    icon={<ScissorOutlined />}
                  />
                  <Button
                    onClick={() =>
                      handleDeleteUseditemQuestionAnswer(Answer._id)
                    }
                    icon={<DeleteOutlined />}
                  />
                </S.BtnBox>
              </S.FlexBox>
            </S.CommentWrap>
          ) : (
            <ProductCommentSubWrite
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              Answer={Answer}
            />
          )}
        </FlexRow>
      ))}
    </>
  );
}
