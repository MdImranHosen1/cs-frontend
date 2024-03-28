import React from "react";
import { VehicleCard } from "./VehicleCard";
import { useDispatch, useSelector } from "react-redux";

export const VehiclesAllPage = () => {
  const data = useSelector((state) => state.vehicles);
  const vehicles = data.data;
  
  return (
    <div>
      {
        vehicles.
      }
      <VehicleCard></VehicleCard>
    </div>
  );
};
