import { ItemWrap } from "./styles";
import { IPropsType } from "./types";

const Menus = ({ onClickMenu }: IPropsType) => {
  return (
    <ItemWrap>
      <li onClick={() => onClickMenu("/boards")}>학원 리뷰</li>
      <li onClick={() => onClickMenu("/academy")}>학원 탐색</li>
    </ItemWrap>
  );
};

export default Menus;
