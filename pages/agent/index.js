import DividorWithBackground from "@/components/DividorWithBackground";
import Layout from "@/components/Shared/Layout";
import AgentProfile from "@/components/agentProfile/AgentProfile";
import React from "react";

const agentProfile = () => {
  return (
    <Layout title="Alnafaz">
      {/*** Dividor with background image ***/}
      <DividorWithBackground />
      <AgentProfile />
    </Layout>
  );
};

export default agentProfile;
