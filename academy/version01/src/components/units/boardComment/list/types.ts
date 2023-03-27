import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsType {
  data?: Pick<IQuery, "fetchBoardComments"> | undefined;
  onClickUpdate?: () => void;
  onClickDelete?: () => void;
  isEdit?: boolean;
  comment?: any;
  key?: any;
}
