import * as React from "react";
import { Link } from "react-router-dom";
import img from "./../../assets/user.png";
import ReadMoreOutlinedIcon from "@mui/icons-material/ReadMoreOutlined";
import { Button } from "@mui/material";

export default function StsCard({ sts }) {
  console.log(sts);
  return (
    <div class="  flex  items-center w-full  bg-white border border-gray-100 rounded-lg shadow   hover:bg-gray-200">
      <img
        className="ml-5 mr-5 rounded-md object-cover rounded-t-lg  w-1/4"
        src={img}
        alt="Photo"
      />
      <div class="flex justify-between w-full">
        <div class="p-5">
          <b>
            <h1 class="mb-1">Name: {sts.stsName}</h1>
            <h4 class="mb-1">Type: {sts.wardNum}</h4>
            <h4 class="mb-1">Phone Number: {sts.capacity}</h4>
            <h4 class="mb-1">Email: {sts.coordinate}</h4>
            <h4 class="mb-1">Roles: {sts.managers}</h4>
          </b>
          <Link to={`/sts/${sts.id}`}>
            <Button
              variant="contained"
              className="w-24"
              endIcon={<ReadMoreOutlinedIcon />}
            >
              More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
