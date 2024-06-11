import Hero from "@/components/Hero";
import FeaturedRow from "@/components/FeaturedRow";
import Layout from "@/components/Shared/Layout";
import SearchBox from "@/components/SearchBox";
import Image from "next/image";
import { useLocale } from "@/hooks/useLocale";
import SearchBoxV2 from "@/components/SearchBoxV2";
import { getSession } from "next-auth/react";

export default function Home({ session }) {
  const { t } = useLocale();
  return (
    <Layout title={t.websiteTitle}>
      {/****** Header ******/}
      <section className="">
        <div
          className="h-[700px] max-md:h-[400px]"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            position: "relative",
          }}
        >
          <Image
            src={require("../public/heroImage2.webp")}
            alt="hero image"
            className="-z-20"
            priority={true}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <Hero />
        </div>
      </section>

      <div className="max-w-6xl mx-auto -mt-24 relative">
        <div className="mx-4">
          <SearchBoxV2 />
        </div>
      </div>
      <section className="mt-24 !mx-4">
        <FeaturedRow title={t.featuredPropertyLabel} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session: session,
    },
  };
}
