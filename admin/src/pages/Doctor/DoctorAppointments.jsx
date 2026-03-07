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
            className="flex flex-wrap justify-between  sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-5  items-center text-gray-500 px-6 py-3 border-b hover:bg-primary hover:text-white"
          >
            <p className="max-sm:hidden">{index + 1}</p>
            <div className="flex items-center justify-start gap-2 ">
              <img
                src={appointment.userData.image}
                alt=""
                className="w-8 rounded-full "
              />
              <p className="">{appointment.userData.name}</p>
            </div>
            <div>
              <p className=" text-xs inline border border-primary px-2 rounded-full">
                Online
              </p>
            </div>
            <p className=" max-sm:hidden">
              {calculateAge(appointment.userData.dob)}
            </p>
            <p>
              {slotDateFormatted(appointment.slotDate)}, {appointment.slotTime}
            </p>
            <p>
              {currency}
              {appointment.amount}
            </p>

            {appointment.cancelled ? (
              <p className="text-red-400 text-xs font-medium">Cancelled</p>
            ) : appointment.isCompleted ? (
              <p className="text-green-500 text-xs font-medium">Completed</p>
            ) : (
              <div className="flex ">
                <img
                  onClick={() => {
                    cancelAppointment(appointment._id);
                  }}
                  src={assets.cancel_icon}
                  alt=""
                  className=" w-8 cursor-pointer hover:scale-105 "
                />
                <img
                  onClick={() => {
                    completeAppointment(appointment._id);
                  }}
                  src={assets.tick_icon}
                  alt=""
                  className=" w-8 cursor-pointer hover:scale-105"
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
