import React from "react";

const EditInformation = ({title}) => {
  return (
    <div className="flex flex-col sm:mx-5">
      <label className="font-bold">{title}</label>
      <input className="px-2 py-1 border-b-2 border-color2 outline-none bg-gray-200" />
    </div>
  );
};

export default EditInformation;
