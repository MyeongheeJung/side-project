import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import InformationListUI from "./InformationListUI";
import { FETCH_BOARDS } from "../../../../commons/hooks/queries/useQueryFetchBoards";

export default function InformationList() {
  const router = useRouter();

  const { data, refetch, fetchMore } = useQuery(FETCH_BOARDS);

  // 이벤트 핸들러 함수
  const onClickMoveToBoardDetail = (boardId: string) => {
    void router.push(`/boards/${boardId}`);
  };

  return (
    <InformationListUI
      data={data}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      // 이 부분이 페이지 네이션 부분!!
      refetch={refetch}
      fetchMore={fetchMore}
    />
  );
}
