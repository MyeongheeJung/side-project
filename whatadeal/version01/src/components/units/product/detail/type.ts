import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsType {
  data: Pick<IQuery, "fetchUseditem">;
  IsWriter: boolean;
  onClickBuy: () => void;
  onClickCart: () => void;
  handelProductEdit: () => void;
  handleProductDelete: (useditemId: string) => void;
}
