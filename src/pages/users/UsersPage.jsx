import * as React from "react";

import { Link } from "react-router-dom";
import UserCard from "./UserCard";

import { UserFrom } from "./UserFrom";

export const UsersPage = () => {
  const Items = Array.from({ length: 12 }, (_, index) => index);

  return (
    <div className="w-screen flex">
      <div className=" w-1/4 p-5">
        <UserFrom />
      </div>
      <div className=" w-3/4 p-5">
        <div className=" w-full mb-5">
          <UserCard></UserCard>
        </div>
        <div className=" w-full mb-5">
          <UserCard></UserCard>
        </div>
        <div className=" w-full mb-5">
          <UserCard></UserCard>
        </div>
      </div>
    </div>
  );
};
