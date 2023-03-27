import { ApolloQueryResult } from "@apollo/client";
import { NextRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface IPropstype {
  data?: Pick<IQuery, "fetchBoards">;
  router?: NextRouter;
  isSearch?: boolean;
  keyword?: string;
  fetchMore?: any;
}
