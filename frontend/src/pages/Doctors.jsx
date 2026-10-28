import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filteredDocs, setFilteredDocs] = useState([]);
  const [showFilter, setShowFilters] = useState(false);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const applyFilters = () => {
    if (speciality) {
      setFilteredDocs(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilteredDocs(doctors);
    }
  };

  //The ApplyFilters Function/Effect is executed automatically everytime theres any change in the value of doctors or speciality.
  // When we move to the link doctors/dermatologist it means that we have provided a parameter i.e dermatologist which will be stored in the specialty variable of use parameter Hook defined above.
  // Now in that case, when the page will be loaded and the use effect runs, the condition apply filters will proceed toward the if condition in which the set filter docs filters the docu doctors that make the specialty if there is no perimeter provided on Visiting this link then all the doctors will be filtered. 
  // The same Scenario will run whenever we click upon the provided buttons for filtering the doctors. Because when we will click For example, the general physician button and on click event will trigger. In that event we are using the navigate hook to OPEN a link doctors/General Physician. So in that scenario a general physician parameter is being provided in the link.  
  // This General physician parameter will be stored into the specialty variable via the use Param hook and as we have performed an event so the use effect hope will trigger that apply filters function will filter the docs doctor's matching the. Parameter
  
  useEffect(() => {
    applyFilters();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialists</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* Left Paras Div */}
        <button
          className={`py-1 px-3 border rounded text-sm transition-alls sm:hidden ${
            showFilter ? "bg-primary text-white" : ""
          }`}
          onClick={() => setShowFilters((prev) => !prev)}
        >
          Filters
        </button>
        <div
          className={`${
            showFilter ? "flex" : "hidden sm:flex"
          } flex-col gap-3 text-sm text-gray-600`}
        >
          <p
            onClick={() =>
              speciality === "General Physician"
                ? navigate("/doctors")
                : navigate("/doctors/General Physician")
            }
            className={`w-[94vw] sm:w-auto py-2 pl-3 pr-15 border border-gray-300 rounded hover:scale-105 transition-all duration-300 cursor-pointer ${
              speciality === "General physician"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            General Physician
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className={`w-[94vw] sm:w-auto py-2 pl-3 pr-15 border border-gray-300 rounded hover:scale-105 transition-all duration-300 cursor-pointer ${
              speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            className={`w-[94vw] sm:w-auto py-2 pl-3 pr-15 border border-gray-300 rounded hover:scale-105 transition-all duration-300 cursor-pointer ${
              speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
            className={`w-[94vw] sm:w-auto py-2 pl-3 pr-15 border border-gray-300 rounded hover:scale-105 transition-all duration-300 cursor-pointer ${
              speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            className={`w-[94vw] sm:w-auto py-2 pl-3 pr-15 border border-gray-300 rounded hover:scale-105 transition-all duration-300 cursor-pointer ${
              speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
            className={`w-[94vw] sm:w-auto py-2 pl-3 pr-15 border border-gray-300 rounded hover:scale-105 transition-all duration-300 cursor-pointer ${
              speciality === "Gastroenterologist"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Gastroenterologist
          </p>
        </div>
        {/* RIGHT DOCTORS LIST DIV */}
        <div
          className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]
 gap-4 gap-y-6"
        >
          {filteredDocs.length > 0 ? (
            filteredDocs.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/appointments/${item._id}`)}
                className="w-fit border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] duration-300"
              >
                <img src={item.image} alt="" className="bg-blue-50" />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-center ">
                    <p
                      className={`w-2 h-2 ${item.available ? "bg-green-500" : "bg-red-400"}  rounded-full `}
                    ></p>
                    <p
                      className={`${item.available ? "text-green-500" : "text-red-400"}`}
                    >
                      {item.available ? "Available" : "Not Available"}
                    </p>
                  </div>
                  <p className="text-gray-900 font-medium">{item.name}</p>
                  <p className="text-gray-600 text-sm">{item.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center mt-20 text-2xl font-medium p-10 border rounded border-primary ">
              OOPS! <br />
              No Specialist Found ...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
