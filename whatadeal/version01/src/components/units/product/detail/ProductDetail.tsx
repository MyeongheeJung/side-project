import { Modal } from "antd";
import { useRouter } from "next/router";
import { useCreatePointTransactionOfBuyingAndSelling } from "../../../../commons/hooks/mutations/useCreatePointTransactionOfBuyingAndSelling";
import { useMutationDeleteUsedItem } from "../../../../commons/hooks/mutations/useMutationDeleteUsedItem";
import { useMutationToggleUsedItemPick } from "../../../../commons/hooks/mutations/useMutationToggleUsedItemPick";
import {
  FETCH_USED_ITEM,
  useQueryFetchUsedItem,
} from "../../../../commons/hooks/queries/useQueryFetchUsedItem";
import { FETCH_USED_ITEMS } from "../../../../commons/hooks/queries/useQueryFetchUsedItems";
import { useQueryFetchUserLoggendIn } from "../../../../commons/hooks/queries/useQueryFetchUserLoggedIn";
import { Container, Section } from "../../../../commons/styles/container";
import ProductDetailUI from "./ProductDetailUI";

interface IRef {
  __ref: string;
}

export default function ProductDetail() {
  const router = useRouter();
  const { data } = useQueryFetchUsedItem();
  const { data: LoggedIn } = useQueryFetchUserLoggendIn();
  const { createPointTransactionOfBuyingAndSellingSubmit } =
    useCreatePointTransactionOfBuyingAndSelling();
  const [deleteUseditem] = useMutationDeleteUsedItem();
  const [toggleUseditemPick] = useMutationToggleUsedItemPick();

  const IsWriter =
    LoggedIn && data?.fetchUseditem?.name === LoggedIn.fetchUserLoggedIn.name;

  const onClickBuy = () => {
    void createPointTransactionOfBuyingAndSellingSubmit(router.query.productId);
  };

  const onClickCart = () => {
    router.push("/products");
  };

  const onClickTogglePick = async () => {
    const result = await toggleUseditemPick({
      variables: {
        useditemId: router.query.productId,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: {
            useditemId: router.query.productId,
          },
        },
      ],
    });
    console.log(result);
  };

  const handelProductEdit = () => {
    void router.push(`/products/${router.query.productId}/edit`);
  };

  const handleProductDelete = (useditemId: string) => () => {
    try {
      void deleteUseditem({
        variables: { useditemId },
        refetchQueries: [{ query: FETCH_USED_ITEMS }],
      });
      Modal.success({
        content: "상품 삭제에 성공했습니다!",
        afterClose() {
          router.push("/products");
        },
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
          afterClose() {
            router.push("/products");
          },
        });
    }
  };

  return (
    <Container>
      <Section>
        <ProductDetailUI
          data={data}
          IsWriter={IsWriter}
          onClickBuy={onClickBuy}
          onClickCart={onClickCart}
          handelProductEdit={handelProductEdit}
          handleProductDelete={handleProductDelete}
        />

        {/* <button onClick={() => router.push(`/products`)}>목록으로</button> */}
      </Section>
    </Container>
  );
}
