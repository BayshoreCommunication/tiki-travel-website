"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { LuUser2 } from "react-icons/lu";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Orbitron } from "next/font/google";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

import Image from "next/image";
import { areaspracticeData } from "@/config/data";

const orbitron = Orbitron({ subsets: ["latin"] });

// Debounce function to limit the rate of calling the handleScroll function
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
};

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [navbarColor, setNavbarColor] = useState(false);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const menuItems = useMemo(
    () => [
      { title: "Home", slug: "/" },
      { title: "About Us", slug: "/about" },
      { title: "Vacation Destinations", slug: "/vacation-destinations" },
      { title: "Blog", slug: "/blog" },
      { title: "Contact Us", slug: "/contact-us" },
    ],
    []
  );

  const navLogoList = useMemo(
    () => [
      { title: "Home", slug: "/" },
      { title: "About Us", slug: "/about" },
      { title: "Vacation Destinations", slug: "" },
      { title: "Blog", slug: "" },
      { title: "Contact Us", slug: "" },
    ],
    []
  );

  const handleScroll = useCallback(
    debounce(() => {
      setNavbarColor(window.scrollY >= 100);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const setPathSlug = areaspracticeData?.some(
    (el) => pathname === `/practice-areas/${el?.slug}`
  );

  return (
    <section className={"relative z-50 py-2 lg:py-8"}>
      <div className="bg-primary">
        <div className="bg-white hidden md:block">
          <div className="flex flex-col gap-y-3 lg:gap-y-5 items-center container  justify-center">
            <div className=" flex items-center gap-x-10 2xl:gap-x-16">
              <Link href={"/"}>
                <Image
                  src="/assets/site-logo/logo.png"
                  alt="footer logo"
                  width={500}
                  height={500}
                  className="cursor-pointer w-[100px] xl:w-[180px]  h-auto mt-2 mb-2"
                />
              </Link>
            </div>

            <div className="px-12 py-4 border rounded-full">
              <div className="flex items-center justify-stretch gap-y-10  xl:gap-x-8">
                {menuItems.map((el) => (
                  <Link
                    key={el.slug}
                    href={el.slug}
                    className={`nav-item text-base md:text-lg font-semibold text-white ${pathname === el.slug ? "!text-primary border-b-2 border-primary" : ""} hover:text-primary`}
                  >
                    {el.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden ">
          <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className={`!mx-0 !px-0 pb-0 pt-0  md:pb-3 md:pt-4 bg-white`}
          >
            <NavbarContent>
              <NavbarBrand>
                <Link href="/">
                  <Image
                    src="/assets/site-logo/logo.png"
                    alt="footer logo"
                    width={500}
                    height={500}
                    className="w-[100px] h-auto"
                  />
                </Link>
              </NavbarBrand>
              <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="md:hidden text-secondary"
              />
            </NavbarContent>

            <NavbarMenu className="overflow-hidden">
              {menuItems.map((el, index) => (
                <NavbarMenuItem key={el.slug} className="flex flex-row">
                  <Link
                    className={`w-full text-secondary text-center !text-xl font-medium py-1 ${pathname === el.slug ? "!text-primary" : ""} ${index === 0 ? "mt-6" : ""}`}
                    href={el.slug}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {el.title}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </Navbar>
        </div>
      </div>
    </section>
  );
};

export default React.memo(MainNavbar);
