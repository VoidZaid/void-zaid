import { FC } from "react";
// @ts-ignore
import AOS from "aos";

interface Formation {
   date: string;
   institution: string;
   profession: string;
   icon: any;
   resume: string;
}
const FormationCard: FC<Formation> = ({
   date,
   institution,
   profession,
   icon: Icon,
   resume,
}) => {
   return (
      <div className="group cursor-default">
         <div
            className=" flex flex-col border-spacing-3 p-3 rounded bg-slate-800/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
            sm:flex-row sm:bg-inherit sm:shadow-none sm:gap-6 transition-all ease-in duration-75
                  sm:group-hover:bg-slate-800/50 sm:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
                  "
         >
            <p
               className="italic text-sm
            sm:w-1/4 md:w-1/5"
            >
               {date}
            </p>
            <div className="sm:w-3/4 md:w-4/5 overflow-hidden">
               <p className="">{institution}</p>
               <h3 className="hover:text-teal-300 group-hover:text-teal-300 text-slate-200 font-bold pb-6 sm:pb-0">
                  {profession}
               </h3>
               <div
                  data-aos="fade-left"
                  data-aos-duration="600"
                  data-aos-easing="ease-in-out"
                  data-aos-anchor-placement="top-center"
                  data-aos-delay=""
                  data-aos-offset="-300"
                  data-aos-once="true"
               >
                  <Icon
                     className="fill fill-slate-200 pb-4 mx-auto h-32 
               sm:h-20 sm:py-1 lg:py-4 lg:h-28"
                  />
               </div>
               <p>{resume}</p>
            </div>
         </div>
      </div>
   );
};

export default FormationCard;
