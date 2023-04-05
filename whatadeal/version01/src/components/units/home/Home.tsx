import { useRouter } from "next/router";
import { useQueryFetchUsedItems } from "../../../commons/hooks/queries/useQueryFetchUsedItems";
import {
  Container,
  FlexRowBetween,
  Section,
} from "../../../commons/styles/container";
import { SubTitle } from "../../../commons/styles/text";
import Button from "../../commons/button/Button";
import Carousel from "../../commons/carousel";
import { MemoizedFooter } from "../../commons/footer";
import BestItem from "./BestItem";
import NewItem from "./NewItem";

const Home = () => {
  const { data } = useQueryFetchUsedItems();

  return (
    <>
      <Carousel />
      <Container>
        <Section>
          <FlexRowBetween>
            <SubTitle mb="3rem">최신 상품</SubTitle>
            <Button name="MoreViewBtn">더 보기 </Button>
          </FlexRowBetween>
          <NewItem data={data} />
        </Section>
        <Section>
          <FlexRowBetween>
            <SubTitle mb="3rem">추천 상품</SubTitle>
            <Button name="MoreViewBtn">더 보기 </Button>
          </FlexRowBetween>
          <BestItem data={data} />
        </Section>
      </Container>
      <MemoizedFooter />
    </>
  );
};

export default Home;
