"use client";
import React, { useState } from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Successfully subscribed to the newsletter!");
        setEmail("");
      } else {
        setMessage(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-8 md:py-10">
      <div className="flex flex-col justify-center items-center gap-6 lg:gap-12 text-secondary text-center p-6 lg:px-20 lg:py-24">
        <ScrollMotionEffect effect="fade-up" duration="1000">
          <div className="max-w-[1024px] flex flex-col justify-center items-center gap-8">
            <h4 className="text-3xl md:text-5xl font-semibold leading-tight">
              Plan Your Next Adventure With Confidence By Joining Our Monthly
              Newsletter
            </h4>
            <form
              className="w-full lg:max-w-[80%] mx-auto pt-4"
              onSubmit={handleSubscribe}
            >
              <div className="relative">
                <input
                  type="email"
                  className="block w-full py-2.5 lg:py-3 px-4 text-base lg:text-lg text-gray-900 border-gray-600 rounded-lg outline-none bg-slate-200"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-0 bottom-0 bg-primary duration-300 font-medium rounded-e-lg h-full px-2 md:px-6 text-base lg:text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Subscribing..." : "Subscribe Now"}
                </button>
              </div>
              {message && (
                <p className="pt-4 text-sm text-center text-gray-700">
                  {message}
                </p>
              )}
            </form>
          </div>
        </ScrollMotionEffect>
      </div>
    </div>
  );
};

export default NewsLetter;
