import React from "react";

const Footer = () => {
   return (
      <footer className="bg-slate-950">
         <section>

         </section>

         {/* bar footer */}
         <section className="mx-auto max-w-7xl flex justify-between py-8">
            <span className="block text-gray-300">
               René Díaz &copy; 2023 | todos los derechos reservados
            </span>
            <div className="flex gap-10">
               <span className="flex justify-between text-white">
                  <a href="#" className="font-semibold">
                     Terminos de uso{" "}
                  </a>
               </span>
               <span className="flex justify-between text-white">
                  <a href="#" className="font-semibold">
                     {" "}
                     Política de privacidad
                  </a>
               </span>
            </div>

            <span className="block text-gray-300">
               ¿Necesitas ayuda?{" "}
               <a href="#" className="font-semibold text-white">
                  {" "}
                  Contactanos
               </a>
            </span>
         </section>
      </footer>
   );
};

export default Footer;
