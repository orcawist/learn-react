import React, { useEffect, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState();
  useEffect(() => {
    if (state) return;
  }, [state]);
  return <Component {...pageProps} />;
}

export default MyApp;
