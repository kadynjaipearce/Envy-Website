"use client";
import { useState } from "react";
import OpenAI from "openai";
import Link from "next/link";
import Linebreak from "@/app/components/Linebreak";
import { gptMessage } from "@/app/utils/config";

const openai = new OpenAI({
  organization: "org-UdVDU8gXJBWSyNbdkjj2PLrv",
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function Questionnaire() {
  const [answers, setAnswers] = useState({
    recipient: "",
    ageRange: "",
    budget: "",
    occasion: "",
  });

  const [recommendations, setRecommendations] = useState<
    {
      service: string;
      price: string;
      duration: string;
      description: string;
    }[]
  >([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({ ...prevAnswers, [name]: value }));
  };

  //  just ignore the implementation it works thats all that matters

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: "assistant",
            content: gptMessage(answers),
          },
        ],
        model: "gpt-3.5-turbo-1106",
        response_format: { type: "json_object" },
      });

      console.log(response.choices[0]);
      console.log(response.choices[0].message.content);

      const recommendationsData = JSON.parse(
        response.choices[0].message.content ?? ""
      );

      setRecommendations(recommendationsData.options);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch from OpenAI:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 min-h-screen">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="w-16 h-16 border-t-4 border-primary border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="space-y-20">
          {recommendations[0]?.service ? (
            <div>
              <h1 className="text-3xl font-bold text-primary text-center my-6">
                Here Are Our Recomendations
              </h1>
              <Linebreak></Linebreak>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-2/3">
                {recommendations.map((recommendation, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 border border-primary rounded shadow-md flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <h2 className="text-lg font-bold text-primary">
                        {recommendation.service}
                      </h2>
                      <p className="text-secondary">
                        Price:{" "}
                        <span className="font-semibold">
                          {recommendation.price}
                        </span>
                      </p>
                      <p className="text-secondary">
                        Duration:{" "}
                        <span className="font-semibold">
                          {recommendation.duration}
                        </span>
                      </p>
                      <p className="text-secondary">
                        Description: {recommendation.description}
                      </p>
                    </div>
                    <div className="self-center py-2">
                      <Link
                        href="https://envyskinandbeautyspecialists.gettimely.com/?#gift-vouchers"
                        className="px-14 py-2 rounded-md text-primary border-2 border-primary hover:text-white hover:bg-primary ease-in-out duration-200"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-primary text-center my-10">
              <h1 className="text-5xl font-bold">
                Looking for the Perfect Gift?
              </h1>
              <h3>or something for yourself ;)</h3>
              <h2 className="text-3xl font-semibold">
                Let our AI-powered tool guide you to the ideal choice!
              </h2>

              <Linebreak></Linebreak>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-2 text-2xl font-bold text-secondary">
                Who are you buying a gift for?
              </label>
              <select
                name="recipient"
                onChange={handleInputChange}
                value={answers.recipient}
                className="w-full p-2 border border-secondary text-secondary rounded"
              >
                <option value="">Select an option</option>
                <option value="partner">My partner</option>
                <option value="friend">Friend</option>
                <option value="colleague">Work colleague</option>
                <option value="daughter">Daughter</option>
                <option value="mother">Mother</option>
                <option value="couple">Couple</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-2xl font-bold text-secondary">
                What is the age of your recipient?
              </label>
              <select
                name="ageRange"
                onChange={handleInputChange}
                value={answers.ageRange}
                className="w-full p-2 border border-secondary text-secondary  rounded"
              >
                <option value="">Select an option</option>
                <option value="under20">Under 20</option>
                <option value="20-30">20 - 30</option>
                <option value="30-40">30 - 40</option>
                <option value="40-50">40 - 50</option>
                <option value="50plus">50+</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-2xl font-bold text-secondary">
                Whats your budget?
              </label>
              <select
                name="budget"
                onChange={handleInputChange}
                value={answers.budget}
                className="w-full p-2 border border-secondary text-secondary  rounded"
              >
                <option value="">Select an option</option>
                <option value="under50">Under $50</option>
                <option value="under100">Under $100</option>
                <option value="100-250">$100 - $250</option>
                <option value="250-400">$250 - $400</option>
                <option value="400-550">$400 - $550</option>
                <option value="550plus">$550 +</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-2xl font-bold text-secondary">
                Whats the occasion?
              </label>
              <select
                name="occasion"
                onChange={handleInputChange}
                value={answers.occasion}
                className="w-full p-2 border border-secondary text-secondary  rounded"
              >
                <option value="">Select an option</option>
                <option value="anniversary">Anniversary</option>
                <option value="birthday">Birthday</option>
                <option value="pregnancy">Pregnancy</option>
                <option value="justBecause">Just Because</option>
                <option value="christmas">Christmas</option>
                <option value="workGift">Work Gift</option>
                <option value="bridalShower">Bridal Shower</option>
                <option value="wedding">Wedding</option>
                <option value="other">Other</option>
              </select>
            </div>

            <Linebreak></Linebreak>
            <button
              type="submit"
              className=" w-full p-2 border-2 border-primary text-primary rounded hover:bg-primary hover:text-white ease-in-out duration-200 mt-20"
            >
              {recommendations[0]?.service ? "Suggest Me More" : "Submit"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
