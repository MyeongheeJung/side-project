import { Modal } from "antd";
import BoardCommentWriteUI from "./BoardCommentWriteForm";
import { useRouter } from "next/router";
import { FETCH_BOARD_COMMENTS } from "../../../../commons/hooks/queries/useQueryFetchBoardComments";

import { IEditPropstype } from "../../board/write/types";
import { IFormType, IUpdateBoardCommentInput } from "./types";
import { useState } from "react";
import { useMutationCreateBoardComment } from "../../../../commons/hooks/mutations/useMutationCreateBoardComment";
import { useMutationUpdateBoardComment } from "../../../../commons/hooks/mutations/useMutaionUpdateBoardComment";

export default function BoardCommentWrite({
  comment,
  ...props
}: IEditPropstype) {
  console.log("BoardCommentWrite Props(SetisEdit) : ", props);

  const router = useRouter();
  const [rating, setRating] = useState<number>(0);

  const [createBoardComment] = useMutationCreateBoardComment();
  const [updateBoardCommemt] = useMutationUpdateBoardComment();

  const handleCreateBoardComment = async (data: IFormType) => {
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: data.writer,
            contents: data.contents,
            password: data.password,
            rating,
          },
          boardId: String(router.query.boardId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });
      console.log(result);
      props.setIsEdit?.(true);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "등록할 수 없습니다." });
      return;
    }
  };

  const handleUpdateBoardCommemt = async (data: IFormType) => {
    setRating(comment?.rating);
    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (rating !== comment?.rating) updateBoardCommentInput.rating = rating;
      if (!comment?._id) return;

      await updateBoardCommemt({
        variables: {
          updateBoardCommentInput: {
            contents: data.contents,
            rating,
          },
          password: data.password,
          boardCommentId: comment?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: comment?._id,
            },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "비밀번호를 잘못 입력하셨습니다." });
      return;
    }
  };

  return (
    <BoardCommentWriteUI
      handleCreateBoardComment={handleCreateBoardComment}
      handleUpdateBoardCommemt={handleUpdateBoardCommemt}
      isEdit={props?.isEdit}
      comment={comment}
      rating={rating}
      setRating={setRating}
    />
  );
}
