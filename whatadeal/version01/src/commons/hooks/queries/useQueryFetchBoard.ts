import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { IQuery, IQueryFetchBoardArgs } from "../../types/generated/types";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
      youtubeUrl
      images
      likeCount
      dislikeCount
      boardAddress {
        zipcode
        address
        addressDetail
      }
      user {
        _id
      }
    }
  }
`;

export const useQueryFetchBoard = (boardId: string) => {
  const query = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId,
      },
    }
  );
  return query;
};
