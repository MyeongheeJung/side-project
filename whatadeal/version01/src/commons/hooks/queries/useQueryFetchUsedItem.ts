import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      createdAt
      useditemAddress {
        zipcode
        address
        lng
        lat
      }
      seller {
        _id
        name
        picture
        email
      }
      soldAt
    }
  }
`;

export const useQueryFetchUsedItem = () => {
  const router = useRouter();
  const { data, error, loading } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.productId),
    },
  });

  useEffect(() => {
    if (loading) return;
    if (error?.message === "상품이 존재하지 않습니다.") {
      alert(error?.message);
      router.push("/boards");
    }
  }, [loading]);

  useEffect(() => {
    if (loading) return;
    if (error !== undefined) return;
    const todayList = data?.fetchUseditem;
    const baskets = JSON.parse(sessionStorage.getItem("baskets") ?? "[]");
    const temp = baskets.filter((el: any) => el?._id === todayList?._id);
    if (temp.length === 1) return;
    if (baskets.length >= 3) {
      baskets.pop();
    }
    baskets.unshift(todayList);
    sessionStorage.setItem("baskets", JSON.stringify(baskets));
  }, [loading]);

  return {
    data,
    error,
    loading,
  };
};
