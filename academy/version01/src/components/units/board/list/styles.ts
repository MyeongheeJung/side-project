import styled from "@emotion/styled";

// color: #42424b;
// border: 1px solid #dfe1e4;

// TopContent Style
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 60px 0 120px 0;
`;

export const SearchWrap = styled.div`
  width: 100%;
  height: 46px;
  line-height: 44px;
  border-radius: 23px;
  padding-right: 26px;
  padding-left: 43px;
  background: transparent;
  font-size: 16px;
  border: 1px solid #42424b;
  margin: 50px 0;
  box-sizing: content-box;
  position: relative;
`;

export const AskBox = styled.div`
  color: #42424b;
  font-size: 14px;
  display: flex;

  span {
    display: block;
    line-height: 1.33em;
  }

  button {
    border: none;
    background: none;

    span {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

// BoardsLists style
export const GridWrap = styled.div`
  display: ${(props) => (props.isSearch ? "block" : "grid")};
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

export const BoardsWrap = styled.div``;

export const Title = styled.p`
  font-size: 1.8rem;
`;

export const Board = styled.div`
  font-size: 14px;
  color: #42424b;
  padding: 10px 0;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-auto-rows: 1fr;

  cursor: pointer;

  &:hover ${Title} {
    color: #ff6868;
  }
`;

interface IPropsType {
  isSearch?: boolean;
}

export const Board2 = styled(Board)`
  grid-template-columns: ${(props: IPropsType) =>
    props.isSearch ? "1fr 5fr" : "2fr 3fr"};
  border: ${(props: IPropsType) =>
    props.isSearch ? "none" : "1px solid #dfe1e4"};
  padding: ${(props: IPropsType) => (props.isSearch ? "10px 0" : "20px")};
  border-radius: 4px;
`;

export const ImageBox = styled.div`
  background-color: #eee;
  width: 100%;
  max-height: 120px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 30px 15px 30px;
`;

export const Number = styled.span`
  color: #42424b;
`;

export const Contents = styled.p`
  font-size: 1.4rem;
  margin-top: 1rem;
  height: 5rem;
  opacity: 0.7;
`;

export const CreatedDay = styled.div`
  padding-right: 5px;
`;
