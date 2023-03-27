import BoardDetail from "../../../src/components/units/board/detail/BoardDetail";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList";
import { MemoizedFooter } from "../../../src/components/commons/footer";

export default function BoardDetailPage() {
  return (
    <>
      <BoardDetail />

      <BoardCommentWrite />
      <BoardCommentList />
      <MemoizedFooter />
    </>
  );
}
