import * as React from "react";
import { Link } from "react-router-dom";
import img from "./../../assets/user.png";
import MyMap from "./../../components/MyMap";

export default function LandfillCard({ landfill }) {
  console.log(landfill);
  return (
    <div class="  flex  items-center w-full  bg-white border border-gray-100 rounded-lg shadow   hover:bg-gray-200">
      <div className=" rounded-md object-cover rounded-t-lg h-full w-1/3 p-2">
        <MyMap />
      </div>

      <div class="flex justify-between w-full">
        <div class="p-5">
          <b>
            <h1 class="mb-1">Landfill Id: {landfill.lfId}</h1>
            <h4 class="mb-1">Capacity: {landfill.capacity}</h4>
            <h4 class="mb-1">Coordinate Number: {landfill.coordinate}</h4>
            <h4 class="mb-1">
              Operation Timespan: {landfill.operationTimespan}
            </h4>
            <h4 class="mb-1">Landfill Manager Id: {landfill.userId}</h4>
          </b>
          <Link to={`/landfill/${landfill.lfId}`}>
            <div class="text-sm w-28 rounded-sm text-blue-800 bg-gray-300 hover:bg-blue-700 hover:text-white   text-center">
              <b>More Info</b>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
