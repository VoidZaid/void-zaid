import { FC } from "react";
import { Link } from "react-scroll";

type Btn_desktop = {
   title: string;
   id: string;
};

const Btn_desktop: FC<Btn_desktop> = ({ title, id }) => {
   // // Here, it's used to register scroll events and update scrollSpy when the component mounts.
   return (
      <li className="group flex rounded-lg font-semibold text-slate-400">
         <Link
            to={id}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-20}
            duration={750}
            className="flex items-center px-3 py-1 xl:py-1 2xl:py-2 text-xs hover:text-slate-200 lg:uppercase cursor-pointer"
         >
            <span className="w-8 h-[1px] bg-slate-600 transition-all mr-2 group-hover:w-16 group-hover:bg-slate-200 effect_line"></span>
            <span className="tracking-widest group-hover:text-slate-200 effect_text">
               {title}
            </span>
         </Link>
      </li>
   );
};

export default Btn_desktop;
