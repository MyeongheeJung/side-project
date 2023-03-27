import InfiniteScroll from "react-infinite-scroller";
import * as S from "./styles";
import { InformationUIProps } from "./types";
import { SubText } from "../../../../commons/styles/text";
import { StarRate } from "../../../../commons/icon/rate";

export default function InformationListUI({
  data,
  ...props
}: InformationUIProps) {
  const onLoadMore = () => {
    if (data === undefined) return;

    void props.fetchMore({
      variables: { page: Math.ceil(data.fetchBoards.length / 10) },
      updateQuery: (prev, { fetchMoreResult }) => {
        // !fetchMoreResult?.fetchBoards
        console.log("fetchMoreResult : ", fetchMoreResult);
        if (fetchMoreResult.fetchBoards === undefined) {
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult?.fetchBoards],
        };
      },
    });
  };

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={onLoadMore}
      hasMore={true}
      useWindow={true}
    >
      <S.Wrapper>
        {data?.fetchBoards.map((el: any, index) => (
          <S.CardWrap
            key={el._id + index}
            onClick={() => props.onClickMoveToBoardDetail(el._id)}
          >
            <S.ImageBox>
              {el.images[0] && (
                <S.Image
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                />
              )}
              {el.images[0] === "" && <S.Image src="/noimage.png" />}
            </S.ImageBox>
            <S.TextBox>
              <SubText size="1.8rem">{el.writer}</SubText>
              <S.StarBox>
                <StarRate />
              </S.StarBox>
            </S.TextBox>
          </S.CardWrap>
        ))}
      </S.Wrapper>
    </InfiniteScroll>
  );
}
