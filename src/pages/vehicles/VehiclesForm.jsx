import React, { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { postVehicle } from "../../redux/slices/vehiclesSlice";
import UpdateIcon from "@mui/icons-material/Update";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";

export const VehiclesForm = ({ update = 0, vehicle = {} }) => {
  const [viewUserModel, setViewUserModel] = useState(false);
  
  const dispatch = useDispatch();
  const [regNum, setRegNum] = useState("");
  const [type, setType] = useState("Open Truck");
  const [capacity, setCapacity] = useState("3 ton");
  const [costLoaded, setCostLoaded] = useState("");
  const [costUnloaded, setCostUnloaded] = useState("");
  const [stsNum, setStsNum] = useState("");

  const toggleAddUserView = () => {
    document.body.style.overflow = viewUserModel ? "auto" : "hidden";
    setViewUserModel(!viewUserModel);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const vehicleData = {
      regNum: regNum,
      type: type,
      capacity: capacity,
      costLoaded: costLoaded,
      costUnloaded: costUnloaded,
      stsId: stsNum,
    };

    console.log(vehicleData);
    dispatch(postVehicle(vehicleData));

    // setRegNum("");
    // setType("Open Truck");
    // setCapacity("3 ton");
    // setCostLoaded("");
    // setCostUnloaded("");
    // setStsNum("");
    // toggleAddUserView();
  };

  return (
    <div>
      <div className="fixed w-1/4 pr-10">
        {update ? (
          <Button
            variant="contained"
            startIcon={<UpdateIcon />}
            className="w-auto"
            onClick={toggleAddUserView}
          >
            Update Vehicles
          </Button>
        ) : (
          <Button
            variant="contained"
            className="w-full"
            startIcon={<PersonAddAlt1OutlinedIcon />}
            onClick={toggleAddUserView}
          >
            Add Vehicle
          </Button>
        )}
      </div>

      {viewUserModel && (
        <div className="z-20  fixed top-0 right-0 bottom-0 left-0 z-100 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div
            style={{
              maxHeight: "calc(100vh - 20px)",
              overflowY: "auto",
              width: "80%",
              maxWidth: "800px",
            }}
            className=" bg-white rounded-lg shadow-lg p-6 max-h-full overflow-y-auto "
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Add new vehicle
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8"
                onClick={toggleAddUserView}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="regNum"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Registration Id
                  </label>
                  <input
                    type="text"
                    name="regNum"
                    id="regNum"
                    value={regNum}
                    onChange={(e) => setRegNum(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Type vehicles registratin id"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="type"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Vehicles type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  >
                    <option value="Open Truck">Open Truck</option>
                    <option value="Dump Truck">Dump Truck</option>
                    <option value="Compactor">Compactor</option>
                    <option value="Container Carrier">Container Carrier</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="capacity"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Vehicles capacity
                  </label>
                  <select
                    id="capacity"
                    name="capacity"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  >
                    <option value="3"> 3 ton</option>
                    <option value="5">5 ton</option>
                    <option value="7">7 ton</option>
                  </select>
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="costLoaded"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Fuel cost per kilometer - fully loaded
                  </label>
                  <input
                    type="number"
                    name="costLoaded"
                    id="costLoaded"
                    value={costLoaded}
                    onChange={(e) => setCostLoaded(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Fuel cost per kilometer - fully loaded"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="costUnloaded"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Fuel cost per kilometer - unloaded
                  </label>
                  <input
                    type="number"
                    name="costUnloaded"
                    id="costUnloaded"
                    value={costUnloaded}
                    onChange={(e) => setCostUnloaded(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Fuel cost per kilometer - unloaded"
                    required
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="stsNum"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    STS number
                  </label>
                  <input
                    type="text"
                    name="stsNum"
                    id="stsNum"
                    value={stsNum}
                    onChange={(e) => setStsNum(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter the STS number of the vehicle"
                    required
                  />
                </div>
              </div>
              <Button variant="contained" className="w-full" type="submit">
                Add Vehicles
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
