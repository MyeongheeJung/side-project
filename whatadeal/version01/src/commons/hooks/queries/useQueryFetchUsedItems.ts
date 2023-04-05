import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchUseditemsArgs } from "../../types/generated/types";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      createdAt
    }
  }
`;

export const useQueryFetchUsedItems = () => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);
  return query;
};
