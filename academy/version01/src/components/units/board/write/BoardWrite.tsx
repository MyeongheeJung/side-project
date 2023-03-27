import { Modal } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";
import { IEditPropstype } from "./types";
import { IFormType } from "./types";
import BoardWriteForm from "./BoardWriteForm";
import { useMutationCreateBoard } from "../../../../commons/hooks/mutations/useMutationCreateBoard";
import { useMutationUpdateBoard } from "../../../../commons/hooks/mutations/useMutationUpdateBoard";
import { Container } from "../../../../commons/styles/container";
import { Wrapper } from "./styles";
import { Title } from "../../../../commons/styles/text";

export default function BoardWrite({ sourceData, isEdit }: IEditPropstype) {
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState([]);
  const [createBoard] = useMutationCreateBoard();
  const [updateBoard] = useMutationUpdateBoard();

  console.log(sourceData, "BoardWrite Props");

  // 리뷰 등록하기
  const handleCreateBoard = async (data: IFormType) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: String(data.writer),
            password: data.password,
            title: data.title,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl || "",
            images: [...fileUrls],
            boardAddress: {
              zipcode: "",
              address: "",
              addressDetail: "",
            },
          },
        },
      });
      console.log(data);
      console.log(result);
      if (typeof result.data?.createBoard._id !== "string") {
        alert("일시적인 오류가 있습니다. 다시 시도해 주세요.");
        return;
      }
      void router.push(`/boards/${result.data?.createBoard._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 리뷰 수정하기
  const handleUpdateBoard = async (data: IFormType) => {
    console.log("폼에서 받은 data", data);

    // 배열을 문자열로 바꿔서 내용을 비교하는 이유: 배열은 생긴 모양이 같아도 주소를 비교하기 때문에 false가 나온다.
    // const currentFiles = JSON.stringify(fileUrls);
    // const defaultFiles = JSON.stringify(sourceData?.fetchBoard.images);
    // const isCahagrdFiles = currentFiles !== defaultFiles;

    try {
      const result = await updateBoard({
        variables: {
          updateBoardInput: {
            title: data.title,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl || "",
            images: [...fileUrls],
            boardAddress: {
              zipcode: "",
              address: "",
              addressDetail: "",
            },
          },
          password: data.password,
          boardId: String(router.query.boardId),
        },
      });
      if (typeof result.data?.updateBoard._id !== "string") {
        Modal.error({ content: "해당 시스템에 문제가 있습니다." });
        return;
      }
      Modal.success({
        content: "게시글이 수정되었습니다!",
        afterClose() {
          router.push(`/boards/${result.data?.updateBoard._id}`);
        },
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: "비밀번호가 틀렸거나 삭제할 수 있는 권한이 없습니다.",
        });
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title mb="3rem">{isEdit ? "리뷰 수정" : "리뷰 등록"}</Title>
        <BoardWriteForm
          isEdit={isEdit}
          sourceData={sourceData}
          handleCreateBoard={handleCreateBoard}
          handleUpdateBoard={handleUpdateBoard}
          fileUrls={fileUrls}
          setFileUrls={setFileUrls}
        />
      </Wrapper>
    </Container>
  );
}
