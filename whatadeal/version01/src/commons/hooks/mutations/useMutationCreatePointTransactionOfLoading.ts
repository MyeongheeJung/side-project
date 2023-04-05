import { gql, useMutation } from "@apollo/client";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      amount
    }
  }
`;

export const useMutationCreatePointTransactionOfLoading = () => {
  const mutation = useMutation(CREATE_POINT_TRANSACTION_OF_LOADING);
  return mutation;
};
