import { getDate } from "../../../../commons/libraries/getDate";
import * as S from "./styles";
import { IPropstype } from "./type";
import { IBoard } from "../../../../commons/types/generated/types";

export default function BoardLists({ data, router, isSearch }: IPropstype) {
  return (
    <S.GridWrap isSearch={isSearch}>
      {data?.fetchBoards.map((el: IBoard) => (
        <S.Board2
          isSearch={isSearch}
          key={el._id}
          onClick={() => {
            router?.push(`/boards/${el._id}`);
          }}
        >
          <S.ImageBox>
            {el.images[0] ? (
              <img src={`https://storage.googleapis.com/${el.images[0]}`} />
            ) : (
              <img src="/noimage.png" />
            )}
          </S.ImageBox>
          <S.ContentsBox>
            <S.Title>{el.title}</S.Title>
            <S.Contents>{el.contents.slice(0, 24)}</S.Contents>
            <S.CreatedDay>{getDate(el.createdAt)}</S.CreatedDay>
          </S.ContentsBox>
        </S.Board2>
      ))}
    </S.GridWrap>
  );
}
