import Link from "next/link";
import React from "react";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import ContactForm from "./ContactForm";
import { FaPinterestP } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="py-10 lg:py-20">
      <div className="container">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold text-center mb-4 lg:mb-10">
            Get In Touch
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
          <div className="w-full lg:w-[30%] bg-[#F2F2F2] p-6 lg:p-10 rounded-lg flex flex-col justify-between ">
            <div>
              <div>
                <h4 className="text-2xl lg:text-3xl mb-2 font-semibold">
                  Contact Information
                </h4>
                <p className="text-base md:text-lg">
                  Make your travel plans today! Schedule a call for more
                  information and start planning your adventure.
                </p>
              </div>
              <div className="flex flex-col gap-4 my-8">
                <div className="hover:text-primary duration-300 flex items-center gap-1 hover:underline">
                  <IoCall />
                  <Link href="tel:9545290695">(954)-529-0695</Link>
                </div>
                <div className="hover:text-primary duration-300 flex items-center gap-1 hover:underline">
                  <IoMail />
                  <a href="mailto:april@tikitravelagency.com">
                    april@tikitravelagency.com
                  </a>
                </div>
                <div className="hover:text-primary duration-300 flex items-center gap-1  hover:underline">
                  <IoLocation />
                  <Link href="https://maps.app.goo.gl/RF4AXnruacm9HQjUA">
                    Tampa, Florida
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center gap-3 pt-10">
              <Link
                href="https://www.facebook.com/people/Tiki-Travel-Agency/61555648056008/ "
                target="_blank"
                className="inline-block p-3  rounded-full bg-transparent border border-gray-300 hover:text-primary hover:border-primary   duration-300"
              >
                <FaFacebookF className="size-5" />
              </Link>
              {/* <Link
                href="https://www.linkedin.com/company/ "
                target="_blank"
                className="inline-block p-3  rounded-full bg-transparent border border-gray-300 hover:text-primary hover:border-primary   duration-300"
              >
                <FaLinkedinIn className="size-5" />
              </Link> */}
              <Link
                href="https://www.instagram.com/tikitravelagency/?igsh=anpaYWJtbXNnNxpk&utm_source=qr# "
                target="_blank"
                className="inline-block p-3  rounded-full bg-transparent border border-gray-300 hover:text-primary hover:border-primary   duration-300"
              >
                <FaInstagram className="size-5" />
              </Link>
              <Link
                href="https://x.com/tikitravelagenc"
                target="_blank"
                className="inline-block p-3  rounded-full bg-transparent border border-gray-300 hover:text-primary hover:border-primary   duration-300"
              >
                <FaXTwitter className="size-5" />
              </Link>

              <Link
                href="https://www.youtube.com/@TikiTravelAgency "
                target="_blank"
                className="inline-block p-3  rounded-full bg-transparent border border-gray-300 hover:text-primary hover:border-primary duration-300"
              >
                <FaYoutube className="size-5" />
              </Link>
              <Link
                href="https://www.pinterest.com/tikitravelagency/ "
                target="_blank"
                className="inline-block p-3  rounded-full bg-transparent border border-gray-300 hover:text-primary hover:border-primary duration-300"
              >
                <FaPinterestP className="size-5" />
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-[70%] bg-[#F2F2F2] p-6 lg:p-10 rounded-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
