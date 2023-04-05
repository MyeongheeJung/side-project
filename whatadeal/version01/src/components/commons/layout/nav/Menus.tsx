import { ItemWrap } from "./styles";
import { IPropsType } from "./types";

const Menus = ({ onClickMenu }: IPropsType) => {
  return (
    <ItemWrap>
      <li onClick={() => onClickMenu("/")}>홈</li>
      <li onClick={() => onClickMenu("/products")}>상품 보기</li>
      <li onClick={() => onClickMenu("/products/new")}>상품 등록</li>
    </ItemWrap>
  );
};

export default Menus;
