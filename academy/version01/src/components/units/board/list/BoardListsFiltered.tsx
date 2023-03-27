import InfiniteScroll from "react-infinite-scroller";
import * as S from "./styles";
import { SubTitle, Title } from "../../../../commons/styles/text";
import { IPropstype } from "./type";
import { IBoard } from "../../../../commons/types/generated/types";
import { getDate } from "../../../../commons/libraries/getDate";
import { FlexColumn } from "../../../../commons/styles/container";
import { ErrorIcon } from "../../../../commons/icon/styledIcon";

export default function BoardListsFiltered({
  data,
  router,
  isSearch,
  fetchMore,
  keyword,
}: IPropstype): JSX.Element {
  const onLoadMore = () => {
    if (data === undefined) return;
    try {
      void fetchMore({
        variables: { page: Math.ceil(data.fetchBoards.length / 10) },
        updateQuery: (prev: any, { fetchMoreResult }: any) => {
          if (
            fetchMoreResult &&
            fetchMoreResult.fetchBoards === undefined &&
            typeof fetchMoreResult.fetchBoards[Symbol.iterator] === "function"
          ) {
            return {
              fetchBoards: [...prev?.fetchBoards],
            };
          }
          if (prev.fetchBoards !== undefined) {
            return Object.assign({}, prev, {
              fetchBoards: [
                ...prev?.fetchBoards,
                ...fetchMoreResult.fetchBoards,
              ],
            });
          }
        },
      });
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  console.log(data?.fetchBoards);
  return (
    <>
      <SubTitle mt="6rem">{isSearch && `"${keyword}" 검색 결과`}</SubTitle>
      <S.BoardsWrap>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {data?.fetchBoards.length !== 0 ? (
            data?.fetchBoards.map((el: IBoard, idx: number) => (
              <S.Board
                key={el._id + idx}
                onClick={() => {
                  router?.push(`/boards/${el._id}`);
                }}
              >
                <S.ImageBox>
                  {el.images[0] ? (
                    <img
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                    />
                  ) : (
                    <img src="/noimage.png" />
                  )}
                </S.ImageBox>
                <S.ContentsBox>
                  <S.Title>{el.title}</S.Title>
                  <S.Contents>{el.contents}</S.Contents>
                  <S.CreatedDay>{getDate(el.createdAt)}</S.CreatedDay>
                </S.ContentsBox>
              </S.Board>
            ))
          ) : (
            <FlexColumn>
              <ErrorIcon color="#ff6868" />
              <Title mb="2rem">검색 결과를 찾을 수 없습니다.</Title>
              <SubTitle>이용에 불편을 드려 죄송합니다.</SubTitle>
            </FlexColumn>
          )}
        </InfiniteScroll>
      </S.BoardsWrap>
    </>
  );
}
