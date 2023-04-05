import { useRouter } from "next/router";
import { getDate } from "../../../commons/libraries/getDate";
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

const NewItem = ({ data }: IPropsType) => {
  const router = useRouter();
  const NewItems = data?.fetchUseditems?.slice(0, 5);

  return (
    <S.GridItem5>
      {NewItems?.map((el: any) => (
        <S.ItemBox
          key={el._id}
          onClick={() => router.push(`/products/${el._id}`)}
        >
          {el.images[0] !== "" &&
          el.images[0] !== `https://storage.googleapis.com/undefined` ? (
            <S.ItemImg src={`https://storage.googleapis.com/${el.images[0]}`} />
          ) : (
            <S.ItemImg src="/noimage.png" />
          )}
          <SubText_Bold mt="5px">{el.price}원</SubText_Bold>
          <SubText size="14px" mt="5px ">
            {el.name}
          </SubText>
          <SubText_Grey size="12px" mt="5px">
            {getTimes(el.createdAt)}
          </SubText_Grey>
        </S.ItemBox>
      ))}
    </S.GridItem5>
  );
};

export default NewItem;
