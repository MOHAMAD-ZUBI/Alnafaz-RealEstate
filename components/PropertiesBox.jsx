import Properties from "./Properties";
import PropertiesFilters from "./PropertiesFilters";

const PropertiesBox = () => {
  return (
    <div className="bg-white">
      <div className="max-w-6xl my-12 mx-auto">
        <div className=" mx-4">
          <div className="flex flex-row max-lg:flex-col gap-x-10">
            {/*** Filters ***/}
            <div style={{ flexBasis: 300 }} className="w-full">
              <PropertiesFilters />
            </div>
            {/*** Properties ***/}
            <div style={{ flexBasis: 800 }} className="w-full">
              <Properties />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesBox;
