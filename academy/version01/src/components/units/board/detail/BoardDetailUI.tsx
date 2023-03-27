import * as S from "./style";
import { getDate } from "../../../../commons/libraries/getDate";
import { IPropsType } from "./types";
import { FlexRow, Section } from "../../../../commons/styles/container";
import Button from "../../../commons/button/Button";
import {
  SubText,
  SubText_Grey,
  SubTitle,
  Title,
} from "../../../../commons/styles/text";
import { Avatar } from "../../../../commons/icon/styledIcon";
import { LikeIcon, UnLikeIcon } from "../../../../commons/icon/antdicon";
import { Wrapper } from "../write/styles";
import { useEffect } from "react";

export default function BoardDetailUI({ data, ...props }: IPropsType) {
  // 유튜브 url 변환
  const YoutubeData = String(data?.fetchBoard?.youtubeUrl);
  const YoutubeLink = `https://www.youtube.com/embed/${
    YoutubeData.split("v=")[1]
  }`;

  // 이미지 빈 배열 필터링
  let GetImg = data?.fetchBoard.images?.filter(
    (item: any) => item?.images !== ""
  );
  const Image = GetImg?.filter((img) => img !== "");

  useEffect(() => {
    if (data?.fetchBoard.images?.length) {
      GetImg = [...data?.fetchBoard.images];
    }
  }, [data]);

  return (
    <Wrapper>
      <Title>{data?.fetchBoard?.title}</Title>

      <S.Head>
        <FlexRow>
          <S.AvatarBox>
            <Avatar />
          </S.AvatarBox>
          <div>
            <SubTitle>{data?.fetchBoard?.writer}</SubTitle>
            <SubText_Grey size="1.2rem">
              {getDate(data?.fetchBoard?.createdAt)}
            </SubText_Grey>
          </div>
        </FlexRow>

        <FlexRow>
          <S.ThumbWrap onClick={props.onClickLikeCount}>
            <LikeIcon />
            <S.ThumbUpCount>{data?.fetchBoard?.likeCount}</S.ThumbUpCount>
          </S.ThumbWrap>
          <S.ThumbWrap onClick={props.onClickUnLikeCount}>
            <UnLikeIcon />
            <S.ThumbUpCount>{data?.fetchBoard?.dislikeCount}</S.ThumbUpCount>
          </S.ThumbWrap>
        </FlexRow>
      </S.Head>

      <S.UtilBox>
        <FlexRow>
          <Button
            type="button"
            name="SmallBtn"
            onClick={() => props.onClickDelete(String(data?.fetchBoard?._id))}
          >
            삭제하기
          </Button>
          <Button
            type="button"
            name="SmallBtn_Point"
            onClick={props.onClickMoveToBoardEdit}
          >
            수정하기
          </Button>
        </FlexRow>
      </S.UtilBox>

      <SubText>{data?.fetchBoard?.contents}</SubText>

      <Section>
        {Image?.map((url: string) => (
          <S.Image>
            <img key={url} src={`https://storage.googleapis.com/${url}`} />
          </S.Image>
        ))}
      </Section>
      <Section>
        <S.Video src={YoutubeLink} />
      </Section>
      <S.BtnWrap>
        <Button
          name="SubmitBtn"
          type="button"
          onClick={props.onClickMoveToBoardList}
        >
          목록으로
        </Button>
      </S.BtnWrap>
    </Wrapper>
  );
}
