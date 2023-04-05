import { gql, useQuery } from "@apollo/client";

export const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(
      page: $page
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      createdAt
      useditemQuestion {
        _id
      }
      user {
        email
        name
        picture
      }
    }
  }
`;

export const useQueryFetchUseditemQuestionAnswers = (
  useditemQuestionId: string
) => {
  const query = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId,
      page: 1,
    },
  });
  return query;
};
