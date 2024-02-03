"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Popup() {
  const [isClosed, setClosed] = useState(true); // Start with the popup closed

  useEffect(() => {
    // Set a timeout to open the popup after 2 seconds
    const timer = setTimeout(() => {
      setClosed(false);
    }, 2000);

    return () => clearTimeout(timer); // Clear the timeout if the component unmounts
  }, []);

  if (isClosed) {
    return null; // Don't render the popup if it is closed
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center ease-in-out duration-200">
      <div className="p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">
            Hey, looking for a gift for a loved one? Check out our AI service
            finder!
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Our AI Powered Gift Selector Tool will help you find the ideal gift.
          </p>
          <div className="mt-5 ">
            <Link
              href="/ai-service-helper"
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light"
            >
              Get Started
            </Link>
            <button
              onClick={() => setClosed(true)}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-secondary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
