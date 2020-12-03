import "../styles/globals.css";

const { A, B, C, WINNER } = process.env;

console.log({
  A,
  B,
  C,
  WINNER,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
