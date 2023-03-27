import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsType {
  onClickMoveToBoardList: () => void;
  onClickMoveToBoardEdit: () => void;
  onClickLikeCount: () => void;
  onClickUnLikeCount: () => void;
  onClickDelete: (boardId: string) => Promise<void>;
  data: Pick<IQuery, "fetchBoard"> | undefined;
}
