import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../types/generated/types";

export const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoardComment($boardCommentId: ID!, $password: String) {
    deleteBoardComment(boardCommentId: $boardCommentId, password: $password)
  }
`;

export const useMutationDeleteBoardComment = () => {
  const mutation = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);
  return mutation;
};
