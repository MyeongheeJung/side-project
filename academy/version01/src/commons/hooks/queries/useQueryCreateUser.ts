import { gql, useMutation } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      name
      email
    }
  }
`;

export const useQueryCreateUser = () => {
  const mutation = useMutation(CREATE_USER);
  return mutation;
};
