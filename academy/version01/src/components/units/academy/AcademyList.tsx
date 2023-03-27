import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { keywordSearchState } from "../../../commons/stores";
import { StarRate } from "../../../commons/icon/rate";
import { AcademyInfos } from "./data";
import { Card, CardsWrap, Content, Logo, Name, Review } from "./style";

const AcademyList = () => {
  const router = useRouter();
  const [, setKeyWord] = useRecoilState(keywordSearchState);

  const handleSubmit = (keyword: string) => {
    setKeyWord(keyword);
    router.push(`/search/${keyword}`);
  };

  return (
    <CardsWrap>
      {AcademyInfos.map((item) => (
        <Card key={item.name}>
          <Logo>
            <img src={item.imgUrl} />
          </Logo>
          <Content>
            <Name>{item.name}</Name>
            <StarRate />
            <Review onClick={() => handleSubmit(item.name)}>
              <span>REVIEW</span>
            </Review>
          </Content>
        </Card>
      ))}
    </CardsWrap>
  );
};

export default AcademyList;
