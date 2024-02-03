import React from "react";
import Link from "next/link";
import Linebreak from "@/app/components/Linebreak";
import { FaFacebook, FaInstagram, FaFacebookMessenger } from "react-icons/fa";
import { fetchProps } from "@/app/utils/config";

export const metadata = {
  title: "Contact Us",
  description:
    "Reach out to Envy Beauty! Find our location on the map, get our address, phone number, email, and follow us on social media. We're here to assist you.",
};

export default async function page() {
  const {
    data: { attributes },
  } = await fetchProps("contact");
  const { address, email, phone } = attributes;
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="container flex flex-wrap min-h-screen px-5 mx-auto my-10 sm:flex-nowrap md:my-20 md:px-0">
      <div className="relative flex items-end justify-start p-10 overflow-hidden rounded-2xl lg:w-2/3 md:w-1/2 sm:mr-10">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.005966262585!2d115.6341429758916!3d-33.31865949077531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a2e1d382491e457%3A0x8f2d610edd9314b9!2sEnvy%20Skin%20%26%20Beauty!5e0!3m2!1sen!2sau!4v1696164272692!5m2!1sen!2sau"
        ></iframe>
        <div className="relative flex flex-wrap py-6 bg-white text-secondary rounded shadow-md z-[-1] md:z-[10]">
          <div className="px-6 lg:w-1/2">
            <h2 className="text-xs font-semibold tracking-widest title-font">
              ADDRESS:
            </h2>
            <p className="mt-1 text-primary">{address}</p>
          </div>
          <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
            <h2 className="text-xs font-semibold tracking-widest title-font">
              EMAIL:
            </h2>
            <Link
              href={`mailto:${email}`}
              className="leading-relaxed underline text-primary"
            >
              {email}
            </Link>
            <h2 className="mt-4 text-xs font-semibold tracking-widest title-font">
              PHONE:
            </h2>
            <Link
              href={`tel:${phone}`}
              className="leading-relaxed underline text-primary"
            >
              {phone}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mt-8 text-center bg-white lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0 text-secondary">
        <h2 className="mb-5 text-2xl font-medium text-primary title-font">
          Connect with Us
        </h2>
        <h2 className="text-xs font-bold tracking-widest ">ADDRESS:</h2>
        <p className="my-1">{address}</p>
        <h2 className="text-xs font-bold tracking-widest">EMAIL:</h2>
        <Link
          href={`mailto:${email}`}
          className="my-1 leading-relaxed underline text-primary"
        >
          {email}
        </Link>

        <h2 className="text-xs font-bold tracking-widest">PHONE:</h2>
        <Link
          href={`tel:${phone}`}
          className="my-1 leading-relaxed underline text-primary"
        >
          {phone}
        </Link>
        <Linebreak />
        <div className="flex justify-center space-x-8 text-primary">
          <Link href="https://www.facebook.com/envybeautyspecialists">
            <FaFacebook size={48} />
          </Link>
          <Link href="https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2Fenvybeautyspecialists">
            <FaFacebookMessenger size={48} />
          </Link>
          <Link href="https://www.instagram.com/envybeautyspecialists/">
            <FaInstagram size={48} />
          </Link>
        </div>
        <Linebreak />

        <p className="mb-5 text-xl font-bold leading-relaxed text-center text-primary">
          Operating Hours
        </p>

        <div className="relative mb-4">
          <ul>
            {daysOfWeek.map((day) => (
              <li key={day} className={`mb-2 text-center text-secondary`}>
                {day}: {attributes[day.toLowerCase()]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
