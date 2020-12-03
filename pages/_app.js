import "../styles/globals.css";

const { A, B, C } = process.env;

console.log({
  A,
  B,
  C,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
