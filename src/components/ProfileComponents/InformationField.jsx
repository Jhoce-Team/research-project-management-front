import React from "react";

const InformationField = ({title, information }) => {
  return (
    <div className="flex flex-col sm:mx-5">
        <div className='font-bold'>{title}</div>
        <div className='px-2 py-1 border-b-2 border-color2'>{information}</div>
    </div>
  );
};

export default InformationField;
