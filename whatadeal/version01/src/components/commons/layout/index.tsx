import { useRouter } from "next/router";
import Buskets from "../buskets";
import Header from "./header";
import Nav from "./nav/Nav";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

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
