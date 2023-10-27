import React from "react";
import { Github, Linkedin, Facebook } from "./icons";

const Layout = () => {
   return (
      <main className="relative flex flex-col bg-cyan-900 text-slate-400 overflow-hidden md:py-40">
         {/* <div className="relative z-[1] container m-auto px-6 md:px-12">
            <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
               <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
                  <div className="w-full space-x-12 flex justify-center text-gray-300 sm:w-7/12 md:justify-start">
                     <ul role="list" className="space-y-8">
                        <li>
                           <a
                              href="#"
                              className="flex items-center space-x-3 hover:text-sky-400 transition"
                           >
                              <span>Github</span>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div> */}
         <div
            className="max-w-7xl mx-auto z-10 px-6 pt-6 h-customMobile flex flex-col  text-slate-200 pb-2 gap-2
            lg:w-1/2"
         >
            <h1 className="text-4xl font-bold pb-4">Paúl Díaz</h1>
            <h2 className="text-xl font-medium">Web Developer</h2>
            <p className="tex text-slate-400">
               Hola, mi nombre es Paúl Díaz y construyo páginas y aplicaciones
               web
            </p>
            <img
               className="mx-auto my-10 w-full"
               src="https://media.istockphoto.com/id/1182146951/es/foto/joven-riendo-de-pie-contra-un-fondo-gris.jpg?s=612x612&w=0&k=20&c=AVtbOJd_p74jus3tkJAu7Pa7QPz7_mfZCFL9slbu9_g="
               alt="void_zaid developer"
            />
            <div className="mx-auto text-5xl font-bold">{"<coder/>"}</div>
            <nav className="hidden">
               <ul>
                  <li>
                     <a href=""></a>
                  </li>
               </ul>
            </nav>
            <nav>
               <ul>
                  <li>
                     <a href=""></a>
                  </li>
               </ul>
            </nav>
            <nav>
               <ul>
                  <li>
                     <a href=""></a>
                  </li>
               </ul>
            </nav>
            <nav>
               <ul>
                  <li>
                     <a href=""></a>
                  </li>
               </ul>
            </nav>
            <ul className="flex gap-6 justify-center mt-auto pb-4">
               <li>
                  <a
                     href="#"
                     className="text-sm font-semibold leading-6 text-gray-900"
                  >
                     <Github
                        className="fill-slate-40 stroke-teal-500"
                        size="40"
                     />
                  </a>
               </li>
               <li>
                  <a
                     href="#"
                     className="text-sm font-semibold leading-6 text-gray-900"
                  >
                     <Linkedin
                        className="fill-slate-40 stroke-teal-500"
                        size="40"
                     />
                  </a>
               </li>
               <li>
                  <a
                     href="#"
                     className="text-sm font-semibold leading-6 text-gray-900"
                  >
                     <Facebook
                        className="fill-slate-40 stroke-teal-500"
                        size="40"
                     />
                  </a>
               </li>
            </ul>
         </div>

         <hr />

         <section
            className="max-w-7xl mx-auto z-10 px-6 flex flex-col text-slate-400
            lg:w-1/2"
         >
            <div className="w-full">
               <div className="flex gap-2 flex-col">
                  <p><span id="sobre_mi">Hola</span>, soy de Perú y tengo 25 años. En el año 2021 surgió mi curiosidad por saber{" "}
                     <i className="font-bold not-italic">¿que es la programacion?</i>, me puse a investigar y decidí
                     llevar un curso en Desarrollo Web en una
                     universidad de mis país. Con el transcurso de los meses
                     encontre un trabajo en el cual en parte debia administrar un sitio web en Wordpress.
                  </p>
                  <p>
                     A mediados del 2022 inicié con el programa ONE de Oracle,
                     era un bootcamp intensivo en el que al
                     final de cada módulo se les retaba a los estudiantes con{" "}
                     <i>Sprints</i> los cuales debiamos resolver aplicando los
                     conocimientos obtenidos, allí aprendí sobre <a href="#">Front-end</a> y <a href="#">Back-end</a>
                  </p>
                  <p>
                     Culminado el programa decidi continuar con mi camino para
                     lograr ser desarrollador Full-stack y aprender Frameworks,
                     tal es el caso de React que es el que estoy aprendiendo
                     ahora
                  </p>
               </div>
            </div>
         </section>

         {/* se viene el efecto de fondo circular desvanecido con gradiente*/}
         <div
            aria-hidden="true"
            className="absolute h-full inset-0 flex items-center"
         >
            <div
               aria-hidden="true"
               className="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-800 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"
            ></div>
         </div>
         {/* este es la capa que le da un efecto ocurecido a el bg-cyan y al efecto de fondo con degradado*/}
         <div
            aria-hidden="true"
            className="absolute inset-0 w-full h-full bg-[#020314] opacity-80"
         ></div>
      </main>
   );
};

export default Layout;
