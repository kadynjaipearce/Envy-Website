import React from "react";
import Page from "./page";

export const metadata = {
  title: "Services",
  alternates: {
    canonical: "/services",
  },
  description:
    "Discover our range of rejuvenating services including facials, massages, beauty treatments, and spa experiences. Indulge yourself at Envy Beauty and feel revitalized.",
};

export default function layout() {
  return (
    <div>
      <Page></Page>
    </div>
  );
}
