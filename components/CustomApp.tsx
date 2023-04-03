import { useState } from "react";

const CustomApp = ({ Component, pageProps }) => {
  const [clickAmount, setClickAmount] = useState(0);
  const increment = () => setClickAmount((amount) => amount + 1);

  return (
    <Component {...pageProps} clickAmount={clickAmount} increment={increment} />
  );
};
