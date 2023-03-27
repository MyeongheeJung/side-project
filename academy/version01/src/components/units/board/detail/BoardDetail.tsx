import { Modal } from "antd";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetailUI";
import { Container } from "../../../../commons/styles/container";
import { useMutationLikeBoard } from "../../../../commons/hooks/mutations/useMutationLikeBoard";
import { useMutationDislikeBoard } from "../../../../commons/hooks/mutations/useMutationDislikeBoard";
import { useMutionDeleteBoard } from "../../../../commons/hooks/mutations/useMutaionDeleteBoard";
import {
  FETCH_BOARD,
  useQueryFetchBoard,
} from "../../../../commons/hooks/queries/useQueryFetchBoard";
import { FETCH_BOARDS } from "../../../../commons/hooks/queries/useQueryFetchBoards";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQueryFetchBoard(String(router.query.boardId));

  const [likeBoard] = useMutationLikeBoard();
  const [dislikeBoard] = useMutationDislikeBoard();
  const [deleteBoard] = useMutionDeleteBoard();

  const onClickMoveToBoardList = () => {
    void router.push("/boards");
  };

  const onClickMoveToBoardEdit = () => {
    void router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickLikeCount = async () => {
    try {
      await likeBoard({
        variables: {
          boardId: String(router.query.boardId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: String(router.query.boardId),
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickUnLikeCount = async () => {
    try {
      await dislikeBoard({
        variables: {
          boardId: String(router.query.boardId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: String(router.query.boardId),
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickDelete = async (boardId: string) => {
    try {
      await deleteBoard({
        variables: {
          boardId,
        },
        refetchQueries: [{ query: FETCH_BOARDS }],
      });
      Modal.success({
        content: "게시글 삭제에 성공했습니다!",
        afterClose() {
          router.push("/boards");
        },
      });
    } catch (error) {
      Modal.error({ content: "게시글을 삭제할 수 있는 권한이 없습니다!" });
    }
  };

  return (
    <Container>
      <BoardDetailUI
        data={data}
        onClickMoveToBoardList={onClickMoveToBoardList}
        onClickMoveToBoardEdit={onClickMoveToBoardEdit}
        onClickDelete={onClickDelete}
        onClickLikeCount={onClickLikeCount}
        onClickUnLikeCount={onClickUnLikeCount}
      />
      <hr />
    </Container>
  );
}
