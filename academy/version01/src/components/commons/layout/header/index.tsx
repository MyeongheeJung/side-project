import { useEffect, useRef } from "react";
import { Container } from "../../../../commons/styles/container";
import { HeaderWrap } from "./style";

interface IPropsType {
  children: JSX.Element;
}

const Header = (props: IPropsType) => {
  const HeadRef = useRef(null);
  const handleScroll = () => {
    if (window.scrollY >= 1) {
      // scroll down시, fixed
      HeadRef.current.style.position = "fixed";
      HeadRef.current.style.background = "#fff";
    } else {
      HeadRef.current.style.position = "relative";
      HeadRef.current.style.background = "none";
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderWrap ref={HeadRef}>
      <Container>{props.children}</Container>
    </HeaderWrap>
  );
};

export default Header;
