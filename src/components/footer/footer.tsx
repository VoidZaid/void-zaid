import { Whatsapp, Mail, Address } from "../../constants/icons/icons";
import { Github, Linkedin } from "../../constants/icons/media_icons";
import Section from "../layouts/section";
import FormContact from "./form_contact";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <footer className="bg-slate-50 text-slate-700 sm:text-base">
         <Section
            className="max-w-screen-xl pt-16 pb-0 sm:px-28 md:px-28 bg-transparent lg:px-0 lg:py-12 lg:mx-auto"
            id="contact"
         >
            <h2 className="font-bold text-slate-700 mx-auto lg:mx-0 lg:ml-10 mb-8 lg:text-2xl lg:mb-8">
               CONTÁCTAME
            </h2>
            <div className="flex gap-20 flex-col md:items-center lg:items-start lg:justify-between md:gap-28 lg:flex-row lg:gap-10 lg:mx-10">
               {/* LINKEDIN */}
               <div className="lg:block lg:w-4/12 mb-12 mx-auto order-3 lg:order-2 lg:mx-0">
                  <div
                     className="badge-base LI-profile-badge mx-auto w-[336px]"
                     data-locale="es_ES"
                     data-size="large"
                     data-theme="dark"
                     data-type="HORIZONTAL"
                     data-vanity="rene-paul-diaz"
                     data-version="v1"
                  >
                     <a
                        className="badge-base__link LI-simple-link"
                        href="https://pe.linkedin.com/in/rene-paul-diaz?trk=profile-badge"
                     ></a>
                  </div>
               </div>
               {/* REDES */}
               <address className="md:flex lg:pb-0 md:pb-8 flex flex-col order-2 lg:order-1 lg:w-3/12 lg:pl-0">
                  <ul className="flex flex-col items-center lg:gap-3 gap-4 md:gap-6 w-full lg:items-start">
                     <li>
                        <a
                           href="https://www.google.com/maps/place/Arequipa/@-16.403966,-71.5802114,13z/data=!3m1!4b1!4m6!3m5!1s0x91424a487785b9b3:0xa3c4a612b9942036!8m2!3d-16.4090474!4d-71.537451!16zL20vMDFweTg3?entry=ttu"
                           target="_blank"
                        >
                           <Address className="stroke-teal-500 h-10 inline pr-2" />
                           Arequipa, Arequipa, Perú
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://mail.google.com/mail/u/0/#inbox?compose=new&to=rpauldiaz.s@gmail.com"
                           target="_blank"
                        >
                           <Mail className="stroke-teal-500 h-10 inline pr-2" />
                           rpauldiaz.s@gmail.com
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://wa.me/51918939293?text=Hola%2C%20requiero%20de%20tus%20servicios%20por%20favor..."
                           target="_blank"
                        >
                           <Whatsapp className="stroke-teal-500 h-10 inline pr-2" />
                           +51 918939293
                        </a>
                     </li>
                  </ul>
                  <div className="text-xl mt-12 mb-6 text-slate-700 font-bold mx-auto lg:mb-5 lg:mt-10 md:mt-12 md:mb-8 lg:mx-0">
                     <h2 className="">Redes Sociales</h2>
                  </div>
                  <ul className="flex flex-col items-center gap-4 lg:gap-3 md:gap-6 lg:items-start">
                     <li>
                        <a
                           href="https://www.linkedin.com/in/rene-paul-diaz/"
                           target="_blank"
                        >
                           <Linkedin className="stroke-teal-500 h-10 inline pr-2" />
                           Linkedin
                        </a>
                     </li>
                     <li>
                        <a href="https://github.com/VoidZaid" target="_blank">
                           <Github className="stroke-teal-500 h-10 inline pr-2" />
                           Github
                        </a>
                     </li>
                  </ul>
               </address>
               <FormContact className="md:w-3/4 lg:w-5/12 order-1 lg:order-3 " />
            </div>
         </Section>
         {/* JUST VISIBLE ON DESKTOP */}

         {/* bar footer */}
         <section className="mx-auto text-slate-200 bg-zinc-950">
            <div
               className="max-w-screen-xl mx-auto flex flex-col-reverse pt-8 items-center gap-6 py-4 h-auto  mb-0 w-full
            md:justify-between
            lg:flex-row lg:px-4 lg:z-50 lg:py-6"
            >
               <span className="block text-gray-300 font-extralight">
                  &copy; 2024 | desarrollado por Paúl Díaz
               </span>
               <div
                  className="flex flex-col gap-6 items-center justify-around
            lg:flex-row"
               >
                  <Link
                     to="./terminos-de-uso"
                     className="flex justify-between text-white "
                  >
                     Terminos de uso
                  </Link>
                  <Link
                     to="./politica-privacidad"
                     className=" flex justify-between text-white"
                  >
                     Política de privacidad
                  </Link>
               </div>
            </div>
         </section>
      </footer>
   );
};

export default Footer;
