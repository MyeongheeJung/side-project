import styled from "@emotion/styled";

export const LoginInput = styled.input`
  width: 280px;
  height: 45px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1.5px;
  padding: 5px 15px;
  margin: 10px 0;
  border: 1px solid #dfe1e4;

  :focus {
    outline-color: #1890ff;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: auto;
  line-height: inherit;
  font-size: inherit;
  font-weight: inherit;
  border: none;
  outline: none;
  background-color: transparent;
`;

export const WriteInput = styled(SearchInput)`
  border: none;
  outline: none;
  padding: 12px 15px;
  border: 1px solid #ccc;
  /* background-color: #f5f5f5; */
  font-size: 14px;
`;

export const WriteBigInput = styled(SearchInput)`
  background-color: #dfe1e4;
  padding: 10px 15px;
  width: 100%;
  margin-bottom: 3px;
`;

const TextArea = styled.textarea`
  resize: none;
  width: auto;
  border: none;
  outline: none;
  padding: 10px 15px;
`;

export const WriteTextarea = styled(TextArea)`
  height: 20rem;
  background-color: #dfe1e4;
`;

export const CommentTextArea = styled(TextArea)`
  width: 100%;
  height: 10rem;
`;
