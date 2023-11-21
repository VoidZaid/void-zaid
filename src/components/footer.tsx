import { Logo } from "./icons";
import { info_menu } from "./constants_info";
import { Link } from "react-scroll";
import Section from "./layout/section";
import Input from "./layout/input";

const Footer = () => {
   return (
      <footer className="bg-slate-100">
         <Section
            id="contact"
            className="max-w-screen-xl px-16 py-10 sm:py-16 sm:px-28 md:px-28 lg:bg-slate-100 lg:px-40 lg:py-36 lg:mx-auto"
         >
            <h2 className="font-bold text-slate-600 mx-auto mb-8 lg:text-2xl lg:mb-20">
               CONTÁCTAME
            </h2>
            <div className="md:flex md:gap-8">
               <div className="hidden md:flex md:w-1/4 md:pb-8 ">
                  <Logo className="h-20" />
               </div>
               <div className="hidden lg:block lg:w-1/4">
                  <nav>
                     <ul className="lg:text-xl lg:font-bold lg:flex lg:flex-col lg:text-slate-800 lg:gap-2">
                        {info_menu.map((e, id) => (
                           <li
                              key={id}
                              className="cursor-pointer hover:text-slate-600"
                           >
                              <Link
                                 to={e.id}
                                 activeClass="active"
                                 spy={true}
                                 smooth={true}
                                 duration={500}
                              >
                                 {e.title}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </nav>
               </div>
               <form action="" className="md:w-2/3 lg:w-2/4">
                  <fieldset className="">
                     <Input
                        type="text"
                        label="nombres"
                        className="pb-4 md:pb-5"
                     />
                     <Input
                        type="email"
                        label="correo"
                        className="pb-4 md:pb-5"
                     />
                  </fieldset>
                  <fieldset className="">
                     <Input
                        type="textarea"
                        label="escribe tu mensaje"
                        className="pb-2 md:h-full md:pb-0"
                     />
                  </fieldset>
                  <input
                     type="submit"
                     value="Enviar mensaje"
                     className="bg-teal-500/50 px-3 py-1 rounded-lg text-teal-700 font-bold cursor-pointer hover:bg-teal-500 hover:text-teal-900 transition-all ease-in-out duration-300 md:mt-4"
                  />
               </form>
            </div>
         </Section>
         {/* JUST VISIBLE ON DESKTOP */}

         {/* bar footer */}
         <section
            className="mx-auto text-slate-200 bg-black"
         >
            <div className="max-w-screen-xl mx-auto flex flex-col-reverse pt-8 items-center gap-6 py-4 h-auto  mb-0 w-full
            md:justify-between
            lg:flex-row lg:px-4 lg:z-50 lg:py-6">
               <span className="block text-gray-300">
                  &copy; 2023 | desarrollado por Paúl Díaz
               </span>
               <div
                  className="flex flex-col gap-6 items-center justify-around
            lg:flex-row"
               >
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
            </div>
         </section>
      </footer>
   );
};

export default Footer;
