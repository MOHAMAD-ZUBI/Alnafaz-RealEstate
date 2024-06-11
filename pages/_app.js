import "@/styles/globals.css";
import Head from "next/head";
import "@/styles/Main.css";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

import { store } from "@/store/store";
import { useRouter } from "next/router";
import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();
  const [mounted, setMounted] = useState(false);

  const dir = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    if (document.documentElement.dir !== dir) {
      document.documentElement.dir = dir;
    }
    //document.documentElement.lang = locale;
  }, [dir]);
  useEffect(() => setMounted(true), []);
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <div style={{ visibility: !mounted ? "hidden" : "visible" }}>
            <Component {...pageProps} />
          </div>
        </Provider>
      </SessionProvider>
    </>
  );
}
