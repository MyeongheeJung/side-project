import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateBoardCommentArgs,
} from "../../types/generated/types";

const UPDATE_BOARD_COMMENT = gql`
  mutation updateBoardCommemt(
    $updateBoardCommentInput: UpdateBoardCommentInput!
    $password: String
    $boardCommentId: ID!
  ) {
    updateBoardComment(
      updateBoardCommentInput: $updateBoardCommentInput
      password: $password
      boardCommentId: $boardCommentId
    ) {
      _id
      writer
      contents
      rating
    }
  }
`;

export const useMutationUpdateBoardComment = () => {
  const mutaion = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);
  return mutaion;
};
