import {FC} from "react";
import {Link, Element} from "react-scroll";


type Btn_desktop={
   title: string,
   id:string
}

const Btn_desktop:FC<Btn_desktop> = ({title, id}) => {
   return (
      <li
         className="group flex rounded-lg font-semibold text-slate-400"
      >
         <a href={id} className="flex items-center px-3 py-2 text-sm hover:text-slate-200 lg:uppercase">
            <span className="w-8 h-[1px] bg-slate-600 transition-all mr-2 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 "></span>
            <span className="tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200">{title}</span>
            
         </a>
      </li>
   );
};

export default Btn_desktop;
