import {FC} from "react";
type circle = {
   className?: string
}
const bgCircle :FC<circle> = ({ className}) => {
   return (
      <>
         <div
            aria-hidden="true"
            className={`absolute h-full inset-0 flex items-end lg:justify-start lg:items-start`}
         >
            <div
               aria-hidden="true"
               className={`w-full rotate-[135deg] h-48 m-auto blur-xl bg-radialGradient from-cyan-400 via-blue-600 to-purple-800 rounded-[50%] md:w-[30rem] md:h-[30rem] md:blur-3xl
               sm:none lg:w-full lg:h-48 lg:rotate-45 lg:ml-96 lg:my-0 ${className}`}
            ></div>
         </div>
      </>
   );
};

export default bgCircle;
