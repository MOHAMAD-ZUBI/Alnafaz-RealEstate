import { Input, Radio, Select, Steps, Modal, Upload } from "antd";
import { useState } from "react";
import { BsBuildingGear } from "react-icons/bs";
import { CiCircleMinus, CiCirclePlus, CiStar } from "react-icons/ci";
import { IoIosImages } from "react-icons/io";
import { MdOutlineDoneAll } from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image";
const AdvertisePropertyForm = () => {
  const [current, setCurrent] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [propertyDetails, setPropertyDetails] = useState({
    propertyType: "Apartment",
    bedrooms: 1,
    bathrooms: 1,
    parkingSpaces: 0,
    features: [],
  });
  const onPropertyDetailsFinish = (e) => {
    setPropertyDetails({
      ...propertyDetails,
      propertyType: e.target.value,
    });
  };

  const steps = [
    { name: "details", step: 1 },
    { name: "features", step: 2 },
    { name: "Images", step: 3 },
    { name: "Finish", step: 4 },
  ];

  const onChangeProperty = (propertyName, actionType) => {
    console.log(propertyName, actionType);
    const currentValue = propertyDetails[propertyName];
    const newValue = actionType === "add" ? currentValue + 1 : currentValue - 1;
    if (newValue < 1 && propertyName !== "parkingSpaces") {
      return; // stop removing if the value is less than  1
    } else if (propertyName === "parkingSpaces" && newValue < 0) {
      return;
    }
    setPropertyDetails({
      ...propertyDetails,
      [propertyName]: newValue,
    });
  };
  const next = (index) => {
    const step = steps[index].step;
    setCurrent(step);
    setCurrentStep(step);
  };
  const back = (index) => {
    setCurrentStep(index);
  };

  const onChangeFeatures = (value) => {
    console.log(value);
    setPropertyDetails({
      ...propertyDetails,
      features: value,
    });
  };
  const onChangeStep = (value) => {
    console.log("onChange:", value, current, current >= value);
    if (current >= value) {
      setCurrentStep(value);
      console.log(currentStep);
    }
  };
  const forms = [
    <DetailsContent
      propertyDetails={propertyDetails}
      onChangePropetyType={onPropertyDetailsFinish}
      onChangeProperty={onChangeProperty}
      next={next}
      back={back}
    />,
    <FeaturesContent
      propertyDetails={propertyDetails}
      onChangeFeatures={onChangeFeatures}
      onChangeProperty={onChangeProperty}
      next={next}
      back={back}
    />,
    <ImagesContent next={next} back={back} />,
  ];

  return (
    <div className=" p-4  mb-10 ">
      <Steps
        onChange={onChangeStep}
        className="site-navigation-steps"
        type="navigation"
        current={currentStep}
      >
        <Steps.Step title="Details" icon={<BsBuildingGear />} />
        <Steps.Step title="Features" icon={<CiStar />} />
        <Steps.Step title="Images" icon={<IoIosImages />} />
        <Steps.Step title="Finish" icon={<MdOutlineDoneAll />} />
      </Steps>
      {forms[currentStep]}
    </div>
  );
};
function DetailsContent({
  propertyDetails,
  onChangePropetyType,
  onChangeProperty,
  next,
}) {
  const propertyType = [
    "Apartment",
    "Villa",
    "Farm",
    "Rest House",
    "Compound",
    "Land",
    "Duplex",
    "Whole Building",
    "Hotel/Hotel Apartment",
  ];
  return (
    <div className="py-20 max-w-3xl mx-auto">
      <h2 className="mb-10 text-gray-700">Property Details</h2>
      <div>
        <p>What type of property do you have?</p>
        <Radio.Group
          onChange={onChangePropetyType}
          className="mt-4"
          defaultValue={propertyDetails.propertyType}
          size="large"
        >
          {propertyType.map((type) => (
            <Radio.Button key={type} value={type}>
              {type}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>
      <div className="h-[1px] bg-gray-200  w-full mt-10"></div>
      <div className=" flex flex-col gap-4 mt-8">
        <div className="flex flex-row items-center justify-between">
          <p className="text-lg">Bedrooms</p>
          <div className="flex flex-row gap-10 items-center">
            <button
              onClick={() => onChangeProperty("bedrooms", "remove")}
              className=" cursor-pointer"
            >
              <CiCircleMinus size={35} />
            </button>

            <p className="text-xl">{propertyDetails.bedrooms}</p>
            <button
              onClick={() => onChangeProperty("bedrooms", "add")}
              className=" cursor-pointer"
            >
              <CiCirclePlus size={35} />
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <p className="text-lg">Bathrooms</p>
          <div className="flex flex-row gap-10 items-center">
            <button
              onClick={() => onChangeProperty("bathrooms", "remove")}
              className=" cursor-pointer"
            >
              <CiCircleMinus size={35} />
            </button>

            <p className="text-xl">{propertyDetails.bathrooms}</p>
            <button
              onClick={() => onChangeProperty("bathrooms", "add")}
              className=" cursor-pointer"
            >
              <CiCirclePlus size={35} />
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <p className="text-lg">Parking spaces</p>
          <div className="flex flex-row gap-10 items-center">
            <button
              onClick={() => onChangeProperty("parkingSpaces", "remove")}
              className=" cursor-pointer"
            >
              <CiCircleMinus size={35} />
            </button>

            <p className="text-xl">{propertyDetails.parkingSpaces}</p>
            <button
              onClick={() => onChangeProperty("parkingSpaces", "add")}
              className=" cursor-pointer"
            >
              <CiCirclePlus size={35} />
            </button>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-gray-200  w-full mt-10"></div>
      <div className="mt-10">
        <p className="mb-2">{propertyDetails.propertyType}'s size (optional)</p>
        <Input placeholder="sqm" size="large" className="h-[50px]" />
      </div>
      <button
        onClick={() => next(0)}
        className="bg-primaryColor float-right mt-4 p-3 cursor-pointer hover:bg-primaryHoverColor duration-500 rounded-md text-white text-base"
      >
        Save & Continue
      </button>
    </div>
  );
}
function FeaturesContent({ next, back, onChangeFeatures, propertyDetails }) {
  const features = [
    {
      label: "Alarm system",
      value: "AlarmSystem",
    },
    {
      label: "Broadband internet available",
      value: "BroadbandInternetAvailable",
    },
    {
      label: "Dishwasher",
      value: "Dishwasher",
    },
    {
      label: "Balcony",
      value: "Balcony",
    },
    {
      label: "Furnished",
      value: "Furnished",
    },
    {
      label: "Built-in wardrobes",
      value: "Built-inWardrobes",
    },
  ];
  return (
    <div className="py-20 max-w-3xl mx-auto">
      <h2 className="mb-10 text-gray-700">Property features (optional)</h2>
      <div>
        <p>
          Make your property easier to find by selecting all the features below
          that apply.
        </p>
        <div className="mt-10">
          <Select
            mode="multiple"
            allowClear
            style={{
              width: "100%",
            }}
            size="large"
            onChange={onChangeFeatures}
            defaultValue={propertyDetails.features}
            placeholder="Property features (optional)"
            options={features}
          />
        </div>
      </div>
      <div className="h-[1px] bg-gray-200  w-full mt-10"></div>
      <div>
        <button
          onClick={() => next(1)}
          className="bg-primaryColor float-right mt-4 p-3 cursor-pointer hover:bg-primaryHoverColor duration-500 rounded-md text-white text-base"
        >
          Save & Continue
        </button>
        <button
          onClick={() => back(0)}
          className="border border-solid text-gray-400 border-gray-400 hover:border-gray-600 hover:text-gray-600 float-left mt-4 py-3 px-10 cursor-pointer duration-500 rounded-md text-base"
        >
          Previous
        </button>
      </div>
    </div>
  );
}
function ImagesContent({ next, back }) {
  const [fileList, setFileList] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);

  function handleFileChange(event) {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  }
  const [images, setImages] = useState([]);
  const onChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImages([...images, { file, url: imageUrl }]);
  };
  function handleDelete(index) {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  }

  return (
    <div className="py-20 max-w-3xl mx-auto body">
      <h2 className="mb-10 text-gray-700">Photo gallery</h2>
      <div>
        <p>
          Your photos will appear on your listing in the order you choose. Drag
          and drop uploaded images to re-order them.
        </p>
        <div className="mt-10 flex imagesContainer flex-row gap-x-2  flex-wrap">
          {images.map((image, index) => (
            <div className="imagesContainer" key={index}>
              <Image
                width={128}
                height={128}
                src={image.url}
                alt={`Uploaded image ${index}`}
              />
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))}
          <motion.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, type: "spring" }}
            className="border relative border-[#d9d9d9] hover:border-primaryColor transform transition-transform duration-500 rounded-[8px] border-dashed h-32 w-32"
          >
            <input
              type="file"
              id="file-input"
              accept="image/jpeg, image/png, image/webp"
              autoComplete="off"
              onChange={onChange}
              className="hidden"
            />
            <label
              className="cursor-pointer absolute flex flex-col justify-center items-center h-32 w-32 "
              htmlFor="file-input"
            >
              Upload Image
            </label>
          </motion.div>
        </div>
      </div>
      <div className="h-[1px] bg-gray-200  w-full mt-10"></div>
      <div>
        <button
          onClick={() => next(1)}
          className="bg-primaryColor float-right mt-4 p-3 cursor-pointer hover:bg-primaryHoverColor duration-500 rounded-md text-white text-base"
        >
          Save & Continue
        </button>
        <button
          onClick={() => back(0)}
          className="border border-solid text-gray-400 border-gray-400 hover:border-gray-600 hover:text-gray-600 float-left mt-4 py-3 px-10 cursor-pointer duration-500 rounded-md text-base"
        >
          Previous
        </button>
      </div>
    </div>
  );
}

export default AdvertisePropertyForm;
