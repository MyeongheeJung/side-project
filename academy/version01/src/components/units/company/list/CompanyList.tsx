import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as S from "./style";

export default function CompanyList() {
  const router = useRouter();
  const [company, setCompany] = useState<any[]>([]);

  useEffect(() => {
    let completed = false;
    async function get() {
      const result = await axios.get(
        `https://fakerapi.it/api/v1/companies?_quantity=20`
      );
      if (!completed) setCompany(result.data.data);
    }
    get();

    return () => {
      completed = !true;
    };
  }, []);

  const onLoadMore = () => {
    const get = async () => {
      await axios
        .get(`https://fakerapi.it/api/v1/companies?_quantity=20`)
        .then((res) => setCompany((prev) => [...prev, ...res.data.data]))
        .catch((error) => console.log(error));
    };
    get();
  };

  const onClickMove = (url: string) => {
    router.push(url);
  };

  console.log("company: ", company);

  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={true}
      >
        <S.GridWrap>
          {company.map((el) => (
            <S.CardWrap
              key={el.website}
              onClick={() => onClickMove(el.website)}
            >
              <S.ImageBox>
                <img src={el.image} />
              </S.ImageBox>
              <S.InfoWrapper>
                <S.Name>{el.name}</S.Name>
                <S.Star5>★★★☆☆</S.Star5>
              </S.InfoWrapper>
            </S.CardWrap>
          ))}
        </S.GridWrap>
      </InfiniteScroll>
    </>
  );
}
