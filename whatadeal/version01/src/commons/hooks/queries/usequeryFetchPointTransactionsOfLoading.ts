import { gql, useQuery } from "@apollo/client";

export const FETCH_POINT_TRANSACTION_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfLoading(search: $search, page: $page) {
      _id
      impUid
      amount
    }
  }
`;

export const useQueryFetchPointTransactionsOfLoading = () => {
  const query = useQuery(FETCH_POINT_TRANSACTION_OF_LOADING);
  return query;
};
