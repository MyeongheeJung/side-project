import { useRouter } from "next/router";
import { getTimes } from "../../../commons/libraries/getTimes";
import {
  SubText,
  SubText_Bold,
  SubText_Grey,
} from "../../../commons/styles/text";
import { IQuery } from "../../../commons/types/generated/types";
import * as S from "./style";

interface IPropsType {
  data: Pick<IQuery, "fetchUseditems"> | undefined;
}

const BestItem = ({ data }: IPropsType) => {
  const router = useRouter();
  let BestItems = data && [...data.fetchUseditems];
  BestItems = BestItems?.sort(
    (itemA: any, itemB: any) => itemB.pickedCount - itemA.pickedCount
  ).slice(0, 9);

  return (
    <S.GridItem3>
      {BestItems?.map((el: any) => (
        <S.ItemBox
          key={el._id}
          onClick={() => router.push(`/products/${el._id}`)}
        >
          {el.images.length !== 0 ? (
            <S.ItemImg src={`https://storage.googleapis.com/${el.images[0]}`} />
          ) : (
            <S.ItemImg src="/noimage.png" />
          )}

          <S.ItemContentBox>
            <SubText_Bold mt="5px">{el.price}원</SubText_Bold>
            <SubText size="14px" mt="5px ">
              {el.name}
            </SubText>
            <SubText_Grey size="12px" mt="5px">
              {getTimes(el.createdAt)}
            </SubText_Grey>
          </S.ItemContentBox>
        </S.ItemBox>
      ))}
    </S.GridItem3>
  );
};

export default BestItem;
