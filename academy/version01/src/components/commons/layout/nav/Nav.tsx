import { useRouter } from "next/router";
import { LogoWrap, NavWrap } from "./styles";
import { useQueryFetchUserLoggendIn } from "../../../../commons/hooks/queries/useQueryFetchUserLoggedIn";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import Menus from "./Menus";
import LoginMenus from "./LoginMenus";

export default function Nav() {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const { data } = useQueryFetchUserLoggendIn();

  const onClickMenu = (path: string) => {
    router.push(path);
  };

  return (
    <NavWrap>
      <div>
        <LogoWrap onClick={() => onClickMenu("/")}>
          <img src="/logo.png" />
        </LogoWrap>

        <Menus onClickMenu={onClickMenu} />
      </div>
      <LoginMenus
        data={data}
        accessToken={accessToken}
        onClickMenu={onClickMenu}
      />
    </NavWrap>
  );
}
