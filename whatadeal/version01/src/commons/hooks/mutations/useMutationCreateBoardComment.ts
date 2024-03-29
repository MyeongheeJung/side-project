import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../types/generated/types";

const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
    }
  }
`;

export const useMutationCreateBoardComment = () => {
  const mutation = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  return mutation;
};
