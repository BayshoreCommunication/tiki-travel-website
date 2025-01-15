"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import RippleButton from "../shared/RippleButton";
import { Button } from "@nextui-org/react";

const EmailSubscription = () => {
  const [formData, setFormData] = useState({
    // name: "",
    email: "",
    // phone: "",
    // subject: "",
    // message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "/api/subscribe";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
        }),
      });
    } catch (error) {
      //console.error("Error:", error);
    }
  };

  return (
    <form className="w-full lg:max-w-[80%] me-auto " onSubmit={handleSubmit}>
      <div className="relative">
        <input
          id="default-search"
          className="block w-full p-2.5 lg:p-3 md:ps-12 text-base lg:text-lg text-gray-900  border-gray-600 rounded-lg outline-none bg-white"
          placeholder="example@gmail.com"
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="text-white absolute end-0 bottom-0 bg-primary  duration-300  font-medium rounded-e-lg  h-full px-2 md:px-6 text-base lg:text-lg "
        >
          Subscribe Now
        </button>
      </div>
    </form>
  );
};
export default EmailSubscription;
