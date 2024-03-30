import * as React from "react";
import { Link } from "react-router-dom";
import img from "./../../assets/user.png";

export default function RoleCard({ landfill }) {
//   console.log("hi",landfill);
  return (
    <div class="  flex  items-center w-full  bg-white border border-gray-100 rounded-lg shadow   hover:bg-gray-200">
      <div class="  w-full">
        <div class="p-5">
          <b>
            <h1 class="mb-1">Role Id: {landfill.lfId}</h1>
            <h4 class="mb-1">Role: {landfill.capacity}</h4>
            <h4 class="mb-1">Role Details: {landfill.coordinate}</h4>
            <h4 class="mb-1">
              Permission Assigning : {landfill.operationTimespan}
            </h4>
          </b>
          <Link to={`/rbac/roles/${landfill.lfId}/permissions`}>
            <div class="text-sm w-28 rounded-sm text-blue-800 bg-gray-300 hover:bg-blue-700 hover:text-white text-center">
              <b>More Info</b>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
