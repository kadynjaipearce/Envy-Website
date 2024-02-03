"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import config, { fetchProps } from "@/app/utils/config";
import { useState, useEffect } from "react";
import Linebreak from "@/app/components/Linebreak";

export default function Page() {
  const [category, setCategory] = useState(
    "Fabulous Skin & Pampering Facials "
  );
  const [services, setServices] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);

  const words = category.split(" ");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchProps("services");
        const res1 = await fetchProps("categories");
        setServices(res.data);
        setCategories(res1.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  const groupedItemsByTab = services.reduce((acc, service) => {
    if (
      service.attributes.categorys === "Classic Beauty " &&
      service.attributes.tab
    ) {
      if (!acc[service.attributes.tab]) {
        acc[service.attributes.tab] = [];
      }
      acc[service.attributes.tab].push(service);
    }
    return acc;
  }, {});

  return (
    <div>
      <div className="relative w-full h-[60vh] overflow-hidden flex items-center justify-center">
        <div className="w-full h-[60vh] aspect-h-9 aspect-w-16 image-container">
          {categories.map((item) => {
            if (item.attributes.title === category)
              return (
                <Image
                  src={`${config.api}${item.attributes.image.data.attributes.url}`}
                  alt={item.attributes.title}
                  width={10000}
                  height={10000}
                  className="object-cover object-bottom blur-sm"
                  key={item.attributes.title}
                />
              );
          })}
        </div>

        <div className="absolute z-10 text-white text-1.5xl md:text-2xl md:text-right text-center mx-5 md:mx-0 flex flex-col items-center">
          <div className={` md:text-[100px] text-[75px]`}>{words[0]}</div>
          <div className="mt-0 md:mt-10">{words.slice(1).join(" ")}</div>
        </div>
      </div>

      <div className="lg:sticky md:top-[107px] top-20 text-center border-b-2 mx-10 pb-10 md:pb-0 border-primary text-secondary mt-10 md:mt-0">
        <div className="px-5 bg-white">
          {categories.map((item) => (
            <button
              key={item.attributes.title}
              onClick={() => setCategory(item.attributes.title)}
              className={`p-4 ${
                item.attributes.title === category ? "active" : ""
              } category-item`}
            >
              {item.attributes.title.trim()}
            </button>
          ))}
        </div>
      </div>

      <div className="container flex flex-col justify-between px-5 py-5 mx-auto md:py-10 md:flex-row md:px-0">
        {categories.map((item, idx) => {
          if (item.attributes.title === category)
            return (
              <div
                key={idx}
                className="w-full mb-4 text-gray-500 md:w-1/5 md:mb-0"
              >
                <h1 className="py-4 text-lg font-bold md:text-2xl text-primary">
                  {item.attributes.header}
                </h1>
                <div className="text-sm">
                  {item.attributes.description
                    .split(/<br\/>|\n/)
                    .map((textPart: string, index: number) => (
                      <div key={index} className="my-2">
                        {textPart}
                      </div>
                    ))}
                </div>
              </div>
            );
        })}

        <div className="w-full md:w-[70%] mt-4 md:mt-0 h-full">
          {category === "Classic Beauty " &&
            Object.keys(groupedItemsByTab).map((tab: string) => (
              <div key={tab} className="tab-section">
                <h2 className="my-5 mb-4 text-3xl font-bold text-center text-primary">
                  {tab}
                  <Linebreak />
                </h2>
                {groupedItemsByTab[tab].map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between h-auto pt-10 pb-10 text-gray-500 bg-white border-primary md:flex-row "
                  >
                    <div className="flex-1">
                      <div className="mb-2 text-xl font-semibold text-primary">
                        {item.attributes.title}
                      </div>
                      <div className="mb-2">${item.attributes.price}</div>
                      <div className="mb-2">{item.attributes.duration}</div>
                      <div className="mb-4 text-xs md:mb-0">
                        {item.attributes.description}
                      </div>
                    </div>
                    <div className="self-center mt-4 md:mt-0 md:self-auto">
                      <Link
                        href={
                          item.attributes.url ||
                          "https://bookings.gettimely.com/envyskinandbeautyspecialists/book?uri=https%3A%2F%2Fbook.gettimely.com%2FBooking%2FLocation%2F109461%3Fmobile%3DTrue%26params%3D%25253fclient-login%25253dtrue"
                        }
                        className="px-10 py-2 transition duration-200 ease-in-out border-2 rounded-md border-primary text-primary hover:text-white hover:bg-primary"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ))}

          {category !== "Classic Beauty " &&
            services
              .filter((item) => item.attributes.categorys === category)
              .map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between h-auto pt-10 pb-10 text-gray-500 bg-white border-b-2 border-primary md:flex-row "
                >
                  <div className="flex-1">
                    <div className="mb-2 text-xl font-semibold text-primary">
                      {item.attributes.title}
                    </div>
                    <div className="mb-2">${item.attributes.price}</div>
                    <div className="mb-2">{item.attributes.duration}</div>
                    <div className="mb-4 text-xs md:mb-0">
                      {item.attributes.description}
                    </div>
                  </div>
                  <div className="self-center mt-4 md:mt-0 md:self-auto">
                    {item.attributes.url && (
                      <Link
                        href={
                          item.attributes.url ||
                          "https://bookings.gettimely.com/envyskinandbeautyspecialists/book?uri=https%3A%2F%2Fbook.gettimely.com%2FBooking%2FLocation%2F109461%3Fmobile%3DTrue%26params%3D%25253fclient-login%25253dtrue"
                        }
                        className="px-10 py-2 transition duration-200 ease-in-out border-2 rounded-md border-primary text-primary hover:text-white hover:bg-primary"
                      >
                        Book Now
                      </Link>
                    )}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
