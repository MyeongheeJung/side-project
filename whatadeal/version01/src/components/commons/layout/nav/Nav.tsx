import { useRouter } from "next/router";
import { FlexRow, FlexWrap, LogoWrap, NavWrap } from "./styles";
import Menus from "./Menus";
import FastSearch from "../../../units/search/FastSearch";
import LoginMenus from "./LoginMenus";
import {
  Container,
  FlexRowBetween,
} from "../../../../commons/styles/container";

export default function Nav() {
  const router = useRouter();

  const HiddenNav = ["/login", "/signup"];

  const onClickMenu = (path: string) => {
    router.push(path);
  };

  const IsHidden = HiddenNav.includes(router.asPath);

  return (
    <NavWrap IsHidden={IsHidden}>
      <LoginMenus />
      <Container>
        <FlexWrap>
          <FlexRow>
            <LogoWrap onClick={() => onClickMenu("/")}>
              <img src="./logo.png" />
            </LogoWrap>
            <FastSearch />
          </FlexRow>
          <Menus onClickMenu={onClickMenu} />
        </FlexWrap>
      </Container>
    </NavWrap>
  );
}
