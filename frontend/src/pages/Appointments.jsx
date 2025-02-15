import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";

function Appointments() {
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState({});
  const { docId } = useParams();

  const [docSlot, setDocSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  const getAvailbleSlots = async () => {
    setDocSlot([]);
    // get current date
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      // get current date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // setting endtime of date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // setting hours
      if (today.setDate() === currentDate.setDate()) {
        currentDate.setHours(
          currentDate.setHours() > 10 ? currentDate.getHours + 1 : 10
        );
        currentDate.setMinutes(
          currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
        );
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      while (currentDate < endTime) {
        let formateTime = currentDate.toLocaleTimeString([], {hour : '2-digit' , minute : '2-digit'})
      }
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailbleSlots();
  }, [docInfo]);

  return (
    docInfo && (
      <div className=" px-10 py-10 md:px-24 flex flex-col md:flex-row gap-5">
        {/* doctor details */}
        <div>
          <img
            src={docInfo.image}
            className="w-full sm:w-[700px] bg-violet-500 rounded-lg"
            alt="Doctor Image"
          />
        </div>

        {/* doctor info : name , experince etc */}
        <div className="border-1 px-8 py-5 border-gray-400 rounded-lg">
          <div className="flex gap-3">
            <h2 className=" text-xl">{docInfo.name}</h2>
            <img src={assets.verified_icon} alt="verified icon" />
          </div>
          <p className="flex gap-5 mb-2 mt-1  text-gray-600">
            {docInfo.degree} - {docInfo.speciality}{" "}
            <button>{docInfo.experience}</button>
          </p>

          <div>
            <h3 className="flex gap-2 text-xl my-2">
              About <img src={assets.info_icon} alt="" />
            </h3>
            <p className="text-justify text-gray-600 text-sm">
              {docInfo.about}
            </p>
          </div>
          <p className="mt-3 text-gray-700">
            Appointment fee:{" "}
            <span className="text-black">
              {currencySymbol}
              {docInfo.fees}
            </span>
          </p>
        </div>
      </div>
    )
  );
}

export default Appointments;
