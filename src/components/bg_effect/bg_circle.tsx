import {FC} from "react";
type circle = {
   className?: string,
   classFather?:string
}
const bgCircle :FC<circle> = ({ className, classFather}) => {
   return (
      <>
         <div
            aria-hidden="true"
            className={`absolute h-full inset-0 flex items-end lg:justify-start lg:items-start ${classFather}`}
         >
            <div
               aria-hidden="true"
               className={`w-4/5 rotate-[135deg] h-48 m-auto blur-xl bg-radialGradient from-cyan-400 via-blue-600 to-purple-800 rounded-[50%] md:w-[30rem] md:h-[30rem] md:blur-3xl
               lg:w-full lg:h-48 lg:rotate-45 lg:ml-96 lg:my-0 ${className}`}
            ></div>
         </div>
      </>
   );
};

export default bgCircle;
