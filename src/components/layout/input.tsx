import {FC} from "react";
interface input{
   type:string,
   label:string,
   className:string,
   classFather?:string
}

const Input:FC<input> = ({type, label, className, classFather}) => {
   return (
      <div className={`relative ${className}`}>
         {
            type!="textarea"?
            <input
               type={type}
               id={label}
               placeholder=" "
               className="rounded-sm w-full py-1 px-2 outline-none border-slate-150 border-2 outline-offset-2 focus:border-teal-400 transition-all ease-linear duration-150 input"
            />
            :
            <textarea name="" id={label} placeholder=" " className="rounded-sm w-full py-1 px-2 outline-none border-slate-150 border-2 outline-offset-2 focus:border-teal-400 transition-all ease-linear duration-150 input resize-none h-full"></textarea>
         }
         <label htmlFor={label} className="text-slate-400 label">
            {label}
         </label>
      </div>
   );
};

export default Input;
