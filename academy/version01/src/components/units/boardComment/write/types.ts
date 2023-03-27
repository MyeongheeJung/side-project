import { ChangeEvent } from "react";

export interface IFormType {
  writer: string;
  password: string;
  contents: string;
}

export interface IPropsType {
  handleCreateBoardComment: (data: IFormType) => Promise<void>;
  handleUpdateBoardCommemt: (data: IFormType) => Promise<void>;
  setRating: any;
  isEdit: boolean;
  comment: any;
  SetIsEdit?: () => boolean;
  rating: number;
}

export interface IUpdateBoardCommentInput {
  contents?: string;
  rating?: number;
}
