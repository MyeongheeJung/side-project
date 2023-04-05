import { gql, useMutation } from "@apollo/client";

export const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      usedItemAddress
      buyer
      seller
      soldAt
    }
  }
`;

export const useMutationCreatePointTransactionOfBuyingAndSelling = () => {
  const mutation = useMutation(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);
  return mutation;
};
