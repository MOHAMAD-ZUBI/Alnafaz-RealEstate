import { AutoComplete, Input, Select } from "antd";
import React, { useState } from "react";
import { useLocale } from "@/hooks/useLocale";

const Hero = () => {
  const { t } = useLocale();

  const beds = [1, 2, 3, 4, 5, 6, 7, "7+"];
  const baths = [1, 2, 3, 4, 5, 6, 7, "7+"];

  const [minPrice, setMinPrice] = useState(0);
  const [expand, setExpand] = useState(false);

  const handleMinPrice = (price) => {
    if (!Number(price)) {
      return;
    }
    setMinPrice(price);
  };
  return (
    <div className=" relative w-full flex flex-col max-w-6xl m-auto max-h-full h-full justify-center items-center align-middle">
      <div>
        <h1 className="text-center text-white text-5xl ">
          {t.hero} <span className="text-primaryColor"></span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
