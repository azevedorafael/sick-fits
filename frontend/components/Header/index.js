import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";

import Nav from "../Nav";

import * as S from "./styles";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => (
  <S.StyledHeader>
    <div className="bar">
      <S.Logo>
        <Link href="/">
          <a>Sick Fits</a>
        </Link>
      </S.Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </S.StyledHeader>
);

export default Header;
