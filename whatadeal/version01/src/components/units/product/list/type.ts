import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsType {
  data: Pick<IQuery, "fetchUseditems"> | undefined;
  onLoadMore: () => void;
  onClickMoveToPage: (productId: string) => void;
}
