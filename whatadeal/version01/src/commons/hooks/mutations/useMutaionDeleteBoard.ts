import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteBoardArgs,
} from "../../types/generated/types";

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export const useMutionDeleteBoard = () => {
  const mutaion = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  return mutaion;
};
