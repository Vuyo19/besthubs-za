'use client'
import React from 'react'
import { useState } from "react";

// Importing React Icon(s)
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"; 

interface AccordianProps {
    title1: string,
    description1: string,
    title2: string,
    description2: string, 
    title3: string, 
    description3: string
}

const Accordion: React.FC<AccordianProps> = ({
  title1,
  description1,
  title2,
  description2,
  title3,
  description3,
}) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index: any) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const isAccordionOpen = (index: any) => {
    return openAccordion === index;
  };

  return (
    <div>
      {/* Accordion Item 1 */}
      <h2 id="accordion-flush-heading-1">
        <button
          type="button"
          className={`flex items-center justify-between w-full py-4 font-medium rtl:text-right text-black border-b border-gray-200 dark:border-gray-700 gap-3 ${
            isAccordionOpen(1) ? "open" : ""
          }`}
          onClick={() => handleAccordionClick(1)}
          aria-expanded={isAccordionOpen(1)}
          aria-controls="accordion-flush-body-1"
        >
          <span>{title1}</span>
          {isAccordionOpen(1) ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
      </h2>
      <div
        id="accordion-flush-body-1"
        className={`${
          isAccordionOpen(1) ? "block" : "hidden"
        }`}
        aria-labelledby="accordion-flush-heading-1"
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            {description1}
          </p>
        </div>
      </div>

      {/* Accordion Item 2 */}
      <h2 id="accordion-flush-heading-2">
        <button
          type="button"
          className={`flex items-center justify-between w-full py-4 font-medium rtl:text-right text-black border-b border-gray-200 dark:border-gray-700 gap-3 ${
            isAccordionOpen(2) ? "open" : ""
          }`}
          onClick={() => handleAccordionClick(2)}
          aria-expanded={isAccordionOpen(2)}
          aria-controls="accordion-flush-body-2"
        >
          <span>{title2}</span>
          {isAccordionOpen(2) ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
      </h2>
      <div
        id="accordion-flush-body-2"
        className={`${
          isAccordionOpen(2) ? "block" : "hidden"
        }`}
        aria-labelledby="accordion-flush-heading-2"
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            {description2}
          </p>
        </div>
      </div>

      {/* Accordion Item 3 */}
      <h2 id="accordion-flush-heading-3">
        <button
          type="button"
          className={`flex items-center justify-between w-full py-4 font-medium rtl:text-right text-black border-b border-gray-200 dark:border-gray-700 gap-3 ${
            isAccordionOpen(3) ? "open" : ""
          }`}
          onClick={() => handleAccordionClick(3)}
          aria-expanded={isAccordionOpen(3)}
          aria-controls="accordion-flush-body-3"
        >
          <span>{title3}</span>
          {isAccordionOpen(3) ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
      </h2>
      <div
        id="accordion-flush-body-3"
        className={`${
          isAccordionOpen(3) ? "block" : "hidden"
        }`}
        aria-labelledby="accordion-flush-heading-3"
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            {description3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion