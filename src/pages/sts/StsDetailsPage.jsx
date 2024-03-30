import React, { useEffect, useState } from "react";
import profileImg from "../../assets/profile1.png";
import profileImg1 from "./../../assets/user.png";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";

import { StsFromVehiclesTrans } from "./StsFromVehiclesTrans";
import MyMap from "./../../components/MyMap";

export const StsDetailsPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({
    userId: 1,
    userType: "Type1",
    userName: "user1",
    userPassword: "pass123",
    userRoles: ["role1", "role2"],
    userPhone: "1234567890",
    userEmail: "user1@example.com",
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
  console.log(user);

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
              <h1 className="mb-1">Name :{user.userName}</h1>
              <h4 className="mb-1">Type :{user.userType}</h4>
              <h4 className="mb-1">Phone Number :{user.userPhone}</h4>
              <h4 className="mb-1">Email : {user.userEmail}</h4>
              <h4 className="mb-1">Roles :{user.userRoles}</h4>
            </b>
            <Button
              variant="contained"
              startIcon={<UpdateIcon />}
              onClick={toggleAddStsView}
            >
              Update STS
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className=" flex w-full p-10 h-full ">
          <div className="rounded-md w-1/4 p-5h-full">
            <StsFromVehiclesTrans />
          </div>
          <div className=" w-3/4 p-5"></div>
        </div>
      </div>
    </div>
  );
};
