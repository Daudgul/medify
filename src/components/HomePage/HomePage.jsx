import React from "react";
import FAQ from "../FAQ";
import Stats from "./Stats";
import News from "./News";
import Patient from "./Patient";

function HomePage() {
  return (
    <div>
      <Patient />
      <News />
      <Stats />
      <FAQ />
    </div>
  );
}

export default HomePage;
