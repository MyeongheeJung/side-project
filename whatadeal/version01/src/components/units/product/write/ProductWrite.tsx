import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Section } from "../../../../commons/styles/container";
import { Title } from "../../../../commons/styles/text";
import { useQueryFetchUserLoggendIn } from "../../../../commons/hooks/queries/useQueryFetchUserLoggedIn";
import { useMutationCreateUseditem } from "../../../../commons/hooks/mutations/useMutationCreateUseditem";
import { useMutationUpdateUsedItem } from "../../../../commons/hooks/mutations/useMutationUpdateUsedItem";
import ProductWriteForm from "./ProductWriteForm";
import { IEditType, IFormType } from "./type";
import { Modal } from "antd";
import { FETCH_USED_ITEMS } from "../../../../commons/hooks/queries/useQueryFetchUsedItems";
import { FETCH_USED_ITEM } from "../../../../commons/hooks/queries/useQueryFetchUsedItem";

const ProductWrite = (props: IEditType) => {
  console.log("프롭스가져왕", props);

  const router = useRouter();
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [address, setAddress] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [createUseditem] = useMutationCreateUseditem();
  const [updateUseditem] = useMutationUpdateUsedItem();
  const { data: User } = useQueryFetchUserLoggendIn();

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  // 이미지 수정부분, useEffect 처리하면 유지보수는 좋지만, 리렌더링이 한번 더 발생하므로 성능은 떨어진다.
  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  const handleCreateUseditem = async (data: IFormType) => {
    setContents(data.contents);

    // 이미지 확인
    const filtered = fileUrls.filter((file) => file !== "");
    if (filtered.length === 0) {
      Modal.error({ content: "상품 이미지를 등록해주세요" });
      return;
    } else {
      setFileUrls(filtered);
    }

    // 주소 확인
    if (data.address === undefined) {
      Modal.error({ content: "주소를 등록해주세요" });
      return;
    }

    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: User?.fetchUserLoggedIn?.name || "testName",
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            images: [...fileUrls],
            useditemAddress: {
              address: data.address,
              zipcode: data.zipcode,
            },
          },
        },
      });
      console.log(result, "등록결과");
      Modal.success({
        content: "상품 등록에 성공했습니다!",
        afterClose() {
          router.push(`/products/${result.data?.createUseditem._id}`);
        },
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "회원정보 인증에 실패하였습니다." });
    }
  };

  const handleUpdateUseditem = async (data: IFormType) => {
    console.log("💜수정됨💜", data);
    const id = props.data?.fetchUseditem._id;

    try {
      await updateUseditem({
        variables: {
          useditemId: id,
          updateUseditemInput: {
            name: User?.fetchUserLoggedIn?.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            images: [...fileUrls],
            useditemAddress: {
              address:
                data.address ||
                props.data?.fetchUseditem.useditemAddress?.address,
              zipcode:
                data.zipcode ||
                props.data?.fetchUseditem.useditemAddress?.zipcode,
            },
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: {
              useditemId: id,
            },
          },
        ],
      });
      Modal.success({
        content: "상품 수정에 성공했습니다!",
        afterClose() {
          router.push(`/products/${id}`);
        },
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "오류가 발생했습니다." });
    }
  };

  return (
    <Container>
      <Section>
        <Title mb="3rem">{props.isEdit ? "상품 수정" : "상품 등록"}</Title>
        <ProductWriteForm
          handleCreateUseditem={handleCreateUseditem}
          handleUpdateUseditem={handleUpdateUseditem}
          address={address}
          setAddress={setAddress}
          contents={contents}
          setContents={setContents}
          fileUrls={fileUrls}
          onChangeFileUrls={onChangeFileUrls}
          data={props.data}
          isEdit={props.isEdit}
        />
      </Section>
    </Container>
  );
};

export default ProductWrite;
