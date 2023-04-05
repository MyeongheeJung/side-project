import ProductCommentWrite from "../../../src/components/units/productComment/write/ProductCommentWrite";
import ProductCommemtList from "../../../src/components/units/productComment/list/ProductCommentList";
import ProductDetail from "../../../src/components/units/product/detail/ProductDetail";
export default function MarketDetail() {
  return (
    <>
      <ProductDetail />
      <ProductCommentWrite isEdit={false} />
      <ProductCommemtList />
    </>
  );
}
