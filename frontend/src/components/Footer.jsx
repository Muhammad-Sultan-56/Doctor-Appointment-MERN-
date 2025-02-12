import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="px-10 mt-10  py-1 bg-blue-50">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-9 my-10   text-sm">
        {/* ----- left div ------ */}
        <div>
          <img src={assets.logo} className="mb-4 w-40" alt="Logo" />
          <p className="w-full md:w-2/3 leading-6 text-justify text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            possimus quis rerum illum corrupti, a distinctio neque accusantium
            nisi unde quas, nesciunt.
          </p>
        </div>
        {/* ----- center div ------ */}
        <div>
          <p className="text-xl font-medium mb-4">COMPANY</p>
          <ul className="text-gray-700 flex flex-col gap-2">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* ----- right div ------ */}
        <div>
          <h2 className="text-xl font-medium mb-4">GET IN TOUCH</h2>
          <div className="flex flex-col gap-3 text-gray-700">
            <p>+92300 - 1234567</p>
            <p>Anymail@gmail.com</p>
          </div>
        </div>
      </div>

      {/* copyright div */}
      <div className="p-3 border-t-1 border-gray-300 text-center text-gray-800">
        <p>Copyright2025 @DoctorApointment - All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
