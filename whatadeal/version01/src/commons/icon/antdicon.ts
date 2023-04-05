import styled from "@emotion/styled";
import {
  SearchOutlined,
  LikeOutlined,
  DislikeOutlined,
  CameraOutlined,
  CloseOutlined,
  EditOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const DeleteIcon = styled(CloseOutlined)``;
export const EditIcon = styled(EditOutlined)``;

export const SearchIcon = styled(SearchOutlined)`
  display: inline-block;
  font-size: inherit;
  font-weight: 700;
  color: #fff;
`;

export const SearchIcon_blue = styled(SearchIcon)`
  background-color: #18a8f1;
  width: 30px;
  height: 30px;
  line-height: 40px;
  font-size: 2rem;
  border-radius: 50%;
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

export const Avatar = styled(UserOutlined)`
  font-size: 3rem;
  border-radius: 50%;
  padding: 0.5rem;
  color: #fff;
  background-color: #d9d9d9;
  margin-bottom: 1rem;
`;
