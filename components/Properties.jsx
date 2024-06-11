import { useLocale } from "@/hooks/useLocale";
import { Select } from "antd";
import React from "react";
import { motion } from "framer-motion";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  const { t } = useLocale();

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const images = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div>
      <div className="shadow-lg flex flex-row justify-between p-3  ">
        <div className="flex flex-row items-center  gap-x-1 ">
          <h3 className="text-lg">Search Results: </h3>
          <p className="text-gray-500 text-lg">850+</p>
        </div>
        <div className="flex flex-row gap-x-2 items-center">
          <p>Sort By:</p>
          <div>
            <Select
              value="featured"
              size="large"
              options={[
                {
                  value: "featured",
                  label: "Featured",
                },
                {
                  value: "New",
                  label: "New",
                },
                {
                  value: "HighToLow",
                  label: "High to low price",
                },
                {
                  value: "lowToHighPrice",
                  label: "low to high price",
                },
              ]}
            />
          </div>
        </div>
      </div>
      {/**** Property list ****/}
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        className="flex flex-row flex-wrap gap-5 mt-4"
      >
        <PropertyCard variants={images} image={"feature-1.jpg"} />
        <PropertyCard variants={images} image={"feature-2.jpg"} />
        <PropertyCard variants={images} image={"feature-3.jpg"} />
        <PropertyCard variants={images} image={"feature-3.jpg"} />
      </motion.div>
    </div>
  );
};

export default Properties;
