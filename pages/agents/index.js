import Layout from "@/components/Shared/Layout";
import { Input } from "antd";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import AgentsList from "@/components/agents/AgentsList";
const { Search } = Input;
const index = () => {
  return (
    <Layout title="Search for agent | Alnafaz">
      {/******* Search Header ********/}
      <section className="mb-20">
        <div
          className="h-[280px] "
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            position: "relative",
          }}
        >
          <Image
            src={require("../../public/agentsSearch.jpg")}
            alt="hero image"
            className="-z-20"
            priority={true}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="max-w-2xl p-4 text-center   mx-auto h-full w-full flex flex-col justify-center items-center">
            <h1 className="text-white text-5xl  mb-4">
              Find your agent to find your home
            </h1>
            <div className="flex flex-row p-1 rounded-full overflow-hidden bg-white w-full">
              <Input
                allowClear
                placeholder="input search text"
                size="large"
                className="!h-[55px] !pl-5 border-none !rounded-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                whileTap={{ scale: 1 }}
                className="h-[55px] px-8 rounded-full bg-primaryColor text-base text-white cursor-pointer"
              >
                Search
              </motion.button>
            </div>
          </div>
        </div>
      </section>
      {/******* agent list ********/}
      <section className="mb-20">
        <AgentsList />
      </section>
    </Layout>
  );
};

export default index;
