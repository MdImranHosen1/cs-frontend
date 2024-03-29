import * as React from "react";
import { RoleForm } from "./RoleForm";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRoles } from "@testing-library/react";
import RoleCard from "./RoleCard";

export const RolesPage = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.roles);
  const users = data.data;

  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

  return (
    <div className="w-screen flex">
      <div className=" w-1/4 p-5">
        <RoleForm />
      </div>
      <div className=" w-3/4 p-5">
        {users.map((value) => {
          return (
            <div className=" w-full mb-1 pr-3">
              <RoleCard users={value} />;
            </div>
          );
        })}
      </div>
    </div>
  );
};
