import styled from "styled-components";
import { Error } from "@styled-icons/boxicons-regular";
import { Edit } from "@styled-icons/boxicons-solid";
import { User } from "@styled-icons/remix-line";

export const ErrorIcon = styled(Error)`
  color: ${(props) => props.color};
  width: 30rem;
`;

export const EditIcon = styled(Edit)`
  color: ${(props) => props.color};
  height: 2.8rem;
  cursor: pointer;

  &:hover {
    color: #ff6868;
  }
`;

export const Avatar = styled(User)`
  color: #fff;
`;
