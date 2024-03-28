import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/truckDriver.png";

export const VehicleCard = ({ vehicles }) => {
  console.log(vehicles);
  return (
    <div class="  flex  items-center w-full  bg-white border border-gray-200 rounded-lg shadow   hover:bg-gray-200">
      <img
        class="ml-5 mr-5 rounded-md object-cover  rounded-t-lg h-40 w-40"
        src={logo}
        alt="logo"
      />
      <div class="flex flex-col justify-between leading-normal">
        <div className="p-6  ">
          <b>
            <h1 className="mb-1">Name :John Doe</h1>
            <h4 className="mb-1">Type :Dump Truck</h4>
            <h4 className="mb-1">Registration Number :15451541</h4>
            <h4 className="mb-1">Capacity : 3 Ton</h4>
            <h4 className="mb-1">Fuel cost fully loaded :3 Liter</h4>
            <h4 className="mb-1"> Fuel cost unloaded :2 Liter</h4>
          </b>
        </div>
      </div>
    </div>
  );
};
