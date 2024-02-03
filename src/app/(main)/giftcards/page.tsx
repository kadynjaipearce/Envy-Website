import React from "react";
import Image from "next/image";
import Link from "next/link";
import config, { fetchProps } from "@/app/utils/config";
import Linebreak from "@/app/components/Linebreak";

export const metadata = {
  title: "Giftcards",
  description:
    "Gift the perfect pampering experience with Envy Beauty gift cards...",
};

export default async function page() {
  const {
    data: { attributes },
  } = await fetchProps("giftcard");
  const { title, description, url, image } = attributes;

  return (
    <div className="container flex flex-col items-center min-h-screen px-5 py-10 mx-auto md:flex-row md:px-0">
      <div className="object-cover object-center lg:w-full md:mb-0">
        <Image
          className="w-full rounded-3xl"
          alt={`Giftcard - ${title}`}
          src={`${config.api}${image.data.attributes.url}`}
          loading="lazy"
          width={700}
          height={700}
        />
      </div>

      <div className="flex flex-col items-center text-center lg:flex-grow md:w-2/3 lg:pl-24 md:pl-16 md:items-start md:text-left">
        <h1 className="mt-10 md:mt-0 text-3xl font-medium title-font sm:text-4xl text-primary">
          {title}
        </h1>
        <Linebreak />
        <div className="mb-8 leading-relaxed text-xs">
          {description
            .split(/<br\/>|\n/)
            .map((textPart: string, index: number) => (
              <div key={index} className="my-2">
                {textPart}
              </div>
            ))}
        </div>
        <Link
          href={url}
          className="px-8 py-4 duration-200 ease-in-out border-2 rounded-md border-primary text-primary hover:bg-primary hover:text-white"
        >
          Purchase Now
        </Link>
      </div>
    </div>
  );
}
