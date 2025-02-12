import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Doctors() {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const [filterDoc, setFilterDoc] = useState([]);

  useEffect(() => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  }, [doctors, speciality]);

  return (
    <div className="px-4 md:px-14 py-10">
      <p className="text-lg font-semibold text-gray-700">
        Browse doctors by speciality
      </p>

      <div className="flex flex-col sm:flex-row gap-5 mt-5">
        {/* Specialities List */}
        <div className="flex flex-col gap-3 text-sm text-gray-600">
          {[
            "General physician",
            "Gynecologist",
            "Dermatologist",
            "Pediatricians",
            "Neurologist",
            "Gastroenterologist",
          ].map((spe, index) => (
            <p
              key={index}
              onClick={() => {
                speciality === spe
                  ? navigate("/doctors")
                  : navigate(`/doctors/${spe}`);
              }}
              className={`w-full sm:w-auto px-4 py-2 border border-gray-300 rounded cursor-pointer hover:bg-blue-100 transition  ${
                speciality === spe ? "bg-blue-100 text-black" : ""
              }`}
            >
              {spe}
            </p>
          ))}
        </div>

        {/* Doctor Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterDoc.map((doctor, idx) => (
            <div
              key={idx}
              onClick={() => navigate(`/appointment/${doctor._id}`)}
              className="shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300 cursor-pointer"
            >
              {/* Doctor Image */}
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full bg-blue-50"
              />

              {/* Doctor Details */}
              <div className="p-4">
                <p className="text-lg font-semibold text-gray-900">
                  {doctor.name}
                </p>
                <p className="text-sm text-gray-500">{doctor.speciality}</p>

                {/* Availability Indicator */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-3 h-3 bg-green-600 rounded-full"></span>
                  <p className="text-green-600 font-medium">Available</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
