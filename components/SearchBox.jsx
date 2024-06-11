import { useLocale } from "@/hooks/useLocale";
import { AutoComplete, Input, Select } from "antd";
import React, { useState } from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { TfiAngleDown, TfiAngleUp, TfiSearch } from "react-icons/tfi";

const SearchBox = () => {
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
    <div
      className="bg-white rounded-3xl p-8 max-w-6xl  w-full"
      id="heroSearchBox"
    >
      <div className="flex items-center flex-row justify-evenly gap-4 flex-wrap [&_p]:text-lg">
        <div className="flex-grow">
          <p className="pb-2">{t.heroLocationLabel}</p>
          <Input
            size="large"
            placeholder={t.heroLocationInputPlaceholder}
            prefix={<TfiSearch />}
          />
        </div>
        <div className="flex-grow">
          <p className="pb-2">{t.heroPropertyTypeLabel}</p>
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
        </div>
        <div className="flex-grow">
          <p className="pb-2">{t.heroPriceRangeLabel}</p>
          <Select
            value={t.heroPriceRangeInputPlaceholder}
            size="large"
            className=" w-full"
            dropdownMatchSelectWidth={300}
            dropdownRender={() => (
              <>
                <div className="flex flex-row flex-wrap gap-2 p-4">
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
        </div>
        <div className="max-md:w-full">
          <button className="bg-primaryColor max-md:w-full  max-sm:mt-2  text-white cursor-pointer rounded-md py-6 px-10">
            {t.searchButton}
          </button>
        </div>
      </div>
      {expand && (
        <div className="flex mt-3 items-center flex-row justify-evenly gap-4 flex-wrap [&_p]:text-lg">
          <div className="flex-grow">
            <p className="pb-2">{t.heroFurnishedLabel}</p>
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
          </div>
          <div className="flex-grow">
            <p className="pb-2">Beds & Baths</p>
            <Select
              defaultValue="Any"
              size="large"
              className="w-full"
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
          </div>
        </div>
      )}
      <button
        onClick={() => setExpand(!expand)}
        className="mt-3 text-sm cursor-pointer flex flex-row items-center gap-2"
      >
        <span className="text-primaryColor">{t.advancedSearchLabel}</span>
        {!expand ? (
          <TfiAngleDown className="text-primaryColor" />
        ) : (
          <TfiAngleUp className="text-primaryColor" />
        )}
      </button>
    </div>
  );
};

export default SearchBox;
