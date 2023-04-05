import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateUseditemArgs,
} from "../../types/generated/types";

export const UPDATE_USED_ITEM = gql`
  mutation updateUseditem(
    $updateUseditemInput: UpdateUseditemInput!
    $useditemId: ID!
  ) {
    updateUseditem(
      updateUseditemInput: $updateUseditemInput
      useditemId: $useditemId
    ) {
      name
      remarks
      contents
      price
      images
    }
  }
`;

export const useMutationUpdateUsedItem = () => {
  const mutation = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);
  return mutation;
};
