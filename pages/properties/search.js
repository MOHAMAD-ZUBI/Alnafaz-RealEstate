import React from "react";
import Dividor from "@/components/Dividor";
import PropertiesBox from "@/components/PropertiesBox";
import Layout from "@/components/Shared/Layout";
import { useLocale } from "@/hooks/useLocale";
export default function search() {
  const { t } = useLocale();
  const title =
    t.locale === "ar"
      ? "إبحث عن شقق في السعودية"
      : "Find Properties in saudi arabia";
  return (
    <Layout title={title}>
      {/*** Dividor ***/}
      <Dividor name={title} />
      {/*** Property list box ***/}
      <PropertiesBox />
    </Layout>
  );
}
