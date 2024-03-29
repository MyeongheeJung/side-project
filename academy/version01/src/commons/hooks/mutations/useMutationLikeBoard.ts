import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationLikeBoardArgs } from "../../types/generated/types";

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export const useMutationLikeBoard = () => {
  const mutation = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  return mutation;
};
