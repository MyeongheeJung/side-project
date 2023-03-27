import styled from "@emotion/styled";

export const NavWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
  }
`;

export const LogoWrap = styled.div`
  height: 80px;

  img {
    height: 100%;
    width: auto;
    cursor: pointer;
  }
`;

export const ItemWrap = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 30px;

  li {
    line-height: 22px;
    padding: 8px 12px;
    color: #000;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 1px;
    cursor: pointer;

    :hover {
      background-color: #ff6868;
      color: #fff;
    }

    img {
      height: 80px;
    }
  }
`;
