import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  background-image: url("/grid.svg");
  background-repeat: repeat;
  background-size: 28px;
  font-family: 'KoHo',-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}

code, pre {
  font-family: 'Fira Code'
}
`;

export default GlobalStyle;
