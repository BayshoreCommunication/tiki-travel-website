import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="border-b-2 py-4">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full pb-2"
      >
        <span className="text-start text-secondary text-xl font-medium">
          {title}
        </span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 text-secondary transform origin-center transition duration-500 ease-out ${
            accordionOpen && "!rotate-180"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-secondary opacity-85 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden ">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
