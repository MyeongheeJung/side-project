import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../types/generated/types";

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($page: Int, $boardId: ID!) {
    fetchBoardComments(page: $page, boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;

export const useQueryFetchBoardComments = (boardId: string) => {
  const query = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    Pick<IQueryFetchBoardCommentsArgs, "boardId">
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId,
    },
  });
  return query;
};
