"use client";
import React, { useState } from "react";
import NavItem from "./Navitem";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Comfortaa } from "next/font/google";
import Image from "next/image";

const comfortaa = Comfortaa({ subsets: ["latin"] });

interface navItemTypes {
  title: string;
  url: string;
}

const navItems: navItemTypes[] = [
  { title: "Home", url: "/" },
  { title: "Services", url: "/services" },
  { title: "Giftcards", url: "/giftcards" },
  { title: "Contact Us", url: "/contact" },
  {
    title: "Appointments",
    url: "https://bookings.gettimely.com/envyskinandbeautyspecialists/book?uri=https%3A%2F%2Fbook.gettimely.com%2FBooking%2FLocation%2F109461%3Fmobile%3DTrue%26params%3D%25253fclient-login%25253dtrue",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const defaultActiveIdx = navItems.findIndex((item) => item.url === pathname);
  const [activeIdx, setActiveIdx] = useState<number | null>(
    defaultActiveIdx !== -1 ? defaultActiveIdx : 0
  );
  const [navActive, setNavActive] = useState<boolean>(false);
  const [closing, setClosing] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-[1000] items-center justify-between w-full px-5 py-4 md:flex lg:px-20 md:px-10 bg-primary text-white text-lg">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div
          onClick={() => {
            setActiveIdx(0);
            setNavActive(false);
          }}
          className="relative w-[50px] h-[50px] md:w-[75px] md:h-[75px]"
        >
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt="Logo"
              width={75}
              height={75}
              unoptimized={true}
            />
          </Link>
        </div>

        <div
          onClick={() => {
            if (navActive) {
              setClosing(true);
              setNavActive(false);
              setTimeout(() => {
                setClosing(false);
              }, 300); // The time it takes for the animations to complete
            } else {
              setNavActive(true);
            }
          }}
          className={`${navActive ? "active" : ""} ${
            closing ? "reverse" : ""
          } nav-menu-bar md:hidden z-[1001]`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div
        className={`fixed top-20 right-0 bottom-0  ${
          navActive ? "active" : ""
        }  nav-menu  bg-primary z-[1000] md:static md:flex md:space-x-4 md:items-center md:w-auto`}
      >
        {navItems.map((item, idx) => {
          return (
            <div
              key={item.title}
              className={`mx-10 md:my-0 my-7 md:mx-0 ${comfortaa.className}`}
            >
              <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
              >
                <NavItem active={activeIdx === idx} {...item} />
              </div>
            </div>
          );
        })}
      </div>
    </header>
  );
}
