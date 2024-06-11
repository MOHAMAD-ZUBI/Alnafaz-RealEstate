import { useLocale } from "@/hooks/useLocale";
import { Input, Modal, Select } from "antd";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";
import { HiLocationMarker } from "react-icons/hi";
import {
  bathrooms,
  landSizeOption,
  propetyBuyPrices,
  propetyRentPrices,
  furnishedAr,
  furnishedEn,
  propertyTypeAr,
  propertyTypeEn,
  roomsAr,
  roomsEn,
  anyOptionAr,
  anyOptionEn,
} from "@/filtersDefaultValues";
import axios from "axios";
const SearchBoxV2 = () => {
  const { t } = useLocale();
  const router = useRouter();
  const [defaultFilters, setDefaultFilters] = useState({
    buyOrRent: "buy",
    propertyType: "all",
    minPrice: "any",
    maxPrice: "any",
    rooms: "any",
    bathrooms: "any",
    minLandSize: "any",
    maxLandSize: "any",
    furnished: "all",
  });
  const [filters, setFilters] = useState({
    buyOrRent: "buy",
    propertyType: "all",
    minPrice: "any",
    maxPrice: "any",
    rooms: "any",
    bathrooms: "any",
    minLandSize: "any",
    maxLandSize: "any",
    furnished: "all",
  });

  const [appliedFilters, setAppliedFilters] = useState({});
  const handleChangingFilters = (property, value) => {
    console.log(value);
    setFilters({
      ...filters,
      [property]: value,
    });
  };

  //*apply filters
  const handleApplyingFilters = () => {
    if (activeTab !== filters.buyOrRent) {
      setActiveTab(filters.buyOrRent);
    }
    const newFilters = Object.entries(filters).reduce((acc, [key, value]) => {
      if (
        value !== "any" &&
        value !== "buy" &&
        value !== "rent" &&
        value !== "all"
      ) {
        return { ...acc, [key]: value };
      }
      return acc;
    }, {});
    setAppliedFilters(newFilters);
    setOpen(false);
  };

  //*clear filters
  const handleClearingFilters = () => {
    setActiveTab("buy");
    setFilters(defaultFilters);
    setAppliedFilters({});
  };

  //* handles search queries and filters and navigate to search page
  const handleSearch = () => {
    if (seledtedLocation.i.length > 1) {
      appliedFilters.i = seledtedLocation.i;
    }
    router.push({
      pathname: `/properties/${activeTab}`,
      query: appliedFilters,
    });
  };

  //*state for active tab, default to buy
  const [activeTab, setActiveTab] = useState("buy");
  //*tabs for the search box
  const tabs = [
    {
      value: "buy",
      label: t.navbarBuyLabel,
    },
    {
      value: "rent",
      label: t.navbarRentLabel,
    },
  ];

  //*location input state
  const [searchInput, setSearchInput] = useState("");
  const [serachResults, setSearchResults] = useState(null);
  const [seledtedLocation, setSeledtedLocation] = useState({
    searchString: "",
    i: "",
    backupId: "",
  });
  const searchInputRef = useRef(null);
  const handleSearchInput = async (event) => {
    setSearchInput(event.target.value);
    const results = await axios.get(
      `https://backend.alnafaz.com/api/neighborhoods/search?q=${event.target.value}`
    );
    setSearchResults(results.data);
  };
  useEffect(() => {
    if (searchInput !== seledtedLocation.searchString) {
      setSeledtedLocation((prevState) => ({
        ...prevState,
        i: "",
      }));
    } else {
      setSeledtedLocation((prevState) => ({
        ...prevState,
        i: prevState.backupId,
      }));
    }
  }, [searchInput]);

  //*handle opening and closing location suggestions dropdown
  const [searchDropdown, setSearchDropdown] = useState(false);

  const handleSearchDropdown = () => {
    setSearchDropdown(true);
  };
  const handleCloseSearchDropdown = () => {
    setTimeout(() => {
      setSearchDropdown(false);
    }, 100);
  };

  //*filter modal state
  const [open, setOpen] = useState(false);

  const anyOption = t.locale === "ar" ? anyOptionAr : anyOptionEn;

  return (
    <div
      className="bg-white relative rounded-3xl p-8 max-w-4xl mx-auto  w-full"
      id="heroSearchBox"
    >
      {/******* ** Tabs ** *******/}
      <div className="flex flex-row justify-between">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`cursor-pointer w-full border-gray-300 border-solid border-t-0 border-l-0 border-r-0 border-b-2 transition-all duration-500 text-center pb-3 ${
              activeTab === tab.value ? "active-tab" : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/******* ** Search box ** *******/}
      <div>
        <div className="flex flex-row mt-6 max-sm:flex-col  gap-x-4 overflow-hidden bg-white w-full">
          <Input
            ref={searchInputRef}
            onFocus={() => handleSearchDropdown()}
            onBlur={() => handleCloseSearchDropdown()}
            bordered={false}
            value={searchInput}
            allowClear
            onChange={handleSearchInput}
            prefix={
              <BsSearch
                className={`text-gray-400 ${t.dir === "rtl" ? "ml-2" : "mr-2"}`}
              />
            }
            placeholder={t.heroLocationInputPlaceholder}
            size="large"
            className="!h-[55px] hover:bg-gray-50 !pl-5 border-none "
          />
          <div className="flex flex-row gap-x-3 max-sm:mt-6">
            <button
              onClick={() => setOpen(true)}
              className="h-[55px] justify-center  flex flex-row max-sm:w-full items-center align-middle px-6 gap-x-2 border rounded-full border-solid text-base cursor-pointer"
            >
              <GiSettingsKnobs className=" rotate-90" size={20} />
              {t.filters}
            </button>
            <button
              onClick={handleSearch}
              className="h-[55px] px-8 max-sm:w-full rounded-full bg-primaryColor hover:bg-primaryHoverColor duration-500 text-base text-white cursor-pointer"
            >
              {t.searchButton}
            </button>
          </div>
        </div>
      </div>
      {/******* ** Search box autocomplete ** *******/}
      {searchDropdown && searchInput && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="p-8  left-0 top-40 custom-shadow z-50 rounded-b-3xl bg-gray-50 w-full customs-shadow absolute"
        >
          <span className="text-sm"></span>
          <div className="flex flex-col gap-y-3 mt-2">
            {serachResults &&
              serachResults?.map((results, i) => {
                if (i > 6) {
                  return;
                }
                const searchString = () => {
                  let search = "";
                  if (results.nameAr || results.nameEn) {
                    search = results.nameAr || results.nameEn;
                  }
                  if (results?.city_Id) {
                    search =
                      search +
                      " " +
                      `(${results.city_Id.nameAr || results.city_Id.nameEn})`;
                  }
                  return search;
                };
                return (
                  <button
                    onClick={() => {
                      setSearchInput(searchString());
                      setSeledtedLocation((prevState) => ({
                        ...prevState,
                        searchString: searchString(),
                        i: results._id,
                        backupId: results._id,
                      }));
                      console.log(searchString());
                    }}
                    className="flex flex-row w-full cursor-pointer items-center gap-x-4"
                  >
                    <div className="bg-primaryColor/30 px-2 py-1 rounded-md">
                      <HiLocationMarker className="text-gray-600" size={20} />
                    </div>
                    <div>
                      <p className="text-base">{searchString()}</p>
                    </div>
                  </button>
                );
              })}
          </div>
        </motion.div>
      )}

      {/******* ** filters modal ** *******/}
      <Modal
        title={t.filters}
        centered
        open={open}
        className="my-2 max-sm:!m-0 filtersModal max-sm:!h-screen max-sm:w-screen max-sm:!p-0"
        footer={null}
        onCancel={() => setOpen(false)}
        width={700}
      >
        {/******* ** filters modal tabs START ** *******/}
        <div className="flex flex-row justify-between">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => handleChangingFilters("buyOrRent", tab.value)}
              className={`cursor-pointer text-[18px] w-full border-gray-300 border-solid border-t-0 border-l-0 border-r-0 border-b-2 transition-all duration-500 text-center pb-3 ${
                filters.buyOrRent === tab.value ? "active-tab" : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/******* ** filters modal tabs END ** *******/}
        {/******* ** filters START ** *******/}
        <div className="mt-6">
          {/******* filters (property type) *******/}
          <div>
            <h3 className="pb-2">{t.heroPropertyTypeLabel}</h3>
            <Select
              value={filters.propertyType}
              onChange={(value) => handleChangingFilters("propertyType", value)}
              size="large"
              className="w-full"
              options={t.locale === "ar" ? propertyTypeAr : propertyTypeEn}
            />
          </div>
          <hr className="my-5 h-[1px] border-none bg-gray-500/20" />
          {/******* filters (prices) *******/}
          <div className="flex flex-row max-sm:flex-col gap-2 ">
            <div className="w-full">
              <h3 className="pb-2">{t.minPriceFilter}</h3>
              <Select
                onChange={(value) => handleChangingFilters("minPrice", value)}
                size="large"
                value={filters.minPrice}
                className="w-full"
                options={
                  filters.buyOrRent === "buy"
                    ? [anyOption, ...propetyBuyPrices]
                    : [anyOption, ...propetyRentPrices]
                }
              />
            </div>
            <div className="w-full">
              <h3 className="pb-2">{t.maxPriceFilter}</h3>
              <Select
                size="large"
                className="w-full"
                onChange={(value) => handleChangingFilters("maxPrice", value)}
                value={filters.maxPrice}
                options={
                  filters.buyOrRent === "buy"
                    ? [anyOption, ...propetyBuyPrices]
                    : [anyOption, ...propetyRentPrices]
                }
              />
            </div>
          </div>
          <hr className="my-5 h-[1px] border-none bg-gray-500/20" />
          {/******* filters (rooms) *******/}
          <div className="flex flex-row max-sm:flex-col gap-2 ">
            <div className="w-full">
              <h3 className="pb-2">{t.roomsFilter}</h3>
              <Select
                size="large"
                className="w-full"
                onChange={(value) => handleChangingFilters("rooms", value)}
                value={filters.rooms}
                options={t.locale === "ar" ? roomsAr : roomsEn}
              />
            </div>
            <div className="w-full">
              <h3 className="pb-2">{t.bathroomsFilter}</h3>
              <Select
                size="large"
                className="w-full"
                onChange={(value) => handleChangingFilters("bathrooms", value)}
                value={filters.bathrooms}
                options={[anyOption, ...bathrooms]}
              />
            </div>
          </div>
          <hr className="my-5 h-[1px] border-none bg-gray-500/20" />
          {/******* filters (land size) *******/}
          <div>
            <h3 className="pb-3 text-gray-600 ">{t.landSizeFilterLabel}</h3>
            <div className="flex flex-row max-sm:flex-col gap-2">
              <div className="w-full">
                <h3 className="pb-2 text-gray-600 text-base">
                  {t.landSizeMinFilter}
                </h3>
                <Select
                  size="large"
                  className="w-full"
                  options={[anyOption, ...landSizeOption]}
                  onChange={(value) =>
                    handleChangingFilters("minLandSize", value)
                  }
                  value={filters.minLandSize}
                />
              </div>
              <div className="w-full">
                <h3 className="pb-2 text-gray-600 text-base">
                  {t.landSizeMaxFilter}
                </h3>
                <Select
                  size="large"
                  className="w-full"
                  options={[anyOption, ...landSizeOption]}
                  onChange={(value) =>
                    handleChangingFilters("maxLandSize", value)
                  }
                  value={filters.maxLandSize}
                />
              </div>
            </div>
          </div>
          <hr className="my-5 h-[1px] border-none bg-gray-500/20" />
          {/******* filters (Furnished) *******/}
          <div>
            <h3 className="pb-2">{t.heroFurnishedLabel}</h3>
            <Select
              onChange={(value) => handleChangingFilters("furnished", value)}
              value={filters.furnished}
              size="large"
              className="w-full"
              options={t.locale === "ar" ? furnishedAr : furnishedEn}
            />
          </div>
          <hr className="my-5 h-[1px] border-none bg-gray-500/20" />
          <div className="flex flex-ro justify-end gap-x-3 max-sm:mt-6">
            <button
              onClick={() => handleClearingFilters()}
              className="h-[55px] justify-center  flex flex-row max-sm:w-full items-center align-middle px-6 gap-x-2 border rounded-full border-solid text-base cursor-pointer"
            >
              {t.clearFilters}
            </button>
            <button
              onClick={() => handleApplyingFilters()}
              className="h-[55px] px-8 max-sm:w-full rounded-full bg-primaryColor hover:bg-primaryHoverColor duration-500 text-base text-white cursor-pointer"
            >
              {t.applyFilters}
            </button>
          </div>
        </div>
        {/******* ** filters END ** *******/}
      </Modal>
    </div>
  );
};

export default SearchBoxV2;
