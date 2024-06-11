import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiPhone } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import FeaturedRow from "../FeaturedRow";
import AgentProperyList from "./AgentProperyList";
const AgentDetails = () => {
  return (
    <div className="px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row gap-10 items-center max-md:justify-center max-md:flex-col max-md:text-center">
          <div className="-mt-20 relative rounded-full custom-shadow  bg-gray-200 h-56 w-56 ">
            <Image
              className=" object-cover h-56 w-56 rounded-full p-[6px]  border-gray-300 "
              src={require("../../public/agents-3.jpg")}
            />
          </div>
          <div className="">
            <h2 className="text-4xl font-bold">Benedict Cumbatch</h2>
            <p className="text-gray-400 mt-1 text-xl">
              Modern House Real Estate Agent
            </p>
          </div>
        </div>
        <div className="w-full  mt-20 flex flex-row justify-between gap-10 max-md:flex-wrap max-md:justify-center">
          <div className="flex min-w-[224px] flex-col gap-y-3">
            <div className="flex flex-row gap-x-4 items-center">
              <HiPhone className="text-gray-500" size={20} />
              <Link href="tel:03030571965">03030571965</Link>
            </div>
            <div className="flex flex-row gap-x-4 items-center">
              <MdEmail className="text-gray-500" size={20} />
              <Link href="mail:info@realhome.com">info@realhome.com</Link>
            </div>
            <div>
              <Link
                href="/agents/10"
                className="flex flex-row justify-center items-center text-white bg-primaryColor hover:bg-primaryHoverColor duration-500 p-3 rounded-full gap-2"
              >
                <RiMessage3Fill size={25} />
                <p>Chat</p>
              </Link>
            </div>
          </div>
          <div className="w-full">
            <AgentProperyList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetails;
