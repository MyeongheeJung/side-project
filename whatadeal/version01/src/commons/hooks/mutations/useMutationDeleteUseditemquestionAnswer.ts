import { gql, useMutation } from "@apollo/client";

export const DELETE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;

export const useMutationDeleteUsedItemQuestionAnswer = () => {
  const mutation = useMutation(DELETE_USED_ITEM_QUESTION_ANSWER);
  return mutation;
};
