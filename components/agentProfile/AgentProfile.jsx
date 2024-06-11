import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineCamera, HiPhone } from "react-icons/hi2";
import AgentProperyList from "../agents/AgentProperyList";
import { Upload } from "antd";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdOutlineAddHomeWork } from "react-icons/md";
const AgentProfile = () => {
  return (
    <div className="px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row gap-10 items-center max-md:justify-center max-md:flex-col max-md:text-center">
          <div className="-mt-20 relative rounded-full custom-shadow  bg-gray-200 h-56 w-56 ">
            <Image
              className=" object-cover h-56 w-56 rounded-full p-[6px]  border-gray-300 "
              src={require("../../public/agents-3.jpg")}
            />
            <Upload>
              <div className=" absolute cursor-pointer custom-shadow bottom-0 right-12 bg-primaryColor py-2 px-3 rounded-full z-10 ">
                <HiOutlineCamera size={23} color="white" />
              </div>
            </Upload>
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
            <div>
              <Link
                href="/agent/advertise-property"
                className="flex flex-row justify-center items-center text-white bg-primaryColor hover:bg-primaryHoverColor duration-500 p-3 rounded-full gap-2"
              >
                <MdOutlineAddHomeWork size={20} />
                <p>Add Listing</p>
              </Link>
            </div>
            <div>
              <Link
                href="/agents/10"
                className="flex flex-row justify-center items-center text-white bg-primaryColor hover:bg-primaryHoverColor duration-500 p-3 rounded-full gap-2"
              >
                <GiSettingsKnobs className=" rotate-90" size={20} />
                <p>Edit Profile</p>
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

export default AgentProfile;
