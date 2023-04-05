import { useRouter } from "next/router";
import { useState } from "react";
import { useQueryFetchUsedItems } from "../../../../commons/hooks/queries/useQueryFetchUsedItems";
import { Container } from "../../../../commons/styles/container";
import ProductListUI from "./ProductlistUI";

const ProductList = () => {
  const router = useRouter();
  const [IsSearch, setIsSearch] = useState(false);
  const { data, refetch, fetchMore } = useQueryFetchUsedItems();

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
          // fetchUseditems: prev.fetchUseditems
          //   ? [...prev.fetchUseditems, ...fetchMoreResult?.fetchUseditems]
          //   : [...fetchMoreResult?.fetchUseditems],
          fetchUseditems: [
            ...prev?.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
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
};

export default ProductList;
