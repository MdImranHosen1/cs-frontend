import React, { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { postSts } from "../../redux/slices/stsSlice";

export const RolesForm = () => {
  const [viewStsModel, setViewStsModel] = useState(false);
  const dispatch = useDispatch();
  const [stsName, setStsName] = useState("");
  const [wardNum, setWardNum] = useState("");
  const [capacity, setCapacity] = useState("");
  const [coordinate, setCoordinate] = useState("");
  const [operationTimespan, setOperationTimespan] = useState("");
  const [managers, setManagers] = useState("");
  const [landfillId, setLandfillId] = useState(""); // Assuming this is fetched from another table

  const toggleAddStsView = () => {
    setViewStsModel(!viewStsModel);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const stsData = {
      landfillId: landfillId,
      stsName: stsName,
      wardNum: wardNum,
      capacity: capacity,
      coordinate: coordinate,
      operationTimespan: operationTimespan,
      managers: [managers],
    };
    console.log(stsData);

    dispatch(postSts(stsData));

    // Resetting the form fields
    setStsName("");
    setWardNum("");
    setCapacity("");
    setCoordinate("");
    setOperationTimespan("");
    setManagers("");
    setLandfillId("");
    toggleAddStsView();
  };

  return (
    <div>
      <div className="fixed w-1/4 pr-10">
        <Button
          variant="contained"
          className="w-full"
          onClick={toggleAddStsView}
        >
          Add Landfill
        </Button>
      </div>

      {viewStsModel && (
        <div className="z-20 fixed top-0 right-0 bottom-0 left-0 z-100 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div
            style={{
              maxHeight: "calc(100vh - 20px)",
              overflowY: "auto",
              width: "80%",
              maxWidth: "800px",
            }}
            className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Add new Landfill
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8"
                onClick={toggleAddStsView}
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
                    htmlFor="stsName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Landfill Name
                  </label>
                  <input
                    type="text"
                    name="stsName"
                    id="stsName"
                    value={stsName}
                    onChange={(e) => setStsName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Landfill name"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="capacity"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Landfill Capacity
                  </label>
                  <input
                    type="text"
                    name="capacity"
                    id="capacity"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Landfill capacity"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="coordinate"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Landfill Coordinate
                  </label>
                  <input
                    type="text"
                    name="coordinate"
                    id="coordinate"
                    value={coordinate}
                    onChange={(e) => setCoordinate(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Landfill coordinate"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="operationTimespan"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Landfill Operation Timespan
                  </label>
                  <input
                    type="time"
                    name="operationTimespan"
                    id="operationTimespan"
                    value={operationTimespan}
                    onChange={(e) => setOperationTimespan(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Landfill Operation Timespan"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="managers"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Land Managers
                  </label>
                  <input
                    type="text"
                    name="managers"
                    id="managers"
                    value={managers}
                    onChange={(e) => setManagers(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Landfill managers"
                    required
                  />
                </div>
              </div>
              <Button variant="contained" className="w-full" type="submit">
                Add Landfill
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};