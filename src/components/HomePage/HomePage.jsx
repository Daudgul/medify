import React from "react";
import FAQ from "../FAQ";
import Stats from "./Stats";
import News from "./News";
import Patient from "./Patient";
import DocsInfo from "./DocsInfo";
import Department from "./Department";
import Ads from "./Ads";
import SelectBox from "./SelectBox";
import TopBanner from "./TopBanner";

function HomePage() {
  return (
    <div>
      <TopBanner />
      <SelectBox />
      <Ads />
      <Department />
      <DocsInfo />
      <Patient />
      <News />
      <Stats />
      <FAQ />
    </div>
  );
}

export default HomePage;
