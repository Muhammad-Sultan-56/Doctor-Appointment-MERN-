import React from "react";
import { assets } from "../assets/assets";

function Contact() {
  return (
    <div className="px-10 md:px-50">
      {/* title of page */}
      <div>
        <h1 className="text-xl text-center my-10">
          CONTACT <span>US</span>
        </h1>
      </div>

      {/* image and content of page */}

      <div className="flex flex-col md:flex-row gap-10">
        <div>
          <img
            src={assets.contact_image}
            className="w-full md:w-[350px]"
            alt="About image"
          />
        </div>
        <div className="flex flex-col gap-5 lg:px-2 text-justify">
          <div>
            <b>OUR OFFICE</b>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex gap-2">
            <b>TEL:</b>
            <p className="text-gray-600">+92300-1234567</p>
          </div>
          <div className="flex gap-2">
            <b>EMAIL:</b>
            <p className="text-gray-600">anymail@gmail.com</p>
          </div>

          <div>
            <b>Careers at Perscripto</b>
            <p className="text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </p>
            <button className="my-4 p-4 border-1 border-gray-600 hover:bg-violet-500 hover:border-transparent hover:text-white duration-300">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
