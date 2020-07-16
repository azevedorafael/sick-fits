import { ThemeProvider, injectGlobal } from "styled-components";

import Header from "../Header";
import Meta from "../Meta";

import { theme } from "../../styles/theme";

import * as S from "./styles";

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
