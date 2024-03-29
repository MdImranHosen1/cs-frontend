import React, { useEffect, useState } from "react";
import profileImg1 from "./../../assets/user.png";
import { Link, useParams } from "react-router-dom";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Button } from "@mui/material";
import { VehiclesForm } from "./VehiclesForm";

export const VehiclesDetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    id: 1,
    userType: "Type1",
    userName: "user1",
    userPassword: "pass123",
    userRoles: ["role1", "role2"],
    userPhone: "1234567890",
    userEmail: "user1@example.com",
  });

  const [viewModel, setViewModel] = useState(false);

  // const getUserData=async()=>{
  //   const response = await axios.get('http://localhost:5000/users');
  //   setData(response.data);
  // }

  // useEffect(() => {
  //   getUserData();
  //

  // }, []);

  const onDeleteUser = () => {
    const isConfirmed = window.confirm("Do you want to delete the vehicles?");
    if (isConfirmed) {
      // Proceed with user deletion
    } else {
      // User cancelled deletion
    }
  };

  return (
    <div className=" flex w-full p-10 h-full ">
      <div className="rounded-md w-1/4 p-5 bg-sky-500 h-full">
        <img className=" rounded-lg" src={profileImg1} alt=""></img>
        <h1 className=" mt-5 font-semibold text-lg text-center ">
          Name: {data.userName}
        </h1>
      </div>
      <div className=" w-3/4 p-5">
        <h1 className=" font-bold text-2xl ml-5">About </h1>
        <div className="p-6  ">
          <b>
            <h1 className="mb-1">Name :{data.userName}</h1>
            <h4 className="mb-1">Type :{data.userType}</h4>
            <h4 className="mb-1">Phone Number :{data.userPhone}</h4>
            <h4 className="mb-1">Email : {data.userEmail}</h4>
            <h4 className="mb-1">Roles :{data.userRoles}</h4>
          </b>

          <VehiclesForm update={1} user={data} />

          <div className=" ml-52">
            <Button
              variant="contained"
              color="error"
              onClick={onDeleteUser}
              startIcon={<DeleteForeverOutlinedIcon />}
            >
              Delete Vehicles
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
