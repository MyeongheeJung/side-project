import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteBoardArgs,
} from "../../types/generated/types";

const DISLIKE_BOARD = gql`
  mutation dislikeBoard($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`;

export const useMutationDislikeBoard = () => {
  const mutation = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDeleteBoardArgs
  >(DISLIKE_BOARD);
  return mutation;
};
