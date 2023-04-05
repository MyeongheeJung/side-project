import { getDate } from "../../../../commons/libraries/getDate";
import { FlexRowStart } from "../../../../commons/styles/container";
import {
  SubText,
  SubText_Bold,
  SubText_Grey,
  Title,
} from "../../../../commons/styles/text";
import { BlueBtn, GreyBtn } from "../../../commons/button/style";
import Slider from "../../../commons/slider/Slider";
import { Bottons, ProductDetailContent, ProductImage } from "./style";
import { IPropsType } from "./type";
import { Button } from "antd";

const ProductDetailUI = ({ data, ...props }: IPropsType) => {
  console.log(data);
  return (
    <FlexRowStart>
      <ProductImage>
        <Slider data={data} />
      </ProductImage>
      <ProductDetailContent>
        <SubText_Bold size="2rem">{data?.fetchUseditem.remarks}</SubText_Bold>
        <SubText_Grey mb="2rem">
          {getDate(data?.fetchUseditem.createdAt)} 등록
        </SubText_Grey>
        <Title mb="2rem">{data?.fetchUseditem.price}원</Title>
        <SubText
          dangerouslySetInnerHTML={{
            __html: data?.fetchUseditem.contents ?? "",
          }}
        ></SubText>
        <Bottons>
          <GreyBtn
            onClick={
              props.IsWriter
                ? props.handleProductDelete(data?.fetchUseditem._id)
                : props.onClickCart
            }
          >
            {props.IsWriter ? "상품 삭제" : "장바구니에 담기"}
          </GreyBtn>
          <BlueBtn
            onClick={
              props.IsWriter ? props.handelProductEdit : props.onClickBuy
            }
          >
            <span>{props.IsWriter ? "상품 수정" : "구매하기"}</span>
          </BlueBtn>
        </Bottons>
      </ProductDetailContent>
    </FlexRowStart>
  );
};

export default ProductDetailUI;
