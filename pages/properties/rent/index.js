import React from "react";
import Dividor from "@/components/Dividor";
import PropertiesBox from "@/components/PropertiesBox";
import Layout from "@/components/Shared/Layout";
import { useLocale } from "@/hooks/useLocale";
import { useRouter } from "next/router";
export default function search() {
  const { t } = useLocale();
  const router = useRouter();
  console.log(router.query);
  const title =
    t.locale === "ar"
      ? "شقق للإيجار في السعودية"
      : "Properties for rent in saudi arabia";
  return (
    <Layout title={title}>
      {/*** Dividor ***/}
      <Dividor name={title} />
      {/*** Property list box ***/}
      <PropertiesBox />
    </Layout>
  );
}
