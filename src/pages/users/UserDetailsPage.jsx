import React from "react";
import profileImg from "../../assets/profile1.png";

export const UserDetailsPage = () => {
  return (
    <div className=" flex w-full p-10 h-screen ">
      <div className="rounded-md w-1/4 p-5 bg-sky-500 h-fit">
        <img className=" rounded-lg" src={profileImg} alt=""></img>
        <h1 className=" mt-5 font-semibold text-lg">Name: user name</h1>
        <p>Email:asdfa@gmail.com</p>
      </div>
      <div className=" w-3/4 p-5">
        <h1 className=" font-bold text-2xl">About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          itaque quasi vero unde nostrum, libero voluptatem quisquam ut
          necessitatibus, reprehenderit impedit corrupti possimus optio
          voluptate ipsam est facilis hic! Nostrum.
        </p>
      </div>
    </div>
  );
};
