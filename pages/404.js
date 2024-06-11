import Layout from "@/components/Shared/Layout";
import { useLocale } from "@/hooks/useLocale";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const notFound = () => {
  const { t } = useLocale();
  const title = t.locale === "en" ? "Page not found" : "الصفحة غير موجودة";
  return (
    <Layout title={title}>
      <div className=" overflow-hidden mb-40 w-full flex flex-col justify-center align-middle items-center">
        <Image
          src={require("../public/404.png")}
          height={700}
          width={700}
          priority={true}
          alt="404"
        />
        <Link
          className="py-3 px-10 text-white text-lg bg-primaryColor hover:bg-primaryHoverColor duration-500"
          href="/"
        >
          {t.locale === "en" ? "Home" : "الصفحة الرئيسية"}
        </Link>
      </div>
    </Layout>
  );
};

export default notFound;
