import {
  ApolloQueryResult,
  FetchMoreQueryOptions,
  OperationVariables,
} from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface InformationUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveToBoardDetail: (boardId: string) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  fetchMore: <TFetchData = any, TFetchVars = OperationVariables>(
    fetchMoreOptions: FetchMoreQueryOptions<TFetchVars, TFetchData> & {
      updateQuery?:
        | ((previousQueryResult: any, options: any) => any)
        | undefined;
    }
  ) => Promise<ApolloQueryResult<TFetchData>>;
  count?: number;
}

export interface ITextTokenProps {
  isMatched: boolean;
}
