/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  //  ********************************************************************
  //             DESTRUCTURING, STATES AND VARIABLES HERE
  //  ____________________________________________________________________
  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currency = "$";

  //  ********************************************************************
  //             FUNCTIONS HERE
  //  ____________________________________________________________________
  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    return age;
  };

  const slotDateFormatted = (slotDate) => {
    const dateArray = slotDate.split("_");
    return (
      (dateArray[0] < 10 ? 0 + dateArray[0] : dateArray[0]) +
      " " +
      months[Number(dateArray[1])] +
      " " +
      dateArray[2]
    );
  };

  //  ********************************************************************
  //             USE EFFECTS HERE
  //  ____________________________________________________________________

  //  ********************************************************************
  //             VALUE OBJECT HERE
  //  ____________________________________________________________________
  const value = { calculateAge, slotDateFormatted, currency };
  return (
    <AppContext.Provider value={value}> {props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
