import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

function SpecialityMenu() {
  return (
    <div
      id="speciality"
      className=" flex items-center flex-col gap-4 text-center"
    >
      <h2 className="text-3xl font-semibold">Find By Speciality</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eaque
        officiis laudantium
      </p>

      <div className="flex sm:justify-center gap-5 text-sm mb-4 w-full p-4 flex-wrap m-auto">
        {specialityData.map((item, idx) => {
          return (
            <Link
              onClick={() => scrollTo(0, 0)}
              className="flex flex-col flex-shrink-0 cursor-pointer hover:translate-y-[10px] transition-all duration-500"
              key={idx}
              to={`/doctors/${item.speciality}`}
            >
              <img
                src={item.image}
                className="w-16 sm:w-24 mb-4"
                alt="Speciality Image"
              />
              <p>{item.speciality}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SpecialityMenu;
