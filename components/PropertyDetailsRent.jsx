import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { MdIosShare } from "react-icons/md";
import PropertyDetailsImages from "./PropertyDetailsImages";
import { TfiAngleDown, TfiAngleUp, TfiRulerAlt2 } from "react-icons/tfi";
import { CiStar } from "react-icons/ci";
import { TbBath, TbBed, TbMapSearch } from "react-icons/tb";
import { Gi3DStairs } from "react-icons/gi";
import FeaturedRow from "./FeaturedRow";

const PropertyDetailsRent = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="relative">
      <div className="max-w-6xl px-5 mb-20 -mt-28 overflow-hidden mx-auto">
        {/*** general info ***/}
        <div className=" p-10 bg-white custom-shadow rounded-xl mb-10  gap-y-6 gap-x-2 flex flex-row justify-between  flex-wrap">
          <div className="flex flex-col flex-grow gap-y-4">
            <h1 className="text-4xl text-gray-600">The Citizen Apartment</h1>
            {/**<div className="flex flex-row items-center gap-x-2">
              <Image
                alt="agent"
                className="rounded-full h-10 w-10"
                src={require("../public/agent1.jpg")}
              />
              <p className=" font-semibold">Jhon Doe</p>
            </div> */}
            <div className="flex flex-row items-center gap-x-3 ">
              <Link
                href="/"
                className=" text-xs text-[#f2b141]/80 px-3 py-[5px] bg-[#f2b141]/25 font-semibold rounded-md"
              >
                BUILDING
              </Link>
              <Link
                href="/"
                className=" text-xs text-primaryColor/80 px-3 py-[5px] bg-primaryColor/25 font-semibold rounded-md"
              >
                FOR BUY
              </Link>
              <Link
                href="/"
                className=" text-xs text-purple-500/80 px-3 py-[5px] bg-purple-500/25 font-semibold rounded-md"
              >
                Featured
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between max-sm:flex-row max-sm:items-center max-sm:w-full  items-end gap-y-4 ">
            <div className="flex flex-row items-start gap-x-3  ">
              <div>
                <h2 className="text-[#f2b241]">30,000,00 SAR</h2>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <button className="border cursor-pointer border-solid text-gray-400 border-gray-300 px-2 py-1 rounded-md hover:bg-primaryColor hover:border-primaryColor hover:text-white duration-500">
                <MdIosShare size={30} />
              </button>
              <button className="border cursor-pointer border-solid text-gray-400 border-gray-300 px-2 py-1 rounded-md hover:bg-primaryColor hover:border-primaryColor hover:text-white duration-500">
                <AiOutlineHeart size={30} />
              </button>
              <button className="border cursor-pointer border-solid text-gray-400 border-gray-300 px-2 py-1 rounded-md hover:bg-primaryColor hover:border-primaryColor hover:text-white duration-500">
                <TbMapSearch size={30} />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          {/*** Image Preview ***/}
          <PropertyDetailsImages />
        </div>
        <div className="mt-8">
          <div className="w-full flex flex-row justify-between gap-10 max-md:flex-wrap max-md:justify-center ">
            {/*** section 1 ***/}
            <div className="max-md:w-full w-full">
              <div>
                <h2 className="text-gray-700">Description</h2>
                <p
                  className={`text-gray-500 leading-6 text-[18x] mt-2 ${
                    expand ? " line-clamp-none" : "line-clamp-4"
                  }`}
                >
                  This amazing executive family home is being presented for sale
                  by the current owners that have added some extraordinary
                  features to make you fall in love with it. Currently presented
                  as a 4 bedroom 3 bathroom residence it could quite easily be
                  converted into 5 bedrooms by reclaiming the rumpus room as an
                  additional bedroom. The Master is incredible, with a huge
                  en-suite featuring a spa bath and also has a sizeable WIR,
                  this suite has direct access to a private outdoor area to
                  relax in. The second biggest room also has an ensuite and is
                  perfect for visitors for extra convenience or the teenager
                  that requires additional privacy.
                </p>
                <div>
                  <button
                    onClick={() => setExpand(!expand)}
                    className="mt-3 bg-transparent relative z-10 text-[16px] cursor-pointer flex flex-row items-center gap-2"
                  >
                    <span className="text-primaryColor">Read More</span>
                    {!expand ? (
                      <TfiAngleDown className="text-primaryColor" />
                    ) : (
                      <TfiAngleUp className="text-primaryColor" />
                    )}
                  </button>
                </div>
              </div>
              {/*** beds baths size level .... ***/}
              <div className="mt-4 bg-white shadow-xl shadow-gray-200/80">
                <div className="flex mb-4 flex-row justify-between items-center gap-2">
                  <div className="flex w-full rounded-3xl p-4 gap-y-2 text-[#919191] flex-col items-center">
                    <TbBed size={30} />
                    <span>3 Beds</span>
                  </div>
                  <span className="text-gray-200">|</span>
                  <div className="flex w-full p-4 rounded-3x gap-y-2 text-[#919191] flex-col items-center">
                    <TbBath size={27} />
                    <span>2 Baths</span>
                  </div>
                  <span className="text-gray-200">|</span>
                  <div className="flex w-full p-4 rounded-3x gap-y-2 text-[#919191] flex-col items-center">
                    <TfiRulerAlt2 size={24} />
                    <span>600 Sq Ft</span>
                  </div>
                  <span className="text-gray-200">|</span>
                  <div className="flex w-full p-4 rounded-3x gap-y-2 text-[#919191] flex-col items-center">
                    <Gi3DStairs size={24} />
                    <span>2 levels</span>
                  </div>
                </div>
                <div className="flex mb-4 flex-row justify-between items-center gap-2">
                  <div className="flex w-full rounded-3xl p-4 gap-y-2 text-[#919191] flex-col items-center">
                    <TbBed size={30} />
                    <span>3 Beds</span>
                  </div>
                  <span className="text-gray-200">|</span>
                  <div className="flex w-full p-4 rounded-3x gap-y-2 text-[#919191] flex-col items-center">
                    <TbBath size={27} />
                    <span>2 Baths</span>
                  </div>
                  <span className="text-gray-200">|</span>
                  <div className="flex w-full p-4 rounded-3x gap-y-2 text-[#919191] flex-col items-center">
                    <TfiRulerAlt2 size={24} />
                    <span>600 Sq Ft</span>
                  </div>
                  <span className="text-gray-200">|</span>
                  <div className="flex w-full p-4 rounded-3x gap-y-2 text-[#919191] flex-col items-center">
                    <Gi3DStairs size={24} />
                    <span>2 levels</span>
                  </div>
                </div>
              </div>
            </div>
            {/*** section 2 ***/}
            <div className="w-full" style={{ flexBasis: 400 }}>
              <div>
                <div>
                  <h2 className="text-gray-700 mb-4">Agent</h2>
                  <div className="flex w-full flex-row items-center gap-x-2">
                    <Image
                      alt="agent"
                      className="rounded-full h-16 w-16"
                      src={require("../public/agent1.jpg")}
                    />
                    <p className=" text-lg text-gray-600 font-semibold">
                      Jhon Doe
                    </p>
                  </div>
                </div>
                <div>
                  <button className="w-full text-center bg-primaryColor hover:bg-primaryHoverColor duration-500 rounded-lg p-3 text-white mt-4 cursor-pointer">
                    Get in touch
                  </button>
                  <button className="w-full flex flex-row justify-center items-center gap-x-4 text-center border-solid border border-black rounded-lg p-[10px] text-black mt-2 cursor-pointer">
                    <CiStar size={23} />
                    <p>Save property</p>
                  </button>
                </div>
              </div>
              <div className="h-[1px] bg-gray-200 w-full mt-4"></div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <FeaturedRow title="More Properties From Jhon doe" />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsRent;
