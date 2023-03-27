import styled from "@emotion/styled";
import {
  SearchOutlined,
  LikeOutlined,
  DislikeOutlined,
  CameraOutlined,
  CloseOutlined,
  EditOutlined,
} from "@ant-design/icons";

export const DeleteIcon = styled(CloseOutlined)``;
export const EditIcon = styled(EditOutlined)``;

export const SearchIcon = styled(SearchOutlined)`
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`;

export const SeachIcon_yello = styled(SearchIcon)`
  background-color: #ffce49;
  width: 56px;
  height: 56px;
  line-height: 56px;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 28px);
  right: 13px;
`;

export const SearchIcon_black = styled(SearchIcon)`
  color: #222;
  line-height: 44px;
  position: absolute;
  top: calc(50% - 20px);
  left: 13px;
`;

export const CameraIcon = styled(CameraOutlined)`
  font-size: inherit;
  color: inherit;
`;

export const LikeIcon = styled(LikeOutlined)`
  color: inherit;
  font-size: 20px;
`;
export const UnLikeIcon = styled(DislikeOutlined)`
  color: inherit;
  font-size: 20px;
`;
