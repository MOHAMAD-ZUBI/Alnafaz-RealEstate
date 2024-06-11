import DividorWithBackground from "@/components/DividorWithBackground";
import Layout from "@/components/Shared/Layout";
import AgentDetails from "@/components/agents/AgentDetails";
import React from "react";

const agentProfile = () => {
  return (
    <Layout title="Alnafaz">
      {/*** Dividor with background image ***/}
      <DividorWithBackground />
      <AgentDetails />
    </Layout>
  );
};

export default agentProfile;

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
