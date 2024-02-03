import React from "react";
import { fetchProps } from "@/app/utils/config";

export const metadata = {
  title: "Tos",
  description:
    "Review Envy Beauty's comprehensive Terms of Service and Privacy Policy. We value your trust and are committed to protecting your rights and privacy.",
};

export default async function page() {
  const tos = await fetchProps("terms-of-services");
  return (
    <div className="container py-10 mx-auto">
      <div className="text-3xl font-bold text-center text-primary">
        Terms &amp; Conditions
      </div>
      <div className="w-full "></div>
      {tos.data.map((item: any, idx: number) => (
        <div key={idx} className="p-4">
          <div className="py-2 font-bold text-primary ">
            {idx}. {item.attributes.title}
          </div>
          <div className="text-secondary">{item.attributes.description}</div>
        </div>
      ))}
    </div>
  );
}
