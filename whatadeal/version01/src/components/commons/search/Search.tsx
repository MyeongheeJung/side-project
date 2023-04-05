import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { debounce } from "lodash";
import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";
import { SearchBox } from "./style";
import { SearchInput } from "../Input/style";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface ISearchPropsType {
  refetch: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  setIsSearch: Dispatch<SetStateAction<boolean>>;
}

export default function Search({ refetch, setIsSearch }: ISearchPropsType) {
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
    <SearchBox>
      <SearchInput
        type="text"
        placeholder="어떤 상품을 찾으시나요?"
        onChange={onChangeSearch}
      />
      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
    </SearchBox>
  );
}
