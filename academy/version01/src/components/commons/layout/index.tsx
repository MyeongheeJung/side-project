import { useRouter } from "next/router";
import Header from "./header";
import Nav from "./nav/Nav";

interface ILayoutProps {
  children: JSX.Element;
}

const IsHidden = ["/login", "/signup"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  if (IsHidden.includes(router.asPath)) {
    return <body>{props.children}</body>;
  } else {
    return (
      <>
        <Header>
          <Nav />
        </Header>
        {router.asPath === "/products" && <Buskets />}
        <body>{props.children}</body>
      </>
    );
  }
}
