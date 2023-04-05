import { gql, useMutation } from "@apollo/client";

export const UPDATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
    $useditemQuestionAnswerId: ID!
  ) {
    updateUseditemQuestionAnswer(
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    ) {
      _id
      contents
      useditemQuestion {
        _id
      }
      user {
        _id
        name
      }
      createdAt
    }
  }
`;

export const useMutationUpdateUseitemQuestionAnswer = () => {
  const mutation = useMutation(UPDATE_USED_ITEM_QUESTION_ANSWER);
  return mutation;
};
