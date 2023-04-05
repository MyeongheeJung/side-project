import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function Buskets() {
  const router = useRouter();
  const [recentlyLists, setRecentlyLists] = useState([]);

  useEffect(() => {
    const baskets = JSON.parse(sessionStorage.getItem("baskets") ?? "[]");
    setRecentlyLists(baskets);
  }, [router]);

  return (
    <>
      {recentlyLists?.length > 0 && (
        <RecentlyListsWrap>
          <RecentlyTitle>최근 본 상품</RecentlyTitle>
          {recentlyLists.map((cur: any) => (
            <Thumnail key={cur?._id + uuidv4()}>
              <Link href={`products/${cur?._id}`}>
                <a>
                  {cur?.images[0] && (
                    <img
                      src={`https://storage.googleapis.com/${cur?.images[0]}`}
                    />
                  )}
                </a>
              </Link>
            </Thumnail>
          ))}
        </RecentlyListsWrap>
      )}
    </>
  );
}

const RecentlyListsWrap = styled.div`
  width: 155px;
  height: 373px;
  padding: 28px 34px 32px 36px;
  border: 1px solid #000000;
  background: #ffffff;

  position: fixed;
  right: 80px;
  top: 200px;
  z-index: 1000;
`;

const RecentlyTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const Thumnail = styled.div`
  & + div {
    margin-top: 10px;
  }
  > a {
    display: block;
    position: relative;
    width: 85px;
    height: 85px;
    background-color: #c4c4c4;
    overflow: hidden;
  }
  > a > img {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
  }
`;
