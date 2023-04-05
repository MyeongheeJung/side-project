import { gql, useMutation } from "@apollo/client";

export const UPDATE_USED_ITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
    }
  }
`;

export const useMutationUpdateUseditemQuestion = () => {
  const mutation = useMutation(UPDATE_USED_ITEM_QUESTION);
  return mutation;
};
