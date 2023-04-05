import { gql, useMutation } from "@apollo/client";

export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
    }
  }
`;

export const useMutationCreatePointTransactionOfLoading = () => {
  const mutation = useMutation(CREATE_POINT_TRANSACTION_OF_LOADING, {
    variables: { impUid: "imp11585787" },
  });
  return mutation;
};
