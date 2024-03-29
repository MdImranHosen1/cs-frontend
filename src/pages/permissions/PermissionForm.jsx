import React, { useState } from "react";
import { Button } from "@mui/material";
import { postUser } from "../../redux/slices/usersSlice";
import { useDispatch } from "react-redux";
import UpdateIcon from "@mui/icons-material/Update";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";

export const PermissionForm = ({ update = 0, user = {} }) => {
  console.log(user, update);
  const [viewUserModel, setViewUserModel] = useState(false);
  const dispatch = useDispatch();
  const [permissionName, setPermissionName] = useState(
    update ? user.permissionName : ""
  );
  const [permissionGranted, setPermissionGranted] = useState(
    update ? user.permissionGranted : false
  );
  const [permissionSection, setPermissionSection] = useState(
    update ? user.permissionSection : ""
  );
  const [details, setDetails] = useState(update ? user.details : "");

  const toggleAddView = () => {
    setViewUserModel(!viewUserModel);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      permissionName: permissionName,
      permissionGranted: permissionGranted,
      permissionSection: permissionSection,
      details: details,
    };

    dispatch(postUser(userData));

    setPermissionName("");
    setPermissionGranted(false);
    setPermissionSection("");
    setDetails("");
    toggleAddView();
  };

  return (
    <div>
      <div className="fixed w-1/4 ">
        {update ? (
          <Button
            variant="contained"
            startIcon={<UpdateIcon />}
            className="w-auto"
            onClick={toggleAddView}
          >
            Update Permission
          </Button>
        ) : (
          <Button
            variant="contained"
            className="w-full"
            startIcon={<PersonAddAlt1OutlinedIcon />}
            onClick={toggleAddView}
          >
            Permission
          </Button>
        )}
      </div>

      {viewUserModel && (
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
                {update ? "Update Permission" : "Add new Permission"}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8"
                onClick={toggleAddView}
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
                    htmlFor="permissionName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Permission Name
                  </label>
                  <input
                    type="text"
                    name="permissionName"
                    id="permissionName"
                    value={permissionName}
                    onChange={(e) => setPermissionName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Type permission name"
                    required
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="permissionGranted"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Permission Granted
                  </label>
                  <select
                    id="permissionGranted"
                    name="permissionGranted"
                    value={permissionGranted}
                    onChange={(e) => setPermissionGranted(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  >
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="permissionSection"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Permission Section
                  </label>
                  <input
                    type="text"
                    name="permissionSection"
                    id="permissionSection"
                    value={permissionSection}
                    onChange={(e) => setPermissionSection(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Type permission section"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="details"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Details
                  </label>
                  <input
                    type="text"
                    name="details"
                    id="details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Type details"
                    required
                  />
                </div>
              </div>
              <Button variant="contained" className="w-full" type="submit">
                {update ? "Update Permission" : "Add new Permission"}
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
