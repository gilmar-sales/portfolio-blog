import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component key="app" {...pageProps} />
      <GlobalStyle key="global" />
    </>
  );
}

export default MyApp;
