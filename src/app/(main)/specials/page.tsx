import React from "react";
import Linebreak from "@/app/components/Linebreak";
import config, { fetchProps } from "@/app/utils/config";
import Link from "next/link";
import Image from "next/image";

export default async function page() {
  const specials = await fetchProps("specials-page");
  return (
    <div className="min-h-screen">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-4xl font-bold text-center text-primary">
          SPECIALS
        </div>
        <div className="flex flex-col flex-wrap -mx-4 -mb-10 text-center sm:flex-row text-secondary">
          <div className="px-4 mb-10 sm:w-1/2 ">
            <h2 className="mt-6 mb-3 text-2xl font-medium title-font text-primary">
              {specials.data.attributes.titleOne}
            </h2>
            <Linebreak></Linebreak>
            <div className="relative  md:h-0 overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
              {specials.data.attributes.isVideoOne ? (
                <video
                  className="absolute top-0 left-0 object-cover w-full h-full"
                  src={`${config.api}${specials.data.attributes.imageOne.data[0].attributes.url}`}
                  loop
                  muted
                  autoPlay
                  playsInline
                  controls={false}
                ></video>
              ) : (
                <Image
                  fill={true}
                  className="object-cover"
                  src={`${config.api}${specials.data.attributes.imageOne.data[0].attributes.url}`}
                  alt={specials.data.attributes.titleOne}
                />
              )}
            </div>
            <Linebreak></Linebreak>
            <p className="mb-10 text-base leading-relaxed">
              {specials.data.attributes.descriptionOne}
            </p>
            {specials.data.attributes.isButtonOne && (
              <Link
                href={specials.data.attributes.urlOne}
                className="px-10 md:px-20 py-2 mx-auto mt-6 duration-200 ease-in-out border-2 rounded-md border-primary text-primary hover:bg-primary hover:text-white"
              >
                {specials.data.attributes.buttonOne}
              </Link>
            )}
          </div>
          <div className="px-4 pb-10 sm:w-1/2">
            <h2 className="mt-6 mb-3 text-2xl font-medium title-font text-primary">
              {specials.data.attributes.titleTwo}
            </h2>
            <Linebreak></Linebreak>
            <div className="relative  md:h-0  overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
              {specials.data.attributes.isVideoTwo ? (
                <video
                  className="absolute top-0 left-0 object-cover w-full h-full"
                  src={`${config.api}${specials.data.attributes.imageTwo.data[0].attributes.url}`}
                  loop
                  muted
                  autoPlay
                  playsInline
                  controls={false}
                ></video>
              ) : (
                <Image
                  fill={true}
                  className="object-cover"
                  loading="lazy"
                  src={`${config.api}${specials.data.attributes.imageTwo.data[0].attributes.url}`}
                  alt={specials.data.attributes.titleTwo}
                />
              )}
            </div>
            <Linebreak></Linebreak>
            <p className="mb-10 text-base leading-relaxed">
              {specials.data.attributes.descriptionTwo}
            </p>
            {specials.data.attributes.isButtonTwo && (
              <Link
                href={specials.data.attributes.urlTwo}
                className="px-10 md:px-20 py-2 mx-auto mt-6 duration-200 ease-in-out border-2 rounded-md border-primary text-primary hover:bg-primary hover:text-white"
              >
                {specials.data.attributes.buttonTwo}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
