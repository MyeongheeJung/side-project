import { gql, useMutation } from "@apollo/client";

export const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const useMutationDeleteUsedItem = () => {
  const mutation = useMutation(DELETE_USED_ITEM);
  return mutation;
};
