import {  FC, useRef } from "react";
import { ArrowRightUp } from "../../constants/icons/icons";

type Project = {
   title: string;
   url: string;
   resume: string;
   tecnologies?: string[];
   image: any;
   alt: string;
};

const CardProjects: FC<Project> = ({
   title,
   url,
   resume,
   tecnologies,
   image,
   alt,
}) => {
   const anchor = useRef<HTMLAnchorElement>(null);

   const handleClick = () => {
      // console.log(anchor.current)
      anchor.current?.click();
   };
   return (
      <div className="group cursor-pointer" onClick={handleClick}>
         <div
            className="group flex flex-col-reverse gap-6 border-spacing-3 p-3 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] transition-all ease-in duration-75
      sm:py-4 sm:flex-row sm:rounded sm:shadow-none sm:group-hover:bg-slate-800/50 sm:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]"
         >
            <figure className="sm:w-1/4">
               <img
                  id="image"
                  className="rounded border-2 border-slate-200/10 w-44 mx-auto hover:border-slate-200/20 group-hover:border-slate-200/20
               "
                  src={image}
                  alt={alt}
                  loading="lazy"
               />
            </figure>
            <div className="sm:w-3/4">
               <h3
                  className="font-bold text-slate-200 
                        hover:text-teal-400"
               >
                  <a ref={anchor} className="flex" href={url} target="_blank">
                     {title}
                     <ArrowRightUp />
                  </a>
               </h3>
               <p>{resume}</p>
               <ul className="flex flex-wrap text-xs gap-2 pt-2 font-bold text-teal-400">
                  {tecnologies?.map((e, id) => (
                     <li
                        key={id}
                        className="bg-teal-500/20 px-3 py-1 rounded-2xl"
                     >
                        <span>{e}</span>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default CardProjects;
