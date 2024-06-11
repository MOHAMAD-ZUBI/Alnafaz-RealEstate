import React from "react";
import AgentCard from "./AgentCard";

const AgentsList = () => {
  return (
    <div className="max-w-6xl mx-auto flex gap-4 flex-row flex-wrap px-4 ">
      <AgentCard />
      <AgentCard />
      <AgentCard />
      <AgentCard />
    </div>
  );
};

export default AgentsList;
