import { ChangeEvent, useState } from "react";
import { useQueryFetchUserLoggendIn } from "../../../commons/hooks/queries/useQueryFetchUserLoggedIn";
import PaymentComponent from "../../../commons/payment";
import * as S from "./Charge.style";
import { Select } from "antd";

export default function ChargeComponent() {
  const [amount, setAmount] = useState<string>("100");

  const { data: fetchUserLoggedIn } = useQueryFetchUserLoggendIn();

  const handleChange = (value: string) => {
    setAmount(value);
  };

  return (
    <S.Wrapper>
      <Select
        defaultValue="금액을 선택하세요"
        style={{ width: 280 }}
        onChange={handleChange}
        options={[
          { value: "5000", label: "5000원" },
          { value: "10000", label: "10000원" },
          { value: "30000", label: "30000원" },
        ]}
      />
      <PaymentComponent
        amount={amount}
        name={`${amount}원 충전`}
        user={fetchUserLoggedIn}
        title="충전하기"
      />
    </S.Wrapper>
  );
}
