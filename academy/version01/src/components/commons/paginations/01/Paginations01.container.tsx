import { MouseEvent, useState } from "react";
import Paginations01UI from "./Paginations01.presenter";
import { IPaginations01Props } from "./Paginations01.types";
import { Modal } from "antd";

export default function Paginations01({ count, refetch }: IPaginations01Props) {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = count != null ? Math.ceil(count / 10) : 1;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    const activedPage = Number(event.currentTarget.id);
    setActivedPage(activedPage);
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) {
      Modal.error({ content: "시작 페이지 입니다." });
      return;
    }
    setStartPage(startPage - 10);
    setActivedPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setActivedPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
    if (startPage + 10 > lastPage) {
      Modal.error({ content: "마지막 페이지 입니다." });
    }
  };

  return (
    <Paginations01UI
      startPage={startPage}
      lastPage={lastPage}
      activedPage={activedPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
