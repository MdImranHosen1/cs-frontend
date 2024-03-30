import React, { useEffect } from "react";
import profileImg1 from "./../../assets/user.png";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { getUserById } from "../../redux/slices/usersSlice";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { UserForm } from "./UserForm";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Add from "@mui/icons-material/Add";
import { TransactionForm } from "../../components/TransactionForm";
import { deleteUserById } from "./../../redux/slices/usersSlice";

export const UserDetailsPage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.data[0]);

  const userType = useSelector((state) => state.userType?.userData?.userType);

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch, userId]);

  if (!user) {
    return (
      <div>
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      </div>
    );
  }

  const onDeleteUser = () => {
    const isConfirmed = window.confirm("Are you confirm to delete the user?");
    if (isConfirmed) {
      console.log("isConfirmed", isConfirmed, userId);
      dispatch(deleteUserById(userId));
      navigate("/users");
      window.location.reload();
    }
  };

  const onAddBill = () => {};

  const onAddTransaction = () => {};

  return (
    <div>
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
              <h4 className="mb-1">STS/Lanfill :{user.stsOrLandfillNum}</h4>
            </b>

            <UserForm update={1} user={user} />

            <div className=" mt-16 w-72">
              <Button
                variant="contained"
                className="w-72"
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
      <div className="p-10">
        {userType === "Landfill Manager" ? (
          <Button variant="contained" startIcon={<Add />}>
            Add Bill
          </Button>
        ) : (
          ""
        )}

        {userType === "STS Manager" ? (
          <Button
            variant="contained"
            onClick={onDeleteUser}
            startIcon={<Add />}
          >
            Add Transaction
          </Button>
        ) : (
          ""
        )}

        <TransactionForm data={user} />
      </div>
    </div>
  );
};
