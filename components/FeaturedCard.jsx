import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbBed, TbBath } from "react-icons/tb";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { AiOutlineHeart } from "react-icons/ai";
import { motion } from "framer-motion";
const FeaturedCard = ({ image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      style={{ flexBasis: 300 }}
      className="relative flex-grow custom-shadow rounded-xl bg-white overflow-hidden"
    >
      <div>
        <Image
          alt="property"
          className="w-full relative h-full object-cover"
          src={require(`../public/${image}`)}
        />
      </div>
      <div className=" absolute top-4 left-5">
        <p className="text-[13px] custom-shadow px-4 py-1 text-white bg-[#d39923] rounded-md">
          Featured
        </p>
      </div>

      <div className="px-5 relative z-10 py-10">
        <div className=" bg-white p-4 flex flex-row justify-between items-center shadow-md -mt-20 z-10 shadow-gray-300  rounded-xl">
          <div className="flex flex-row items-center gap-x-2">
            <Image
              alt="agent"
              className="rounded-full h-8 w-8"
              src={require("../public/agent1.jpg")}
            />
            <p>Jhon Doe</p>
          </div>
          <div>
            <Link
              href="/"
              className=" text-xs text-white px-3 py-[5px] bg-primaryColor rounded-sm"
            >
              FOR BUY
            </Link>
          </div>
        </div>
        <div className="text-left pt-10">
          <Link
            href="/"
            className="hover:text-primaryColor duration-500 text-2xl text-[#3d3d3d]"
          >
            Villa on Grand Avenue
          </Link>
          <div className="flex flex-row justify-between items-center">
            <div className="">
              <p className="mt-2 text-[#919191]">Start From</p>
              <p className="text-primaryColor text-lg mt-1 font-[500]">
                SAR30,3000.00
              </p>
            </div>
            <div className="">
              <button className="border cursor-pointer border-solid text-gray-400 border-gray-300 px-2 py-1 rounded-md hover:bg-primaryColor hover:border-primaryColor hover:text-white duration-500">
                <AiOutlineHeart size={30} />
              </button>
            </div>
          </div>
          {/*<p className="text-[#919191] mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  </p>*/}
          <div className="flex mt-4 flex-row justify-between items-center gap-2">
            <div className="flex space-x-2 text-[#919191] flex-row items-center">
              <TbBed size={20} />
              <span>3 Beds</span>
            </div>
            <span className="text-gray-200">|</span>
            <div className="flex space-x-2 text-[#919191] flex-row items-center">
              <TbBath size={18} />
              <span>2 Baths</span>
            </div>
            <span className="text-gray-200">|</span>
            <div className="flex space-x-2 text-[#919191] flex-row items-center">
              <TfiRulerAlt2 size={16} />
              <span>600 Sq Ft</span>
            </div>
          </div>
        </div>
        <div className="text-left mt-8">
          <Link
            href="/"
            className="text-gray-400 p-3 text-lg rounded-md border border-solid border-gray-300 hover:bg-primaryColor hover:text-white duration-500 hover:border-primaryColor"
          >
            See Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedCard;
