import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SITECONFIG } from "@/config/site";
import SectionLayout from "./shared/SectionLayout";
import { RiPhoneFill } from "react-icons/ri";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { ImFacebook2 } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#141414]">
        <div className="container py-16">
          <div className="md:flex ">
            <div className="grid justify-between it grid-cols-2 gap-8 sm:gap-6 md:grid-cols-5 w-full">
              <div className="col-span-2 mx-auto mb-6 md:mb-0 md:mx-0">
                <Link
                  href="/"
                  className="flex items-center justify-center cursor-pointer md:justify-start"
                >
                  <Image
                    width={200}
                    height={200}
                    src={"/assets/site-logo/logo-white.png"}
                    alt=""
                    className="object-cover"
                  />
                </Link>
                <p className="py-5 text-[18px] font-normal text-center text-white md:text-left max-w-[450px] leading-8">
                  Whether you're seeking thrilling mountain treks, serene beach
                  escapes, or cultural immersions, we offer tailor-made travel
                  experiences that ignite your passion for adventure.
                </p>

                <form className="w-full lg:max-w-[80%] me-auto ">
                  <div className="relative">
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-2.5 lg:p-3 md:ps-12 text-base lg:text-lg text-gray-900  border-gray-300 rounded-lg outline-none bg-white"
                      placeholder="example@gmail.com"
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute end-0 bottom-0 bg-primary hover:text-secondary duration-300  font-medium rounded-e-lg  h-full px-2 md:px-6 text-base lg:text-lg "
                    >
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
              <div className="">
                <h2 className="text-[22px] font-semibold text-white">
                  Quick Links
                </h2>
                <hr className="mt-2 mb-6 w-28  border-primary" />
                <ul className="ml-0 text-white list-none text-[18px] font-medium">
                  {SITECONFIG?.footer?.quick_links?.map((el, index) => (
                    <li className="mb-4" key={index}>
                      <Link href={el.slug} className="hover:underline">
                        {el.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h2 className="text-[22px] font-semibold text-white">
                  Legal Areas
                </h2>
                <hr className="w-32 mt-2 mb-6 border-primary" />
                <ul className="ml-0 text-[18px] font-medium text-white list-none">
                  {SITECONFIG?.footer?.company?.map((el, index) => (
                    <li className="mb-4" key={index}>
                      <Link href={el.slug} className="hover:underline">
                        {el.title}
                      </Link>
                      {/* <p className="hover:underline cursor-pointer text-base">
                        {" "}
                        {el.title}
                      </p> */}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h2 className="font-semibold text-white text-[22px]">
                  Contact us
                </h2>
                <hr className="w-24 mt-2 mb-6 border-primary" />
                <ul className="ml-0 text-[18px] font-medium text-white list-none">
                  <li className="mb-4">
                    <div className="flex items-center gap-x-1">
                      <IoLocationSharp className="size-6 text-primary" />

                      <h3 className="font-semibold text-white text-[20px]">
                        Location
                      </h3>
                    </div>
                    <Link
                      href="https://maps.app.goo.gl/BxuNRwy3CHg2ykCd7"
                      className=" hover:underline duration-300 "
                      target="_blank"
                    >
                      <div className="w-full">
                        <p className="text-base">Tampa, Florida</p>
                      </div>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <div className="flex items-center gap-x-1">
                      <RiPhoneFill className="size-6 text-primary" />

                      <h3 className="font-semibold text-white text-[20px]">
                        Contact
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <Link
                        href="tel:(954)-529-0695"
                        className="hover:underline duration-300 text-base"
                      >
                        {`(954)-529-0695`}
                      </Link>
                    </div>
                  </li>

                  <li className="mb-4">
                    <div className="flex items-center gap-x-1">
                      <MdMarkEmailUnread className="size-6 text-primary" />

                      <h3 className="font-semibold text-white text-[20px]">
                        Email
                      </h3>
                    </div>
                    <div className="flex flex-col gap-px">
                      <Link
                        href="mailto:april@tikitravelagency.com"
                        className="hover:underline duration-300 text-base"
                      >
                        april@tikitravelagency.com
                      </Link>
                      {/* <Link
                        href="mailto:myra@ .com"
                        className="hover:underline duration-300"
                      >
                        myra@ .com
                      </Link> */}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-white opacity-10 sm:mx-auto lg:my-8" />
          <div className="md:flex :items-center sm:justify-between">
            <div className="text-[18px] font-medium text-center text-white">
              © 2024{" "}
              <a href="#/" className="hover:underline text-primary">
                Tiki Travel Agency
              </a>
              . All Rights Reserved.
            </div>

            <div className="text-[18px] font-medium text-center text-white">
              Design & Developed by{" "}
              <a
                href="https://www.bayshorecommunication.com/"
                target="_blank"
                className="font-medium hover:underline text-primary"
              >
                BayShore Communication
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;