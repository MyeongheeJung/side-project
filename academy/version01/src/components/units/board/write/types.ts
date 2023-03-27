import { IQuery } from "../../../../commons/types/generated/types";

export interface IEditPropstype {
  isEdi?: boolean;
  sourceData?: any;
  comment?: any;
}

export interface IUpdateBoardInput {
  writer?: string;
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  images?: string;
}

export interface IFormType {
  writer: string;
  password: string;
  title: string;
  contents: string;
  youtubeUrl: string;
  images: Array<string>;
}

export interface IPropsType {
  handleCreateBoard: (data: IFormType) => Promise<void>;
  handleUpdateBoard: (data: IFormType) => Promise<void>;
  isEdit?: boolean;
  fileUrls: Array<string>;
  setFileUrls: any;
  sourceData?: Pick<IQuery, "fetchBoard">;
}

export interface IEditPropstype {
  isEdit: boolean;
  el: any;
  cotents: string;
  setIsEdit: () => void;
}
