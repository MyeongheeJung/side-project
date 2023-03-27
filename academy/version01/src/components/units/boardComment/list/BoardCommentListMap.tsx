import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import BoardCommentWrite from "../write/BoardCommentWrite";
import * as S from "./styles";
import { IPropsType } from "./types";
import { Avatar } from "../.../../../../../commons/icon/styledIcon";
import { StarRate } from "../../../../commons/icon/rate";
import { SubText, SubText_Grey } from "../../../../commons/styles/text";
import {
  FlexColumnStart,
  FlexRowBetween,
  FlexRowStart,
} from "../../../../commons/styles/container";
import { DeleteIcon, EditIcon } from "../../../../commons/icon/antdicon";
import { useMutationDeleteBoardComment } from "../../../../commons/hooks/mutations/useMutationDeleteBoardComment";
import { FETCH_BOARD_COMMENTS } from "../../../../commons/hooks/queries/useQueryFetchBoardComments";
import { getDate } from "../../../../commons/libraries/getDate";

const BoardCommentListMap = ({ comment }: IPropsType) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const [deleteBoardComment] = useMutationDeleteBoardComment();
  const onClickDelete = async () => {
    try {
      const result = await deleteBoardComment({
        variables: {
          boardCommentId: comment._id,
          password: confirmPassword,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });
      Modal.success({ content: "댓글이 삭제되었습니다." });
    } catch (error) {
      Modal.error({ content: "비밀번호가 다릅니다." });
    }
  };

  const onClickUpdate = () => {
    setIsEdit(true);
  };
  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };
  const onChangeModal = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <>
      {!isEdit && (
        <S.FlexWrapper>
          <FlexRowBetween>
            <FlexRowStart>
              <S.AvatarBox>
                <Avatar />
              </S.AvatarBox>
              <div>
                <SubText size="1.8rem">{comment?.writer}</SubText>
                <SubText_Grey size="1.2rem">
                  {getDate(comment?.createdAt)}
                </SubText_Grey>
              </div>
            </FlexRowStart>
            <S.StarBox>
              <StarRate value={comment?.rating} />
            </S.StarBox>
          </FlexRowBetween>
          <S.ContentsBox>
            <SubText_Grey mt="1rem" ml="5.5rem">
              {comment?.contents}
            </SubText_Grey>
          </S.ContentsBox>
          <S.UtilWrap>
            <EditIcon onClick={onClickUpdate} />
            <DeleteIcon onClick={handleModal} />
          </S.UtilWrap>
        </S.FlexWrapper>
      )}
      {isOpen && (
        <Modal
          title="비밀번호 확인"
          open={true}
          onOk={onClickDelete}
          onCancel={handleModal}
        >
          <S.ModalInput
            type="password"
            placeholder="비밀번호를 입력하세요."
            onChange={onChangeModal}
            value={confirmPassword}
            autoFocus
          ></S.ModalInput>
        </Modal>
      )}
      {isEdit && (
        <BoardCommentWrite
          isEdit={true}
          setIsEdit={setIsEdit}
          comment={comment}
        />
      )}
    </>
  );
};

export default BoardCommentListMap;
