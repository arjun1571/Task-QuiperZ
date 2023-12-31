import React from "react";

const User = ({user}) => {
    const {name,img,des,time}=user
  return (
    <div className="flex p-3 mt-4 shadow-xl rounded-lg border hover:bg-[#E7E7E7] ">
      <img className="h-12 w-12" src={img} alt="" />
      <div className="mx-4">
        <h1 className="font-semibold text-xl text-[#0967AF]" >{name}</h1>
        <p className="text-justify">{des}</p>
        <p className="font-semibold">TimeZone: {time}</p>
      </div>
    </div>
  );
};

export default User;
