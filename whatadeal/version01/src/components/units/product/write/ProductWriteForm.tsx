import * as S from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema_products } from "../../../../commons/validation/schma";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import KakaoMapPageSearch from "../../../../commons/map/Kakao.map.search";
import { FlexRow } from "../../../../commons/styles/container";
import { SubText, SubText_Bold, Title } from "../../../../commons/styles/text";
import Input from "../../../commons/Input";
import Error from "../../../commons/errorMsg";
import { Button } from "antd";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { BlueBtn, GreyBtn } from "../../../commons/button/style";
import { IFormType, IPropstype } from "./type";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

function ProductWriteForm(props: IPropstype) {
  console.log("프롭스가져왕", props);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = useForm<IFormType>({
    mode: "onChange",
    resolver: yupResolver(schema_products),
  });

  const onChangeContents = (contents: string) => {
    contents = contents.replace("<p>", "").replace("</p>", "");
    setValue("contents", contents === "<br/>" ? "" : contents);
    void trigger("contents");
  };

  const popup = useDaumPostcodePopup(postcodeScriptUrl);
  const handleComplete = (data: any) => {
    props.setAddress(data.address);
    setValue("address", data.address);
    setValue("zipcode", data.zonecode);
  };
  const handleClick = () => {
    popup({ onComplete: handleComplete });
  };

  return (
    <form>
      <S.ImgsWrap>
        {props.fileUrls.map((fileUrl, index) => (
          <Uploads01
            key={uuidv4()}
            index={index}
            fileUrl={fileUrl}
            onChangeFileUrls={props.onChangeFileUrls}
          />
        ))}
      </S.ImgsWrap>
      <S.ContentsWrap>
        <SubText_Bold mt="20px" mb="5px">
          글 제목
        </SubText_Bold>
        <Input
          name="WriteInput"
          inputProps={{
            type: "text",
            placeholder: "맥북에어 M2 판매합니다.",
            ...register("remarks"),
          }}
          defaultValue={props.data?.fetchUseditem.remarks ?? ""}
        />
        <Error name="FormError" text={errors.remarks?.message} />

        <SubText_Bold mt="20px" mb="5px">
          가격
        </SubText_Bold>
        <Input
          name="WriteInput"
          inputProps={{
            type: "text",
            placeholder: "1000000",
            ...register("price"),
          }}
          defaultValue={props.data?.fetchUseditem.price ?? ""}
        />
        <Error name="FormError" text={errors.price?.message} />

        <SubText_Bold mt="20px" mb="5px">
          상품 설명
        </SubText_Bold>
        <ReactQuill
          onChange={onChangeContents}
          defaultValue={props.data?.fetchUseditem.contents ?? props.contents}
        />
        <Error name="FormError" text={errors.contents?.message} />
        <SubText_Bold mt="20px" mb="5px">
          거래 희망 장소
        </SubText_Bold>
        <FlexRow>
          <Button type="primary" onClick={handleClick}>
            주소 검색
          </Button>
          <SubText size="14px" ml="5px">
            {props.isEdit
              ? props.data?.fetchUseditem.useditemAddress?.address
              : props.address}
          </SubText>
        </FlexRow>

        <KakaoMapPageSearch
          address={
            props.isEdit
              ? props.data?.fetchUseditem.useditemAddress?.address
              : props.address
          }
        />
      </S.ContentsWrap>
      <S.ButtonWrapper>
        <GreyBtn type="button" onClick={() => router.push("/products")}>
          취소하기
        </GreyBtn>
        <BlueBtn
          type="submit"
          onClick={
            props.isEdit
              ? handleSubmit(props.handleUpdateUseditem)
              : handleSubmit(props.handleCreateUseditem)
          }
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </BlueBtn>
      </S.ButtonWrapper>
    </form>
  );
}

export default ProductWriteForm;
