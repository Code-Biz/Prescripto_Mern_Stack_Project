/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const DoctorContext = createContext();

const DoctorContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const doctorEndpoint = backendUrl + "/api/doctor/";
  const [dToken, setDToken] = useState(
    localStorage.getItem("dToken") ? localStorage.getItem("dToken") : "",
  );

  //  ******************************************************************************
  //             GETTING APPOINTMENTS FOR DOCTOR FROM /API/DOCTORAPPOINTMENTS
  //  ______________________________________________________________________________
  const [appointments, setAppointments] = useState([]);
  const getAppointments = async () => {
    try {
      const { data } = await axios.get(
        doctorEndpoint + "appointments",

        { headers: { dToken } },
      );

      if (data.success) {
        setAppointments(data.appointmentsData);
        console.log(data.appointmentsData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  //  ********************************************************************
  //       AXIOS METHODS TO MARK APPOINTMENT AS COMPLETED/CANCELLED
  //  ____________________________________________________________________
  const completeAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        doctorEndpoint + "complete-appointment",
        { appointmentId },
        { headers: { dToken } },
      );

      if (data.success) {
        toast.success(data.message);
        getAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        doctorEndpoint + "cancel-appointment",
        { appointmentId },
        { headers: { dToken } },
      );

      if (data.success) {
        toast.success(data.message);
        getAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const value = {
    backendUrl,
    dToken,
    setDToken,
    appointments,
    getAppointments,
    completeAppointment,
    cancelAppointment,
  };

  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  );
};

export default DoctorContextProvider;
