import { Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IFormType {
  remarks: string;
  price: number;
  contents: string;
  address: string;
  zipcode: string;
  images: string[];
}

export interface IEditType {
  data?: Pick<IQuery, "fetchUseditem">;
  isEdit?: boolean;
}

export interface IPropstype {
  handleCreateUseditem: (data: IFormType) => Promise<void>;
  handleUpdateUseditem: (data: IFormType) => Promise<void>;
  address: string;
  setAddress: Dispatch<SetStateAction<string>>;
  contents: string;
  setContents: Dispatch<SetStateAction<string>>;
  fileUrls: string[];
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  data?: Pick<IQuery, "fetchUseditem"> | undefined;
  isEdit?: boolean;
}
