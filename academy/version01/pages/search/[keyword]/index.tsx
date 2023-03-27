import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FETCH_BOARDS } from "../../../src/commons/hooks/queries/useQueryFetchBoards";
import { Container } from "../../../src/commons/styles/container";
import BoardListsFiltered from "../../../src/components/units/board/list/BoardListsFiltered";
import { useRecoilState } from "recoil";
import { keywordSearchState } from "../../../src/commons/stores";

function SearchPage() {
  const router = useRouter();
  const [keyword] = useRecoilState(keywordSearchState);
  const { data, refetch, fetchMore } = useQuery(FETCH_BOARDS);

  useEffect(() => {
    void refetch({ search: keyword, page: 1 });
  }, []);

  return (
    <Container>
      <BoardListsFiltered
        data={data}
        router={router}
        isSearch={true}
        fetchMore={fetchMore}
        keyword={keyword}
      />
    </Container>
  );
}

export default SearchPage;
