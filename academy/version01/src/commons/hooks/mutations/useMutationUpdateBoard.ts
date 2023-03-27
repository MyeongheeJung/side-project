import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateBoardArgs,
} from "../../types/generated/types";

const UPDATE_BOARD = gql`
  mutation updateBoard(
    $updateBoardInput: UpdateBoardInput!
    $password: String
    $boardId: ID!
  ) {
    updateBoard(
      updateBoardInput: $updateBoardInput
      password: $password
      boardId: $boardId
    ) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      user {
        _id
      }
      createdAt
    }
  }
`;

export const useMutationUpdateBoard = () => {
  const mutation = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  return mutation;
};
