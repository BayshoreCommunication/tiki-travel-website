"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_pt0gbu7";
    const templateID = "template_85q3qpf";
    const publicKey = "_Q-V8SvAWpfUi7wCp";

    // Ensure phone is included in the data sent to EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setLoading(false);
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Your message has been sent successfully.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Error Sending Message",
        text: "Something went wrong. Please try again later.",
      });
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="md:flex items-start gap-x-3">
          <div className="w-full mb-3">
            <input
              className="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 py-3 placeholder:text-base pl-5 mt-3"
              placeholder="Your Name"
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="w-full mb-3">
            <input
              className="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 py-3 placeholder:text-base pl-5 mt-3"
              placeholder="Enter Your Email"
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="md:flex items-center gap-x-3">
          <div className="w-full mb-3">
            <input
              className="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 py-3 placeholder:text-base pl-5 mt-3"
              placeholder="+1 23456789"
              required
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="w-full mb-3">
            <input
              className="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 py-3 placeholder:text-base pl-5 mt-3"
              placeholder="Subject"
              required
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button
          className="text-white font-medium text-md md:text-lg bg-primary hover:bg-secondary transition-all duration-400 px-8 md:px-16 py-3 rounded-sm z-50"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
