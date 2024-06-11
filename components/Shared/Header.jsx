import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Drawer, Dropdown, Select, Space } from "antd";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useSession, signOut } from "next-auth/react";
import { useLocale } from "@/hooks/useLocale";
import { TfiAngleDown } from "react-icons/tfi";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const path = usePathname();
  console.log(session);
  const { t } = useLocale();
  const links = [
    { href: "/properties/buy", text: t.navbarBuyLabel },
    { href: "/properties/rent", text: t.navbarRentLabel },
    { href: "/agents", text: t.navbarFindAgentLabel },
  ];
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onClick = ({ key }) => {
    const locale = items[key].locale;
    Cookies.set("NEXT_LOCALE", locale);
    router.push({ pathname, query }, asPath, { locale });
  };

  const handleChangingLanugage = (value) => {
    const locale = value;
    Cookies.set("NEXT_LOCALE", locale);
    router.push({ pathname, query }, asPath, { locale });
  };
  const items = [
    {
      label: t.langauge === "Arabic" ? "الإنجليزية" : "English",
      locale: "en",
      key: "0",
      value: "en",
    },
    {
      label: t.langauge === "Arabic" ? "العربية" : "Arabic",
      locale: "ar",
      key: "1",
      value: "ar",
    },
  ];

  return (
    <div className="z-10 custom-shadow">
      <div className="p-5 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex gap-6 flex-row items-center">
          {/****** Logo ******/}
          <Link href="/">
            <Image
              priority
              alt="Alnafaz"
              src={require("../../public/logo.png")}
              className="h-12 w-16"
            />
          </Link>
          <div className="flex gap-4 max-sm:hidden flex-row items-center [&>a]:text-black">
            {/****** pages ******/}
            {links.map((link) => {
              return (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={`hover:text-primaryColor linkHover ${
                      link.href === path
                        ? "text-primaryColor activeLink font-semibold"
                        : ""
                    } transition-colors duration-500`}
                  >
                    {link.text}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex gap-3 max-sm:hidden flex-row items-center text-gray-300 cursor-pointer">
          <Dropdown
            menu={{
              items,
              onClick,
            }}
          >
            <Space>
              <p className="text-primaryColor text-[15px]">
                {t.langauge === "Arabic" ? "العربية" : "English"}
              </p>
              <TfiAngleDown className="text-primaryColor text-[15px]" />
            </Space>
          </Dropdown>
          {!session ? (
            <>
              <Link
                href="/signIn"
                className="text-primaryColor cursor-pointer border-solid border-[1px] duration-500 border-primaryColor hover:border-primaryColor px-4 py-2 hover:bg-primaryColor transition-all hover:text-white rounded-md"
              >
                {t.loginButtonLabel}
              </Link>
              <Link
                href="/signUp"
                className="bg-primaryColor cursor-pointer  px-4 border-[1px] border-solid border-primaryColor hover:border-primaryHoverColor  py-2 duration-500 hover:bg-primaryHoverColor transition-all text-white rounded-md"
              >
                {t.signUpButtonLabel}
              </Link>
            </>
          ) : (
            <button
              className="bg-primaryColor text-base rounded-full cursor-pointer px-4 border-[1px] border-solid border-primaryColor hover:border-primaryHoverColor  py-2 duration-500 hover:bg-primaryHoverColor transition-all text-white"
              onClick={signOut}
            >
              Sign Out
            </button>
          )}
        </div>
        <div className="sm:hidden">
          <button onClick={showDrawer} className=" cursor-pointer">
            <HiBars3BottomRight size={40} />
          </button>
        </div>
      </div>
      <div className="headerDrawer">
        <Drawer
          placement={t.dir === "rtl" ? "left" : "right"}
          onClose={onClose}
          open={open}
        >
          <div className="flex flex-col justify-between h-full ">
            {/****** pages ******/}
            <div>
              <div className="flex flex-col gap-3">
                {links.map((link) => {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`hover:text-primaryColor py-2 flex flex-row items-center justify-between text-lg  ${
                        link.href === path
                          ? "text-primaryColor font-semibold"
                          : ""
                      } transition-colors duration-500`}
                    >
                      <p>{link.text}</p>
                      {t.dir === "ltr" ? <BsChevronRight /> : <BsChevronLeft />}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="w-full">
              {!session ? (
                <div className="flex flex-col gap-3 mb-4">
                  <Link
                    href="/signIn"
                    className="text-gray-800  text-base text-center cursor-pointer border-solid border-[1px] border-gray-800 duration-500 hover:border-primaryColor px-4 py-2 hover:bg-primaryColor transition-all hover:text-white rounded-md"
                  >
                    {t.loginButtonLabel}
                  </Link>
                  <Link
                    href="/signUp"
                    className="bg-primaryColor text-base cursor-pointer text-center  px-4 border-[1px] border-solid border-primaryColor hover:border-primaryHoverColor  py-2 duration-500 hover:bg-primaryHoverColor transition-all text-white rounded-md"
                  >
                    {t.signUpButtonLabel}
                  </Link>
                </div>
              ) : (
                <button
                  className="bg-primaryColor w-full mb-4 text-base cursor-pointer text-center  px-4 border-[1px] border-solid border-primaryColor hover:border-primaryHoverColor  py-2 duration-500 hover:bg-primaryHoverColor transition-all text-white rounded-md"
                  onClick={signOut}
                >
                  Sign Out
                </button>
              )}
              <Select
                onChange={(value) => handleChangingLanugage(value)}
                value={t.locale}
                size="large"
                className="w-full mb-6"
                options={items}
              />
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
}
