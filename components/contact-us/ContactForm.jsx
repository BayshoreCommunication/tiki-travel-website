"use client";
import Link from "next/link";
import React, { useState } from "react";
import RippleButton from "../shared/RippleButton";

const ContactForm = () => {
  return (
    <div>
      <form className="w-full ">
        <div className="md:flex items-start gap-x-3">
          <div className="w-full mb-3">
            <input
              className="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 py-3 placeholder:text-base pl-5 mt-3"
              placeholder="Your Name"
              required
              type="text"
              name="name"
            />
          </div>

          <div className="w-full mb-3">
            <input
              className="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 py-3 placeholder:text-base pl-5 mt-3"
              placeholder="Enter Your Email"
              required
              type="email"
              name="email"
            />
          </div>
        </div>

        <div className="md:flex items-center gap-x-3">
          <div className="w-full mb-3">
            <input
              className="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 py-3 placeholder:text-base pl-5 mt-3"
              placeholder="+1 408 XXX XXXX"
              required
              type="text"
              name="phone"
            />
          </div>

          <div className="w-full mb-3">
            <input
              className="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 py-3 placeholder:text-base pl-5 mt-3"
              placeholder="Subject"
              required
              type="text"
              name="subject"
            />
          </div>
        </div>

        <div className="mb-6">
          <textarea
            rows={4}
            id="message"
            className="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 py-4 placeholder:text-base pl-5 mt-3"
            placeholder="Write Your Message..."
            required
            name="message"
          />
        </div>

        <RippleButton buttonText="Sand Message" />
      </form>
    </div>
  );
};

export default ContactForm;
