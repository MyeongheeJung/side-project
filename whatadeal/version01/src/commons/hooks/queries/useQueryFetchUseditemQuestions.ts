import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../types/generated/types";

export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      _id
      user {
        _id
        name
        email
        picture
      }
      contents
      useditem {
        _id
      }
      createdAt
    }
  }
`;

export const useQueryFetchUsedItemQuestions = (useditemId: string) => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId,
      page: 1,
    },
  });
  return query;
};
