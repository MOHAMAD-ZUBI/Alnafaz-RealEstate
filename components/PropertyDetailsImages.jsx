import Image from "next/image";
import { Image as AntdImage } from "antd";
import React, { useState } from "react";

const PropertyDetailsImages = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="!w-full">
      {/*** Image Preview ***/}
      <div className="!rounded-xl relative">
        <Image
          className="!rounded-xl h-full w-full"
          src={require("../public/heroImage2.webp")}
          onClick={() => setVisible(true)}
        />
        <div className=" overflow-hidden  px-5 flex z-10 flex-row  bottom-5 items-center absolute gap-5">
          <Image
            className="!rounded-xl w-[20%] cursor-pointer object-cover "
            style={{
              maxInlineSize: "100%",
              blockSize: "auto",
              aspectRatio: "4/3",
            }}
            src={require("../public/heroImage2.webp")}
            onClick={() => setVisible(true)}
          />
          <Image
            className="!rounded-xl w-[20%] cursor-pointer object-cover "
            style={{
              maxInlineSize: "100%",
              blockSize: "auto",
              aspectRatio: "4/3",
            }}
            src={require("../public/feature-1.jpg")}
            onClick={() => setVisible(true)}
          />
          <Image
            className="!rounded-xl w-[20%] cursor-pointer object-cover "
            style={{
              maxInlineSize: "100%",
              blockSize: "auto",
              aspectRatio: "4/3",
            }}
            src={require("../public/feature-2.jpg")}
            onClick={() => setVisible(true)}
          />
          <Image
            className="!rounded-xl w-[20%] cursor-pointer object-cover "
            style={{
              maxInlineSize: "100%",
              blockSize: "auto",
              aspectRatio: "4/3",
            }}
            src={require("../public/feature-3.jpg")}
            onClick={() => setVisible(true)}
          />
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
    </div>
  );
};

export default PropertyDetailsImages;
