import { useAuth } from "../../../src/commons/hooks/customs/useAuth";
import { MemoizedFooter } from "../../../src/components/commons/footer";
import BoardWrite from "../../../src/components/units/board/write/BoardWrite";

export default function BoardWritePage() {
  useAuth("후기를 작성하려면");

  return (
    <>
      <BoardWrite isEdit={false} />
      <MemoizedFooter />
    </>
  );
}
