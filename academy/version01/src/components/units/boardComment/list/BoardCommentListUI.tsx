import { Container } from "../../../../commons/styles/container";
import BoardCommentListMap from "./BoardCommentListMap";
import { IPropsType } from "./types";

const BoardCommentListUI = ({ data }: IPropsType) => {
  return (
    <Container>
      {data?.fetchBoardComments?.map((comment: any) => (
        <BoardCommentListMap key={comment._id} comment={comment} />
      ))}
    </Container>
  );
};
export default BoardCommentListUI;
