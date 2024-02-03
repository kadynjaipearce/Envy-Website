import React from "react";
import Link from "next/link";
import { fetchProps } from "../utils/config";

type SpecialAttributes = {
  titleOne: string;
  urlOne?: string;
  titleTwo: string;
  urlTwo?: string;
};

type SpecialsData = {
  data: {
    attributes: SpecialAttributes;
  };
};

export default async function Specials() {
  const specials: SpecialsData = await fetchProps("specials-bar");

  if (!specials.data?.attributes.titleOne) return null; // or return some fallback UI if desired

  return (
    <div className="w-full py-2 text-white overflow-hidden ticker-container bg-secondary">
      <div className="ticker-tape md:space-x-60 space-x-5">
        {[...Array(4)].map((_, idx) => (
          <div key={idx} className="flex md:space-x-60 space-x-5 px-4">
            <Link href={"/specials"}>{specials.data.attributes.titleOne}</Link>
            <Link href={"/specials"}>{specials.data.attributes.titleTwo}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
