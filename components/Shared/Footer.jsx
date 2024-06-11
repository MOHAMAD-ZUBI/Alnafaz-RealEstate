import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { SocialIcon } from "react-social-icons";
import { useLocale } from "@/hooks/useLocale";
const Footer = () => {
  const { t } = useLocale();
  return (
    <footer className="bg-[#1b1d21]">
      <div>
        <div className="max-w-6xl py-16 px-4  gap-x-10 mx-auto flex justify-between flex-row max-md:flex-wrap max-sm:justify-center">
          <div style={{ flexBasis: 300 }} className="p-1">
            <div>
              <Link href="/" className="flex flex-row items-center">
                <Image
                  alt="Alnafaz"
                  priority
                  src={require("../../public/logo.png")}
                  className="h-12 w-16"
                />
                <h3 className="text-white text-2xl">{t.websiteTitle}</h3>
              </Link>
            </div>
            <div className="mt-6">
              <p className="text-[#ffffff80] font-normal tracking-wide leading-[25px]">
                Discover your perfect property with our real estate website
              </p>
              <p className="text-[#ffffff80] mt-4 font-normal tracking-wide leading-[25px]">
                Trust us to help you find your dream home and make the world a
                better place, one property at a time.
              </p>
            </div>
          </div>
          <div style={{ flexBasis: 300 }} className="p-3">
            <div>
              <h3 className="text-white text-2xl">{t.quickLinksLabel}</h3>
            </div>
            <div className="flex flex-col gap-y-5 mt-6 [&_a]:text-[#ffffff80] [&_a]:text-lg">
              <Link className="hover:text-primaryColor duration-500" href="/">
                {t.navbarBuyLabel}
              </Link>
              <Link className="hover:text-primaryColor duration-500" href="/">
                {t.navbarRentLabel}
              </Link>
              <Link className="hover:text-primaryColor duration-500" href="/">
                {t.navbarFindAgentLabel}
              </Link>
            </div>
          </div>
          <div style={{ flexBasis: 300 }} className="p-3">
            <div>
              <h3 className="text-white text-2xl">{t.companyLabel}</h3>
            </div>
            <div className="flex flex-col gap-y-5 mt-6 [&_a]:text-[#ffffff80] [&_a]:text-lg">
              <Link className="hover:text-primaryColor duration-500" href="/">
                {t.aboutPageLabel}
              </Link>
              <Link className="hover:text-primaryColor duration-500" href="/">
                {t.contactSupportLabel}
              </Link>
              <Link className="hover:text-primaryColor duration-500" href="/">
                {t.privacyPolicyLabel}
              </Link>
              <Link className="hover:text-primaryColor duration-500" href="/">
                {t.termsConditionsLabel}
              </Link>
            </div>
          </div>
          <div style={{ flexBasis: 300 }} className="p-3">
            <div>
              <h3 className="text-white text-2xl">{t.contactsLabel}</h3>
            </div>
            <div className="flex flex-col gap-y-5 mt-6 [&_a]:text-[#ffffff80] [&_a]:text-lg">
              {/***** Social Icons *****/}
              <div className="flex flex-row gap-x-4 ">
                <SocialIcon fgColor="white" url="https://twitter.com/" />
                <SocialIcon fgColor="white" url="https://instagram.com/" />
                <SocialIcon fgColor="white" url="https://facebook.com/" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center bg-[#272a2f] gap-x-2  py-10 text-[#ffffff80]">
          <Link
            href="/"
            className="text-[#ffffff80] hover:text-primaryColor duration-500"
          >
            Alnafaz
          </Link>
          <span>©</span>
          <p>2023 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
