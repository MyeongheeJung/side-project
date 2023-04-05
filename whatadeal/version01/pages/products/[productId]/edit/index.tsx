import { useRouter } from "next/router";
import { useQueryFetchUsedItem } from "../../../../src/commons/hooks/queries/useQueryFetchUsedItem";
import ProductWrite from "../../../../src/components/units/product/write/ProductWrite";

export default function MarketEditPage() {
  const router = useRouter();
  if (typeof router.query.productId !== "string") return <></>;
  const { data } = useQueryFetchUsedItem();

  return <ProductWrite data={data} isEdit={true} />;
}
