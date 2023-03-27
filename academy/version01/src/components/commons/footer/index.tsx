import styled from "@emotion/styled";
import React from "react";

const FooterWrap = styled.footer`
  padding: 20px 0;
  border-top: 1px solid #94969b;
  margin-top: 60px;
`;

const Copyrigth = styled.div`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: center;
  color: #94969b;
`;

function Footer() {
  return (
    <FooterWrap>
      <Copyrigth>
        이 사이트는 실제 운영되는 사이트가 아닙니다.
        <br />© 2023 Myeonghee.Jung all rigths reserved.
      </Copyrigth>
    </FooterWrap>
  );
}

export const MemoizedFooter = React.memo(Footer);
