import { AutoComplete, Input, Select } from "antd";
import React, { useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import { useLocale } from "@/hooks/useLocale";
import { FaBed, FaBath, FaFilter } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
const PropertiesFilters = () => {
  const { t } = useLocale();
  const router = useRouter();
  const [minPrice, setMinPrice] = useState(0);
  const beds = [1, 2, 3, 4, 5, 6, 7, "7+"];
  const baths = [1, 2, 3, 4, 5, 6, 7, "7+"];
  const handleMinPrice = (price) => {
    if (!Number(price)) {
      return;
    }
    setMinPrice(price);
  };
  return (
    <div>
      <div className="shadow-lg bg-white p-5">
        <div className="flex flex-col gap-y-3">
          <h3>Property</h3>
          <Input
            size="large"
            placeholder={t.heroLocationInputPlaceholder}
            prefix={<TfiSearch />}
          />
          <Select
            value={t.heroPropertyTypeLabel}
            size="large"
            className="w-full"
            options={[
              {
                value: "Apartment",
                label: "Apartment",
              },
              {
                value: "Villa",
                label: "Villa",
              },
              {
                value: "Farm",
                label: "Farm",
              },
              {
                value: "Duplex",
                label: "Duplex",
              },
              {
                value: "Land",
                label: "Land",
              },
            ]}
          />
          <Select
            value={t.heroPriceRangeInputPlaceholder}
            size="large"
            className="w-full"
            dropdownMatchSelectWidth={400}
            dropdownRender={() => (
              <>
                <div className="flex flex-row gap-2 p-4">
                  <div className="flex-grow">
                    <AutoComplete
                      className="w-full"
                      onChange={(price) => handleMinPrice(price)}
                      value={minPrice}
                      options={[
                        { value: "1000", label: "1000" },
                        { value: "2000", label: "2000" },
                        { value: "4000", label: "4000" },
                      ]}
                      placeholder="Min Price(SAR)"
                    />
                  </div>
                  <div className="flex-grow">
                    <AutoComplete
                      className="w-full"
                      options={[
                        { value: "1000", label: "1000" },
                        { value: "2000", label: "2000" },
                        { value: "4000", label: "4000" },
                      ]}
                      placeholder="Max Price(SAR)"
                    />
                  </div>
                </div>
              </>
            )}
          />
          <Select
            defaultValue="All"
            size="large"
            className="w-full"
            options={[
              {
                value: "Furnished",
                label: "Furnished",
              },
              {
                value: "NotFurnished",
                label: "Not Furnished",
              },
            ]}
          />
          <Select
            defaultValue="Any"
            size="large"
            className="w-full text-gray-300"
            dropdownMatchSelectWidth={400}
            dropdownRender={() => (
              <>
                <div className="p-4">
                  <div>
                    <div className="flex flex-row gap-2 items-baseline">
                      <FaBed size={18} />
                      <p className="text-lg mb-2">Beds</p>
                    </div>
                    <div className="flex flex-row justify-between">
                      {beds.map((bed) => {
                        return (
                          <button
                            key={bed}
                            className="text-base cursor-pointer hover:bg-gray-200 px-4 py-2"
                          >
                            {bed}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex flex-row gap-2 items-baseline">
                      <FaBath size={17} />
                      <p className="text-lg mb-2">Baths</p>
                    </div>
                    <div className="flex flex-row justify-between">
                      {baths.map((bath) => {
                        return (
                          <button
                            key={bath}
                            className="text-base cursor-pointer hover:bg-gray-200 px-4 py-2"
                          >
                            {bath}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            )}
          />
          <button
            onClick={() => router.push(router.asPath)}
            className="bg-primaryColor cursor-pointer items-center text-center rounded-md hover:bg-primaryHoverColor duration-500 text-white p-4 text-lg"
          >
            <FaFilter size={16} /> <span>Filter</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 mt-4"></div>
    </div>
  );
};

export default PropertiesFilters;
