// import React from "react";

const BgEffect = ({className, item}:{className:string, item:string}) => {
   return (
      <div
         aria-hidden="true"
         className={`absolute h-full inset-0 flex ${item} ${className}`}
      >
         <div
            aria-hidden="true"
            className="bg-layers bg-scale w-96 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-800 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"
         ></div>
      </div>
   );
};

export default BgEffect;
