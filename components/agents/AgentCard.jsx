import Image from "next/image";
import Link from "next/link";
import React from "react";

import { IoMail, IoMdMail, IoMdPhonePortrait } from "react-icons/io";
import { motion } from "framer-motion";
import { Button, Popover } from "antd";
const AgencyCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      style={{ flexBasis: 550 }}
      className="flex flex-row flex-grow shadow-xl shadow-gray-100/40 drop-shadow p-4 rounded-xl bg-white"
    >
      <div className="border h-[200px] rounded-xl w-[200px] max-sm:h-[150px] max-sm:w-[150px] flex justify-center items-center  border-gray-200 border-solid ">
        <Image
          alt="property"
          className=" object-cover h-[200px]  w-[200px] max-sm:h-[150px] max-sm:w-[150px]"
          src={require(`../../public/agency-1.png`)}
        />
      </div>

      <div className="px-5 flex flex-col justify-between pb-2 ">
        <div className="text-left">
          <Link
            href="/"
            className="hover:text-primaryColor duration-500 text-2xl text-[#050505]"
          >
            Realhome Estate
          </Link>
          <p className="text-gray-400 mt-1">Modern House Real Estate Agent</p>

          <div className="mt-4 flex flex-row justify-between items-center">
            <div className="text-left">
              <Link
                href="/"
                className="text-gray-400 py-[10px] px-2 text-lg rounded-md border border-solid border-gray-300 hover:bg-primaryColor hover:text-white duration-500 hover:border-primaryColor"
              >
                See Details
              </Link>
            </div>
            <div className="flex gap-2 flex-row items-center">
              <Link
                href="mailto:info@property.com"
                className="border border-solid border-gray-300 px-1 pt-1 rounded-md hover:bg-primaryColor duration-500 hover:border-primaryColor"
              >
                <Popover
                  placement="top"
                  title="mail"
                  content="info@property.com"
                >
                  <IoMdMail
                    className="text-gray-500/50 hover:text-white duration-500"
                    size={30}
                  />
                </Popover>
              </Link>
              <Link
                href="tel:03030571965"
                className="border border-solid border-gray-300 px-1 pt-1 hover:bg-primaryColor rounded-md duration-500 hover:border-primaryColor"
              >
                <Popover placement="top" title="phone" content="03030571965">
                  <IoMdPhonePortrait
                    className="text-gray-500/50 hover:text-white duration-500"
                    size={30}
                  />
                </Popover>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AgencyCard;
