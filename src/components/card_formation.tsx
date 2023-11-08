import { FC} from "react";

interface Formation {
   date: string;
   institution: string;
   profession: string;
   icon:any;
   resume: string;
}
const FormationCard: FC<Formation> = ({
   date,
   institution,
   profession,
   icon:Icon,
   resume,
}) => {
   return (
      <div className="group ">
         <div
            className=" flex flex-col border-spacing-3 p-3 rounded bg-slate-800/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] 
                  lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]"
         >
            <p className="italic text-sm">{date}</p>
            <p className="">{institution}</p>
            <h3 className="hover:text-teal-300 text-slate-200 font-bold pb-6">
               {profession}
            </h3>
               <Icon className="fill fill-slate-200 pb-4" height="150" />
            <p>{resume}</p>
         </div>
      </div>
   );
};

export default FormationCard;
