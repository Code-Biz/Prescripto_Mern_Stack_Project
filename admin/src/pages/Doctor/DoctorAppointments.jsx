import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const DoctorAppointments = () => {
  const {
    dToken,
    appointments,
    getAppointments,
    completeAppointment,
    cancelAppointment,
  } = useContext(DoctorContext);
  const { calculateAge, slotDateFormatted, currency } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getAppointments();
    }
  }, [dToken]);
  return (
    <div className="w-full max-w-6xl m-5 ">
      <p className="mb-3 text-lg font-medium">All Appointments</p>
      <div className="bg-white border rounded text-sm max-h-[80vh] min-h-[50vh] lg:min-h-[20vh]  overflow-y-scroll p-0.5">
        <div className=" gap-1 py-3 px-6 max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] border-b">
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>

        {appointments.reverse().map((appointment, index) => (
          <div
            key={index}
            className="flex flex-wrap justify-between max-lg:justify-start max-lg:p-0.5 max-lg:h-[50vh] max-lg:border-none max-lg:gap-0 max-lg:font-light overflow-y-scroll max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-5  items-center text-gray-500 px-6 py-3 border-b hover:bg-primary hover:text-white"
          >
            <p className="max-sm:hidden">{index + 1}</p>
            <div className="flex items-center justify-start gap-2 ">
              <img
                src={appointment.userData.image}
                alt=""
                className="w-8 rounded-full "
              />
              <p className="max-lg:text-sm">{appointment.userData.name}</p>
            </div>
            <div>
              <p className=" text-xs inline border border-primary px-2 rounded-full">
                Online
              </p>
            </div>
            <p className=" max-sm:hidden">
              {calculateAge(appointment.userData.dob)}
            </p>
            <p className="max-lg:text-[9px]">
              {slotDateFormatted(appointment.slotDate)}, {appointment.slotTime}
            </p>
            <p className="max-lg:text-[10px]">
              {currency}
              {appointment.amount}
            </p>

            {appointment.cancelled ? (
              <p className="text-red-400 text-xs font-medium">Cancelled</p>
            ) : appointment.isCompleted ? (
              <p className="text-green-500 text-xs font-medium">Completed</p>
            ) : (
              <div className="flex max-lg:ml-10">
                <img
                  onClick={() => {
                    cancelAppointment(appointment._id);
                  }}
                  src={assets.cancel_icon}
                  alt=""
                  className="max-lg:w-4 w-8 cursor-pointer hover:scale-105 "
                />
                <img
                  onClick={() => {
                    completeAppointment(appointment._id);
                  }}
                  src={assets.tick_icon}
                  alt=""
                  className="max-lg:w-4 w-8 cursor-pointer hover:scale-105"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorAppointments;
