import React, { useEffect, useState } from "react";
import profileImg from "../../assets/profile1.png";
import profileImg1 from "./../../assets/user.png";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";
import { LandfillFormBilling } from "./LandfillFormBilling";
import MyMap from "./../../components/MyMap";

export const LandfillDetailsPage = () => {
  const { userId } = useParams();
  const [landfill, setlandfill] = useState({
    lfId: 1,
    capacity: 500,
    coordinate: "40.7128° N, 74.0060° W",
    operationTimespan: "Mon-Fri 8AM-6PM",
    userId: 1,
  });

  const [viewStsModel, setViewStsModel] = useState(false);
  const toggleAddStsView = () => {
    setViewStsModel(!viewStsModel);
  };

  // const getUserData=async()=>{
  //   const response = await axios.get('http://localhost:5000/users');
  //   setData(response.data);
  // }

  // useEffect(() => {
  //   getUserData();
  //

  // }, []);

  return (
    <div>
      <div className=" flex w-full p-10 h-full ">
        <div className="rounded-md w-1/2 ">
          <MyMap />
        </div>
        <div className=" w-3/4 p-5">
          <h1 className=" font-bold text-2xl ml-5">About </h1>
          <div className="p-6  ">
            <b>
              <h1 class="mb-1">Landfill Id: {landfill.lfId}</h1>
              <h4 class="mb-1">Capacity: {landfill.capacity}</h4>
              <h4 class="mb-1">Coordinate Number: {landfill.coordinate}</h4>
              <h4 class="mb-1">
                Operation Timespan: {landfill.operationTimespan}
              </h4>
              <h4 class="mb-1">Landfill Manager Id: {landfill.userId}</h4>
            </b>
            <Button
              variant="contained"
              startIcon={<UpdateIcon />}
              onClick={toggleAddStsView}
            >
              Update Landfill
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className=" flex w-full p-10 h-full ">
          <div className="rounded-md w-1/4 p-5h-full">
            <LandfillFormBilling />
          </div>
          <div className=" w-3/4 p-5"></div>
        </div>
      </div>
    </div>
  );
};
