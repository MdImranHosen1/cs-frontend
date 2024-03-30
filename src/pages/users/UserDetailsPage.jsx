import React, { useEffect } from "react";
import profileImg1 from "./../../assets/user.png";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { getUserById, deleteUserById } from "../../redux/slices/usersSlice";
import { UserForm } from "./UserForm";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

export const UserDetailsPage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch, userId]);

  const user = useSelector((state) => state.users.data[0]); // Assuming single user data
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  const onDeleteUser = () => {
    const isConfirmed = window.confirm("Do you want to delete the user?");
    if (isConfirmed) {
      dispatch(deleteUserById(userId)).then(() => {
        // Redirect to user list page after deletion
        navigate("/users");
      });
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
