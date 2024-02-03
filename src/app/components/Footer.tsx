import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-center items-center text-center w-full px-10 py-3 bg-[#F0DAD7] text-white space-x-3 text-sm md:text-base">
      <div>
        © {new Date().getFullYear()} Envy Skin &amp; Beauty. All Rights
        Reserved.
      </div>

      <div className="">
        <Link href={"/tos"} className="text-white underline">
          Terms &amp; Conditions
        </Link>
      </div>
    </footer>
  );
}
