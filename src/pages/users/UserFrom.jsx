import React, { useState } from "react";
import { Button } from "@mui/material";

import { postUser } from "../../redux/slices/usersSlice";
import { useDispatch } from "react-redux";

export const UserFrom = () => {
  const [viewUserModel, setViewUserModel] = useState(false);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Unassigned");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const toggleAddUserView = () => {
    setViewUserModel(!viewUserModel);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Name:", name);
    console.log("Password:", password);
    console.log("User Type:", userType);
    console.log("Phone:", phone);
    console.log("Email:", email);
    const userData = {
      userName: name,
      userPassword: password,
      userType: userType,
      userRoles: [],
      userPhone: phone,
      userEmail: email,
    };
    // console.log(userData);

    dispatch(postUser(userData));

    setName("");
    setPassword("");
    setUserType("Unassigned");
    setPhone("");
    setEmail("");
    toggleAddUserView();
  };

  return (
    <div>
      <Button
        variant="contained"
        className="w-full"
        onClick={toggleAddUserView}
      >
        Add User
      </Button>

      {viewUserModel && (
        <div className=" fixed top-0 right-0 bottom-0 left-0 z-100 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Create New Product
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
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Type user name"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Type user password"
                    required
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="userType"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    User type
                  </label>
                  <select
                    id="userType"
                    name="userType"
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  >
                    <option value="Unassigned">Unassigned</option>
                    <option value="Landfill Manager">Landfill Manager</option>
                    <option value="STS Manager">STS Manager</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Phone number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Type user phone number"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Type user Email"
                    required
                  />
                </div>
              </div>
              <Button variant="contained" className="w-full" type="submit">
                Add User
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
