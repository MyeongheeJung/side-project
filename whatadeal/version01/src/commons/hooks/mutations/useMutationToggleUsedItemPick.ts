import { gql, useMutation } from "@apollo/client";

export const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export const useMutationToggleUsedItemPick = () => {
  const mutation = useMutation(TOGGLE_USED_ITEM_PICK);
  return mutation;
};
