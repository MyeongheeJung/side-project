import { useRouter } from "next/router";
import { ChangeEvent, KeyboardEvent, useRef } from "react";
import { useRecoilState } from "recoil";
import { keywordSearchState } from "../../../commons/stores";
import { Container, Section } from "../../../commons/styles/container";
import { SubTitle } from "../../../commons/styles/text";
import Carousel from "../../commons/carousel";
import { MemoizedFooter } from "../../commons/footer";
import { SeachIcon_yello } from "../../../commons/icon/antdicon";
import { SearchInput } from "../../commons/Input/style";
import AcademyList from "../academy/AcademyList";
import { HomeWrap, Img, SearchBox } from "./style";

const Home = () => {
  const router = useRouter();
  const InputRef = useRef(null);
  const [, setKeyWord] = useRecoilState(keywordSearchState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    InputRef.current.value === e.target.value;
  };

  const handleSubmit = () => {
    if (InputRef.current?.value === "") return;
    setKeyWord(InputRef.current?.value);
    router.push(`/search/${InputRef.current?.value}`);
  };
  // Enter 입력이 되면 클릭 이벤트 실행
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <HomeWrap>
      <Container>
        <>
          <Img>
            <img src="/looking_for.jpg" />
          </Img>
          <SearchBox>
            <SearchInput
              type="text"
              placeholder="학원을 검색하세요"
              ref={InputRef}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            />
            <SeachIcon_yello onClick={handleSubmit} />
          </SearchBox>
        </>
        <Section>
          <SubTitle mb="3rem">인기 학원</SubTitle>
          <AcademyList />
        </Section>
        <Section>
          <SubTitle mb="3rem">인기 강의</SubTitle>
          <Carousel />
        </Section>

        <Section>
          <SubTitle mb="3rem">인기 강사</SubTitle>
          <Carousel />
        </Section>
      </Container>
      <MemoizedFooter />
    </HomeWrap>
  );
};

export default Home;
