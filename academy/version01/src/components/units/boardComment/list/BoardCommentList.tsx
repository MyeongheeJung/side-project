import { useRouter } from "next/router";
import { useQueryFetchBoardComments } from "../../../../commons/hooks/queries/useQueryFetchBoardComments";
import BoardCommentListUI from "./BoardCommentListUI";

export default function BoardCommentList() {
  const router = useRouter();
  const { data } = useQueryFetchBoardComments(String(router.query.boardId));

  return <BoardCommentListUI data={data} />;
}
