import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { debounce } from "lodash";
import Input from "../Input";
import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";

interface ISearchPropsType {
  refetch: (
    variables?:
      | Partial<IQueryFetchBoardsArgs>
      | Partial<IQueryFetchUseditemsArgs>
      | undefined
  ) => Promise<
    ApolloQueryResult<Pick<IQuery, "fetchUseditems" | "fetchBoards">>
  >;
  placeholder: string;
  setIsSearch: Dispatch<SetStateAction<boolean>>;
}

export default function Search({
  refetch,
  placeholder,
  setIsSearch,
}: ISearchPropsType) {
  const [keyword, setKeyword] = useState("");

  const getDebounce = debounce((value) => {
    void refetch({ search: value, page: 1 });
  }, 500);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "") {
      setIsSearch(false);
      return;
    }

    setIsSearch(true);
    setKeyword(e.currentTarget.value);
    getDebounce(e.currentTarget.value);
  };

  return (
    <>
      <Input
        name="SearchInput"
        inputProps={{
          type: "text",
          placeholder,
        }}
        onChange={onChangeSearch}
      />
    </>
  );
}
