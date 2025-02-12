import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function TopDoctors() {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center gap-6 my-10 text-gray-900 px-4">
      {/* Section Title */}
      <div className="text-center max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-3">
          Top Doctors to Book
        </h2>
        <p className="text-gray-600">
          Find the best doctors available for consultation. Book your
          appointment today!
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {doctors.slice(0, 8).map((doctor, idx) => (
          <div
            key={idx}
            onClick={() => navigate(`/appointment/${doctor._id}`)}
            className="mb-4 shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300"
          >
            {/* Doctor Image */}
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full  bg-blue-50"
            />

            {/* Doctor Details */}
            <div className="p-3 px-5">
              <p className="text-lg font-semibold text-gray-900">
                {doctor.name}
              </p>
              <p className="text-sm text-gray-500">{doctor.speciality}</p>

              {/* Availability Indicator */}
              <div className="flex gap-2 items-center mt-2">
                <p className="bg-green-600 p-1 rounded-full"></p>
                <p className="text-green-600 font-medium">Available</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/doctors", scrollTo(0, 0))}
        className="px-12 py-3 bg-blue-50 rounded-full text-gray-600 mt-10"
      >
        More
      </button>
    </div>
  );
}

export default TopDoctors;
