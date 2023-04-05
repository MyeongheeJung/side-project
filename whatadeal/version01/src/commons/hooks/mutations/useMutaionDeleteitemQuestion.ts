import { gql, useMutation } from "@apollo/client";

export const DELETE_USED_ITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

export const useMutationDeleteitemQuestion = () => {
  const mutation = useMutation(DELETE_USED_ITEM_QUESTION);
  return mutation;
};
