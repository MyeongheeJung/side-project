import { gql, useMutation } from "@apollo/client";

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      _id
      url
      size
    }
  }
`;

export const useMutationUploadFile = () => {
  const mutation = useMutation(UPLOAD_FILE);
  return mutation;
};
