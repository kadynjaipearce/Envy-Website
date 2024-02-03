import Link from "next/link";
import config, { fetchProps } from "./utils/config";
import Image from "next/image";
import Linebreak from "./components/Linebreak";
import Popup from "./components/Popup";

export default async function Home() {
  const homepage = await fetchProps("homepages");
  const reviews = await fetchProps("reviews");
  return (
    <main className="">
      <Popup></Popup>
      <section>
        <div className="relative w-full h-[60vh] overflow-hidden flex items-center justify-center">
          <div className="relative w-full h-screen md:h-[60vh] lg:h-auto lg:aspect-w-16 lg:aspect-h-9 xl:aspect-w-16 xl:aspect-h-9 xl:-top-20">
            <video
              className="absolute top-0 left-0 object-cover w-full h-full"
              id="tb_video"
              src={`${config.api}${homepage.data[0].attributes.image.data.attributes.url}`}
              loop
              muted
              autoPlay
              playsInline
              controls={false}
            ></video>
          </div>

          <div className="absolute top-14 lg:right-20 md:right-10 z-10 text-white text-1.5xl md:text-2xl md:text-right text-center mx-5 md:mx-0">
            {homepage.data[0].attributes.title
              .split("<br />")
              .map((textPart: string, index: number) => (
                <div key={index}>{textPart}</div>
              ))}
          </div>

          <Link
            href={
              "https://bookings.gettimely.com/envyskinandbeautyspecialists/book?uri=https%3A%2F%2Fbook.gettimely.com%2FBooking%2FLocation%2F109461%3Fmobile%3DTrue%26params%3D%25253fclient-login%25253dtrue"
            }
            className="absolute z-10 px-10 py-4 text-white duration-150 ease-out border-2 rounded-md bottom-10 lg:right-20 md:right-10 hover:bg-primary hover:border-primary"
          >
            {homepage.data[0].attributes.button}
          </Link>
        </div>
      </section>

      <section className="text-secondary">
        <div className="container flex flex-col items-center px-5 py-20 mx-auto md:flex-row md:px-0">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
            <Image
              className="object-cover object-center w-auto h-auto rounded-3xl"
              alt="hero"
              src={`${config.api}${homepage.data[1].attributes.image.data.attributes.url}`}
              width={500}
              height={700}
              loading="lazy"
            />
          </div>

          <div className="flex flex-col items-center px-5 text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
            <h1 className="mt-10 text-3xl font-medium title-font sm:text-4xl text-primary">
              {homepage.data[1].attributes.title}
            </h1>
            <Linebreak />
            <p className="text-sm leading-relaxed ">
              {homepage.data[1].attributes.description}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container px-5 mx-auto md:px-0">
          <div className="p-3 text-2xl text-center md:text-3xl text-primary">
            {homepage.data[2].attributes.title}
          </div>
          <Linebreak />
          <div className="relative overflow-hidden aspect-w-16 aspect-h-9 rounded-3xl">
            {homepage.data[2].attributes.showVideo ? (
              <video
                className="absolute top-0 left-0 object-cover w-full h-full"
                src={`${config.api}${homepage.data[2].attributes.image.data.attributes.url}`}
                loop
                muted
                autoPlay
              ></video>
            ) : (
              <Image
                src={`${config.api}${homepage.data[2].attributes.image.data.attributes.url}`}
                fill={true}
                loading="lazy"
                className="object-cover"
                alt="Special image"
              />
            )}
          </div>
          <Linebreak />
        </div>
      </section>

      <section className="text-gray-600">
        <div className="container px-5 pt-10 mx-auto md:px-0">
          <h1 className="mb-12 text-3xl font-medium text-center title-font text-primary">
            Testimonials
          </h1>

          <div className="grid h-auto grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2 md:grid-flow-col md:grid-auto-cols-auto">
            {reviews.data.map((item: any, idx: number) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-8 bg-gray-100 rounded-3xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 mb-4 text-gray-400"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="mb-6 leading-relaxed">
                  {item.attributes.description}
                </p>
                <div className="self-start">
                  <span className="font-medium text-gray-900 title-font">
                    - {item.attributes.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-secondary">
        <div className="container px-5 mx-auto">
          <div className="w-full mx-auto text-center xl:w-1/2 lg:w-3/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 mb-8 text-gray-400"
              viewBox="0 0 25 25"
            >
              <text
                x="50%"
                y="75%"
                fontFamily="Arial"
                fontSize="40"
                fill="currentColor"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                *
              </text>
            </svg>

            <h1 className="pb-8 text-2xl font-bold text-primary">
              BOOKING POLICY
            </h1>
            <p className="text-sm leading-relaxed md:text-lg">
              In Order To Provide The Highest Standards Of Service, We Ask That
              When Making Appointments You Are Aware Of Our Booking &
              Cancellation Policy. Bookings Can Be Made Over The Phone, In Salon
              Or Via Our Online Booking System. A 50% Deposit Is Required To
              Secure Your Appointment. However, If The Appointment Is Under
              $40/30 Mins We Require 100% Deposit. As A Courtesy, An Automated
              SMS Is Sent 72-48hrs Prior To Your Appointment And We Ask That You
              Confirm Or Change Your Appointment. Cancellation Or Change Of
              Appointment With Less Than 48 Hrs Notice Will Result In Forfeit Of
              Deposit. We Encourage Everyone Concerned With Not Being Able To
              Make Their Appointment To Contact Us Via Phone To Discuss
              Rescheduling To Avoid Penalties.
            </p>
            <span className="inline-block w-10 h-1 mt-8 mb-6 rounded bg-primary"></span>
          </div>
        </div>
      </section>
    </main>
  );
}
