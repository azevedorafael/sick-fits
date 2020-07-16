import { ThemeProvider, injectGlobal } from "styled-components";

import Header from "../Header";
import Meta from "../Meta";

import { theme } from "../../styles/theme";

import * as S from "./styles";

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight:normal;
    font-style:normal;
  }

  html {
    box-sizing:border-box;
    font-size: 10px;
  }

  *,*:before,*:after {
    box-sizing:inherit;
  }

  body {
    padding:0;
    margin: 0;
    font-size:1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }

  a{
    text-decoration: none;
    color: ${theme.black}
  }
`;

const Page = (props) => (
  <ThemeProvider theme={theme}>
    <S.StyledPage>
      <Meta />
      <Header />
      <S.Inner>{props.children}</S.Inner>
    </S.StyledPage>
  </ThemeProvider>
);

export default Page;
