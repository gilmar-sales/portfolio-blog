import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-image: url("/grid-2x.png");
  background-repeat: repeat;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

`;

export default GlobalStyle;
