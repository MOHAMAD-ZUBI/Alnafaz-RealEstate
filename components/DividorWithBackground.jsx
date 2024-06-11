const DividorWithBackground = ({ title }) => {
  return (
    <div
      id="dividorBackgroundImage"
      className=" w-full !h-[400px] text-center flex flex-col justify-center align-middle items-center bg-[#9ccfcfa1]"
    >
      <h1 className="text-white text-5xl">{title}</h1>
    </div>
  );
};

export default DividorWithBackground;
