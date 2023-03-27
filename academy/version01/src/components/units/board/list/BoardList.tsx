import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { AskBox, SearchWrap, Title } from "./styles";
import Paginations01 from "../../../commons/paginations/01/Paginations01.container";
import { MemoizedFooter } from "../../../commons/footer";
import BoardLists from "./BoardLists";
import { FETCH_BOARDS } from "../../../../commons/hooks/queries/useQueryFetchBoards";
import { FETCH_BOARDS_COUNT } from "../../../../commons/hooks/queries/useQueryFetchBoardsCount";
import {
  Container,
  FlexColumn,
  FlexRow,
  Section,
} from "../../../../commons/styles/container";
import { SubText, SubTitle } from "../../../../commons/styles/text";
import { SearchIcon_black } from "../../../../commons/icon/antdicon";
import Search from "../../../commons/search/Search";
import { useState } from "react";
import { useAuth } from "../../../../commons/hooks/customs/useAuth";

export default function BoardList() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: boardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const [isSearch, setIsSearch] = useState<boolean>(false);

  let count = boardsCount?.fetchBoardsCount;
  return (
    <>
      <Container>
        <Section>
          <FlexColumn>
            <SubText size="1.8rem" mb="1rem">
              진짜 수강생들의 학원 리뷰
            </SubText>
            <SubTitle>
              실제 수강생들이 평가하는 학원과 강사는 어떤지 확인 해보세요.
            </SubTitle>
            <SearchWrap>
              <SearchIcon_black />
              <Search
                placeholder="학원 이름으로 검색하세요"
                refetch={refetch}
                setIsSearch={setIsSearch}
              />
            </SearchWrap>
            <AskBox>
              <span>내가 다닌 학원 후기를 남기고 싶다면,</span>
              <button>
                <span
                  onClick={() => {
                    router?.push("/boards/new");
                  }}
                >
                  지금 바로 학원 후기 작성하기!
                </span>
              </button>
            </AskBox>
          </FlexColumn>
        </Section>

        <Section>
          <SubTitle mb="3rem">
            {isSearch ? "검색 결과" : "최신 리뷰 보기 🔎"}
          </SubTitle>
          <BoardLists data={data} router={router} isSearch={isSearch} />
        </Section>

        <Section>
          <FlexRow>
            <Paginations01 count={count} refetch={refetch} />
          </FlexRow>
        </Section>
      </Container>
      <MemoizedFooter />
    </>
  );
}
