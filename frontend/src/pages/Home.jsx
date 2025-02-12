import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";

function Home() {
  return (
    <div>
      <Header />
      <div className="p-12">
        <SpecialityMenu />
        <TopDoctors />
        <Banner />
      </div>
    </div>
  );
}

export default Home;
