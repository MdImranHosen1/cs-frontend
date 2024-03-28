import * as React from "react";
import UserCard from "./UserCard";

import { UserFrom } from "./UserFrom";
import { useSelector } from "react-redux";

export const UsersPage = () => {
  const data = useSelector((state) => state.users);
  const users = data.data;
  console.log(users);

  return (
    <div className="w-screen flex">
      <div className=" w-1/4 p-5">
        <UserFrom />
      </div>
      <div className=" w-3/4 p-5">
        <div className=" w-full mb-5">
          {users.map((value) => {
            return <UserCard users={value} />;
          })}
        </div>
      </div>
    </div>
  );
};
