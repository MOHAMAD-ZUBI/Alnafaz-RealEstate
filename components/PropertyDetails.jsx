import Image from "next/image";
import { Image as AntdImage } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { ImShare2 } from "react-icons/im";
import { TbBath, TbBed } from "react-icons/tb";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { Gi3DStairs } from "react-icons/gi";
const PropertyDetails = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" relative">
      <div className="max-w-6xl -mt-20 mb-20 !z-10 mx-auto">
        <div className="mx-4">
          {/*** general info ***/}
          <div className=" p-10 bg-white custom-shadow rounded-xl mb-10  gap-y-6 gap-x-2 flex flex-row justify-between  flex-wrap">
            <div className="flex flex-col flex-grow gap-y-4">
              <h1>The Citizen Apartment</h1>
              <div className="flex flex-row items-center gap-x-2">
                <Image
                  alt="agent"
                  className="rounded-full h-10 w-10"
                  src={require("../public/agent1.jpg")}
                />
                <p className=" font-semibold">Jhon Doe</p>
              </div>
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
                  <ImShare2 size={30} />
                </button>
                <button className="border cursor-pointer border-solid text-gray-400 border-gray-300 px-2 py-1 rounded-md hover:bg-primaryColor hover:border-primaryColor hover:text-white duration-500">
                  <AiOutlineHeart size={30} />
                </button>
                <button className="border cursor-pointer border-solid text-gray-400 border-gray-300 px-2 py-1 rounded-md hover:bg-primaryColor hover:border-primaryColor hover:text-white duration-500">
                  <AiOutlineMessage size={30} />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full">
            {/*** Image Preview ***/}
            <div style={{ flexBasis: 770 }} className="flex flex-row gap-2">
              <AntdImage
                preview={{
                  visible: false,
                }}
                className="max-w-[770px] !max-h-[600px] w-full !h-full object-cover"
                src={require("../public/heroImage2.jpg").default?.src}
                onClick={() => setVisible(true)}
              />
              <div style={{ flexBasis: 400 }} className="flex flex-col gap-2  ">
                <div className="flex-grow">
                  <AntdImage
                    preview={{
                      visible: false,
                      src: "Hello",
                    }}
                    className="object-cover"
                    src={require("../public/heroImage.jpg").default?.src}
                    onClick={() => setVisible(true)}
                  />
                </div>
                <div className="flex-grow">
                  <AntdImage
                    preview={{
                      visible: false,
                      src: "Hello",
                    }}
                    className="object-cover"
                    src={require("../public/heroImage2.jpg").default?.src}
                    onClick={() => setVisible(true)}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                display: "none",
              }}
            >
              <AntdImage.PreviewGroup
                preview={{
                  visible,
                  onVisibleChange: (vis) => setVisible(vis),
                }}
              >
                <AntdImage src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                <AntdImage src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                <AntdImage src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
              </AntdImage.PreviewGroup>
            </div>
            {/**** Agency info ****/}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
