import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { Container } from "../../../src/commons/styles/container";
import { useRecoilState } from "recoil";
import { keywordSearchState } from "../../../src/commons/stores";
import { FETCH_USED_ITEMS } from "../../../src/commons/hooks/queries/useQueryFetchUsedItems";
import ProductListUI from "../../../src/components/units/product/list/ProductlistUI";
import { useRouter } from "next/router";

function SearchPage() {
  const router = useRouter();
  const [keyword] = useRecoilState(keywordSearchState);
  const { data, refetch, fetchMore } = useQuery(FETCH_USED_ITEMS);

  console.log(data);

  useEffect(() => {
    void refetch({ search: keyword, page: 1 });
  }, []);

  const onClickMoveToPage = (productId: string) => {
    void router.push(`/products/${productId}`);
  };

  const onLoadMore = () => {
    if (data === undefined) return;
    void fetchMore({
      variables: { page: Math.ceil(data.fetchUseditems.length / 10) },
      updateQuery: (prev, { fetchMoreResult }) => {
        console.log(prev, fetchMoreResult);
        if (data === undefined) return;
        if (fetchMoreResult.fetchUseditems === undefined || null) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: prev.fetchUseditems
            ? [...prev.fetchUseditems, ...fetchMoreResult?.fetchUseditems]
            : [...fetchMoreResult?.fetchUseditems],
          // fetchUseditems: [
          //   ...prev?.fetchUseditems,
          //   ...fetchMoreResult?.fetchUseditems,
          // ],
        };
      },
    });
  };

  return (
    <Container>
      <ProductListUI
        data={data}
        onClickMoveToPage={onClickMoveToPage}
        onLoadMore={onLoadMore}
      />
    </Container>
  );
}

export default SearchPage;
