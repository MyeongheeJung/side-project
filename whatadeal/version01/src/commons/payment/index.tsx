import Head from "next/head";
import { useRouter } from "next/router";
import { useMutationCreatePointTransactionOfLoading } from "../hooks/mutations/useMutationCreatePointTransactionOfLoading";
import { FETCH_USER_LOGGED_IN } from "../hooks/queries/useQueryFetchUserLoggedIn";
import { Button } from "antd";

interface IPaymentProps {
  amount: string;
  name: string;
  user: any;
  title: string;
}

export default function PaymentComponent(props: IPaymentProps) {
  const router = useRouter();
  const [createPointTransactionOfLoading] =
    useMutationCreatePointTransactionOfLoading();

  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card", // card, vbank 등
        // merchant_uid: "ORD20180131-0000011", // 중복될 시, 결제 안됨!
        name: props.name,
        amount: props.amount,
        // 받은 유저 정보를 아래에 추가해준다.
        buyer_email: props.user?.email,
        buyer_name: props.user?.email,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // m_redirect_url: "http://localhost:3000/28-01-payment", // 모바일에서는 결제시, 결제페이지로 사이트가 이동됨
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          const result = await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
            refetchQueries: [
              {
                query: FETCH_USER_LOGGED_IN,
              },
            ],
          });
          alert("결제가 성공했습니다.");
          console.log(result);
          if (rsp.success) router.push("/markets");
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다! 다시 시도해 주세요!");
        }
      }
    );
  };

  return (
    <>
      <Head>
        {/* jQuery */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* iamport.payment.js */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <Button type="primary" onClick={onClickPayment}>
        {props.title}
      </Button>
    </>
  );
}
