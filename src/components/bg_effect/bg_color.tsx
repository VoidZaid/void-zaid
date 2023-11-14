// import React from "react";

const BgColor = ({className}:{className?:string}) => {
   return (
      <div
         aria-hidden="true"
         className={`absolute items-end inset-0 w-full h-full bg-[#020314] opacity-80 ${className}`}
      ></div>
   );
};

export default BgColor;
