import React from "react";
import { assets } from "../assets/assets";

function Header() {
  return (
    <div className="bg-violet-500 px-6 md:px-14 flex flex-col md:flex-row flex-wrap">
      {/* left side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl text-white lg:text-5xl font-semibold leading-tight ">
          Book Appointments <br /> with Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row md:items-center  text-sm font-light text-white gap-4">
          <img
            className="w-28"
            src={assets.group_profiles}
            alt="Group Profile"
          />
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <br className="hidden sm:block" />
            Distinctio laboriosam commodi quasi. <br />
          </p>
        </div>
        <a
          href="#speciality"
          className="flex gap-3 bg-white items-center px-5 py-3 rounded-full hover:scale-105 transition-all duration-300"
        >
          Book Appointment{" "}
          <img src={assets.arrow_icon} alt="arrow" className="w-3" />
        </a>
      </div>

      {/* right side */}
      <div className="md:w-1/2 relative">
        <img
          src={assets.header_img}
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          alt="Header Image"
        />
      </div>
    </div>
  );
}

export default Header;
