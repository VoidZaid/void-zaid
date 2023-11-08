// import React from "react";

const bgCircle = ({ z_index}: { z_index:string, width?:string, height?:string }) => {
   return (
      <>
         <div
            aria-hidden="true"
            className={`absolute h-full inset-0 flex items-end`}
         >
            <div
               aria-hidden="true"
               className={`bg-layers bg-scale w-96 h-48 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-800 rounded-[50%] md:w-[30rem] md:h-[30rem] md:blur-3xl ${z_index}
               sm:none`}
            ></div>
         </div>
      </>
   );
};

export default bgCircle;
