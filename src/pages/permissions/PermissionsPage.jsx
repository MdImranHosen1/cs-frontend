import * as React from "react";

import { PermissionForm } from "./PermissionForm";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { useEffect } from "react";
import PermissionCard from "./PermissionCard";
import { getPermissions } from "./../../redux/slices/permissionSlice";

export const PermissionsPage = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.permissions);
  const permissions = data?.data || [];;

  useEffect(() => {
    dispatch(getPermissions());
  }, [dispatch]);

  return (
    <div className="w-screen flex">
      <div className=" w-1/4 p-5">
        <PermissionForm />
      </div>
      <div className=" w-3/4 p-5">
        {permissions.map((value) => {
          return (
            <div className=" w-full mb-1 pr-3">
              <PermissionCard permission={value} />;
            </div>
          );
        })}
      </div>
    </div>
  );
};
