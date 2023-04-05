import * as S from "./style";
import InfiniteScroll from "react-infinite-scroller";
import { FlexColumnStart, Section } from "../../../../commons/styles/container";
import { SubText, SubText_Grey } from "../../../../commons/styles/text";
import { IPropsType } from "./type";

const ProductListUI = ({ data, onLoadMore, onClickMoveToPage }: IPropsType) => {
  return (
    <Section>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={true}
      >
        <S.GridItems>
          {data?.fetchUseditems.map((el: any) => (
            <S.ItemBox key={el._id} onClick={() => onClickMoveToPage(el._id)}>
              {el.images[0] !== "" &&
              el.images[0] !== `https://storage.googleapis.com/undefined` ? (
                <S.ItemImg
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                />
              ) : (
                <S.ItemImg src="/noimage.png" />
              )}
              <S.ItemContents>
                <SubText mt="1rem" mb="5px">
                  {el.remarks}
                </SubText>
                <SubText_Grey>{el.price}원</SubText_Grey>
              </S.ItemContents>
            </S.ItemBox>
          ))}
        </S.GridItems>
      </InfiniteScroll>
    </Section>
  );
};
export default ProductListUI;
