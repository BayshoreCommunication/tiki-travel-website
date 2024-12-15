"use client";
import Link from "next/link";
import React, { useState } from "react";

const RippleButton = ({
  buttonText = "Click Me",
  rippleDuration = 1000,
  href = "#",
  className = "",
  ...props
}) => {
  const [rippleStyle, setRippleStyle] = useState({});
  const [showRipple, setShowRipple] = useState(false);

  const handleMouseOver = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setRippleStyle({
      left: `${x}px`,
      top: `${y}px`,
    });
    setShowRipple(true);

    setTimeout(() => {
      setShowRipple(false);
    }, rippleDuration); // Remove ripple after specified duration
  };

  return (
    <Link
      href={href}
      className={`rippleButton relative overflow-hidden text-white font-medium text-md md:text-lg bg-primary hover:bg-secondary transition-all duration-400 px-8 md:px-16 py-3 rounded-sm ${className}`}
      {...props}
      onMouseOver={handleMouseOver}
    >
      {showRipple && <span className="ripple" style={rippleStyle}></span>}
      {buttonText}
    </Link>
  );
};

export default RippleButton;
