// import { useEffect } from "react";
import { useForm } from "react-hook-form";

type formData={
   name: string,
   email:string,
   message:string
}

const FormContact = ({ className }: { className: string }) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<formData>();

   const onSubmit = (data:formData) => {
      console.log(data);
   };
   // console.log(errors);
   // console.log(errors.email?.type);
   return (
      <form action="" className={`${className}`} onSubmit={handleSubmit(onSubmit)}>
         <fieldset className="w-full">
            <div className={`relative pb-4 mb-2 md:pb-5 w-full  lg:mb-1`}>
               <input
                  type="text"
                  id="name"
                  placeholder=" "
                  className="input"
                  {...register("name", {
                     required: {
                        value: true,
                        message: "el campo de nombre es requerido"
                     },
                     minLength:{
                        value: 3,
                        message: "el mínimo de caractéres de este campo es 3"
                     },
                     maxLength:{
                        value: 20,
                        message: "el máximo de caracteres de este campo es 20"
                     }
                  })}
               />
               {errors.name && (
                  <span className="span">*{errors.name?.message}</span>
               )}
               <label htmlFor="name" className="label">
                  Nombres
               </label>
            </div>
            <div className={`relative pb-4 mb-0 md:pb-5 lg:mb-1`}>
               <input
                  type="text"
                  id="email"
                  placeholder=" "
                  className="input"
                  {...register("email", {
                     required: {
                        value: true,
                        message: "*Correo es un campo requerido",
                     },
                     pattern: {
                        value: /^[a-zA-Z0-9._%+-]{2,30}@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message:
                           "usar el patron: correo@correo.com",
                     },
                  })}
               />
               {errors.email && (
                  <span className="span">{errors.email?.message}</span>
               )}
               <label htmlFor="email" className="label">
                  Correo
               </label>
            </div>
         </fieldset>
         <fieldset className="">
            <div className="relative pb-2 md:pb-2">
               <textarea
                  id="message"
                  placeholder=" "
                  className="pb-2 h-32 md:h-full md:pb-0 input resize-none"
                  {...register("message", {
                     required: {
                        value: true,
                        message: "el campo de mesaje es requerido"
                     },
                     minLength:{
                        value: 10,
                        message: "el campo debe tener un mínimo de 10 caractéres"
                     },
                     maxLength:{
                        value:100,
                        message:"el campo debe tener un máximo de 100 caractéres"
                     }
                  })}
               ></textarea>
               {errors.message && (
                  <span className="span">*{errors.message?.message}</span>
               )}
               <label htmlFor="message" className="label">
                  Mensaje
               </label>
            </div>
         </fieldset>
         <input
            type="submit"
            value="Enviar mensaje"
            className="bg-teal-500/50 w-full px-3 py-1 rounded-lg text-teal-700 font-bold cursor-pointer hover:bg-teal-500 hover:text-teal-900 transition-all ease-in-out duration-300 md:mt-0"
         />
      </form>
   );
};

export default FormContact;
