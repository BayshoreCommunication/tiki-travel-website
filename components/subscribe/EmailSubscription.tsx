"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";

const EmailSubscription = () => {
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
    <form className="w-full lg:max-w-[80%] me-auto" onSubmit={handleSubscribe}>
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
        <p className="pt-4 text-sm text-center text-gray-200">{message}</p>
      )}
    </form>
  );
};
export default EmailSubscription;
