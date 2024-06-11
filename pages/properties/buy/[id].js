import DividorWithBackground from "@/components/DividorWithBackground";
import Layout from "@/components/Shared/Layout";
import PropertyDetailsRent from "@/components/PropertyDetailsRent";
import React from "react";

const propertyForBuy = () => {
  return (
    <Layout title="Alnafaz">
      {/*** Dividor with background image ***/}
      <DividorWithBackground title="Property Details" />
      {/*** Property Details Container ***/}

      <PropertyDetailsRent />
    </Layout>
  );
};

export default propertyForBuy;

export async function getServerSideProps(context) {
  const slug = context.params;
  const error = null;
  if (error) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: slug,
      err: "404",
    },
  };
}
