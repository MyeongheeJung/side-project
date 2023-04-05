import styled from "@emotion/styled";

export const NavWrap = styled.div`
  display: ${(props: boolean) => (props.IsHidden ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

export const LogoWrap = styled.div`
  img {
    height: 4rem;
    object-fit: contain;
    cursor: pointer;
  }
  margin-right: 2rem;
`;

export const FlexWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ItemWrap = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  li {
    /* line-height: 6rem; */
    margin: 0 2rem 1rem;
    padding: 1rem 0 1rem 0;

    font-weight: 500;
    font-size: 18px;
    letter-spacing: 1px;
    border-top: 4px solid transparent;
    cursor: pointer;

    :hover {
      border-top: 4px solid #18a8f1;
    }

    img {
      height: 80px;
    }
  }
`;

export const LoginWrap = styled.div`
  width: 100%;
  border: 1px solid #f5f5f5;
`;

export const LoginLists = styled.ul`
  list-style: none;

  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;

  li {
    padding: 10px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 1px;
    cursor: pointer;
  }
`;
