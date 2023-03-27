import { gql, useQuery } from "@apollo/client";

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      createdAt
    }
  }
`;

export const useQueryFetchUserLoggendIn = () => {
  const query = useQuery(FETCH_USER_LOGGED_IN);
  return query;
};
