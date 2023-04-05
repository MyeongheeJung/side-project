import { useRouter } from "next/router";
import { ChangeEvent, KeyboardEvent, useRef } from "react";
import { useRecoilState } from "recoil";
import { SearchIcon_blue } from "../../../commons/icon/antdicon";
import { keywordSearchState } from "../../../commons/stores";
import { SearchInput } from "../../commons/Input/style";
import { SearchBox } from "../../commons/search/style";

const FastSearch = () => {
  const router = useRouter();
  const InputRef = useRef(null);
  const [, setKeyWord] = useRecoilState(keywordSearchState);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    InputRef.current.value === e.target.value;
  };

  const handleSubmit = () => {
    if (InputRef.current?.value === "") return;
    setKeyWord(InputRef.current?.value);
    console.log(InputRef.current?.value);
    void router.push(`/search/${InputRef.current?.value}`);
  };
  // Enter 입력이 되면 클릭 이벤트 실행
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <SearchBox>
      <SearchInput
        type="text"
        placeholder="어떤 상품을 찾으시나요?"
        ref={InputRef}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <SearchIcon_blue onClick={handleSubmit} />
    </SearchBox>
  );
};

export default FastSearch;
