import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  return (
    <div className="bg-violet-600 flex flex-wrap px-10 md:px-12 my-15 rounded-lg">
      {/* ---- left side ----- */}
      <div className="flex-1 py-8 lg:py-20 lg:pl-8 md:py-14">
        <div className="text-white  text-2xl md:text-3xl font-medium flex flex-col gap-4">
          <p>Book Appointment</p>
          <p>With 100+ Trusted Doctors</p>
        </div>
        <button onClick={()=> navigate("/login")} className="bg-white text-violet-600 px-10 py-4 rounded-full mt-5 font-medium hover:scale-105 transition-all duration-300">
          Create Account
        </button>
      </div>
      {/* ---- right side ----- */}
      <div className="relative hidden md:w-1/2 md:block lg:w-[360px]">
        <img
          className=" absolute max-w-md bottom-0 right-10 w-full"
          src={assets.appointment_img}
          alt="Banner Image"
        />
      </div>
    </div>
  );
}

export default Banner;
