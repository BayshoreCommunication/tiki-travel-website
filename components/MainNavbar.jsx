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
      { title: "Contact Us", slug: "/contact" },
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
      console.log("cleanup");
    };
  }, [handleScroll]);
  useEffect(() => {
    window.onscroll = function () {
      //console.log(window.scrollY);
      if (window.scrollY >= 60) {
        document.querySelector(".navbar").classList.add("top-2");
        document.querySelector(".navbar").classList.remove("top-24");
        if (window.scrollY == 0) {
          document.querySelector(".navbar").classList.add("top-24");
        }
      }
      if (window.scrollY < 60) {
        document.querySelector(".navbar").classList.remove("top-2");
        document.querySelector(".navbar").classList.add("top-24");
        if (window.scrollY == 0) {
          document.querySelector(".navbar").classList.add("top-24");
        }
      }
      if (window.scrollY >= 60) {
        document.querySelector(".xlnavbar").classList.add("top-2");
        document.querySelector(".xlnavbar").classList.remove("top-32");
        if (window.scrollY == 0) {
          document.querySelector(".xlnavbar").classList.add("top-32");
        }
      }
      if (window.scrollY < 60) {
        document.querySelector(".xlnavbar").classList.remove("top-2");
        document.querySelector(".xlnavbar").classList.add("top-32");

        if (window.scrollY == 0) {
          document.querySelector(".xlnavbar").classList.add("top-32");
        }
      }
    };
  }, []);

  return (
    <section className={"relative z-50"}>
      <div className="bg-primary ">
        <div className="bg-white hidden md:block pt-2 md:pt-5 md:py-5 h-[171px] xl:h-[206px]">
          <div className="flex flex-col gap-y-3  items-center container  justify-center">
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

            <div className="px-12 py-3 border rounded-full fixed bg-white xlnavbar transition-all ease-in-out duration-0 hidden xl:block top-32 ">
              <div className="flex items-center justify-stretch gap-y-10 gap-x-8  xl:gap-x-8">
                {menuItems.map((el) => (
                  <Link
                    key={el.slug}
                    href={el.slug}
                    className={`nav-item text-base md:text-lg font-semibold text-white ${pathname === el.slug ? "!text-primary border-b-2 border-primary" : ""} hover:text-primary`}
                  >
                    {el.title}{" "}
                  </Link>
                ))}
              </div>
            </div>
            <div className="px-12 py-3 border rounded-full fixed bg-white navbar transition-all ease-in-out duration-0   xl:hidden top-24">
              <div className="flex items-center justify-stretch gap-y-10 gap-x-8  xl:gap-x-8">
                {menuItems.map((el) => (
                  <Link
                    key={el.slug}
                    href={el.slug}
                    className={`nav-item text-base md:text-lg font-semibold text-white ${pathname === el.slug ? "!text-primary border-b-2 border-primary" : ""} hover:text-primary`}
                  >
                    {el.title}{" "}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden fixed top-0 w-full  border-b  z-[50]">
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
