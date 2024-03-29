import React, { useEffect, useState } from "react";
import profileImg1 from "./../../assets/user.png";
import { Link, useParams } from "react-router-dom";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { UserForm } from "./RoleForm";
import { Button } from "@mui/material";

export const RoleDetailsPage = () => {
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

  // const getUserData=async()=>{
  //   const response = await axios.get('http://localhost:5000/users');
  //   setData(response.data);
  // }

  // useEffect(() => {
  //   getUserData();
  //

  // }, []);

  const onDeleteUser = () => {
    const isConfirmed = window.confirm("Do you want to delete the user?");
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
          Name: {user.userName}
        </h1>
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

          <UserForm update={1} user={user} />

          <div className=" ml-44">
            <Button
              variant="contained"
              className="w-40"
              color="error"
              onClick={onDeleteUser}
              startIcon={<DeleteForeverOutlinedIcon />}
            >
              Delete User
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
