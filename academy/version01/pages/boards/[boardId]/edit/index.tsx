import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useQueryFetchBoard } from "../../../../src/commons/hooks/queries/useQueryFetchBoard";
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite";

export default function BoardsEditPage() {
  const router = useRouter();

  const { data: sourceData } = useQueryFetchBoard(String(router.query.boardId));

  return <BoardWrite isEdit={true} sourceData={sourceData} />;
}
