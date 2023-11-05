// import React from "react";
import { Github, Linkedin, Facebook, Continental, Alura, ArrowRightUp } from "./icons";

import * as Logos from "./vectorLogos";
import { ICONS_SKILLS } from "../Constants";

const Layout = () => {
   return (
      <main className="relative flex flex-col bg-cyan-900 text-slate-400 overflow-hidden">
         <div
            className="max-w-5xl mx-auto z-10 px-6 pt-6 h-customMobile flex flex-col content-between text-slate-200 pb-2 gap-10
            lg:w-1/2 lg:px-0 "
         >
            <div>
               <h1 className="text-4xl font-bold pb-4">Paúl Díaz</h1>
               <h2 className="text-xl font-medium">Web Developer</h2>
               <p className="tex text-slate-400">
                  Hola, mi nombre es Paúl Díaz y construyo páginas y
                  aplicaciones web
               </p>
            </div>
            <picture className="relative rounded-full flex flex-col items-center justify-center h-full pb-10 gap-10">
               <img
                  className="object-cover rounded-full w-3/4 "
                  src="./src/assets/img/void_zaid.jfif"
               />
               <div>
                  <span
                     className="animate-glowing bg-clip-text text-transparent
                  bg-gradient-to-r from-teal-800 to-teal-200
                  mx-auto text-5xl font-bold"
                  >
                     {"<coder/>"}
                  </span>
               </div>
            </picture>
            <ul className="flex gap-6 justify-center pb-4">
               <li>
                  <a
                     href="#"
                     className="text-sm font-semibold leading-6 text-gray-900"
                  >
                     <Github className="stroke-teal-500" height="40" />
                  </a>
               </li>
               <li>
                  <a
                     href="#"
                     className="text-sm font-semibold leading-6 text-gray-900"
                  >
                     <Linkedin className="stroke-teal-500" height="40" />
                  </a>
               </li>
               <li>
                  <a
                     href="#"
                     className="text-sm font-semibold leading-6 text-gray-900"
                  >
                     <Facebook className="stroke-teal-500" height="40" />
                  </a>
               </li>
            </ul>
         </div>

         <hr className="max-w-5xl" />

         <section
            className="max-w-5xl mx-auto z-10 px-6 mt-10 flex flex-col gap-10 text-slate-400
            lg:w-1/2 lg:px-0"
         >
            <div className="w-full">
               <div className="flex gap-2 flex-col">
                  <p>
                     <span id="sobre_mi">Hola</span>, soy de Perú y tengo 25
                     años. En el año 2021 surgió mi curiosidad por saber{" "}
                     <i className="font-bold not-italic">
                        ¿que es la programacion?
                     </i>
                     , me puse a investigar y decidí llevar un curso en
                     Desarrollo Web en una universidad de mis país. Con el
                     transcurso de los meses encontre un trabajo en el cual en
                     parte debia administrar un sitio web en Wordpress.
                  </p>
                  <p>
                     A mediados del 2022 inicié con el programa ONE de Oracle,
                     era un bootcamp intensivo en el que al final de cada módulo
                     se les retaba a los estudiantes con <i>Sprints</i> los
                     cuales debiamos resolver aplicando los conocimientos
                     obtenidos, allí aprendí sobre <a href="#">Front-end</a> y{" "}
                     <a href="#">Back-end</a>
                  </p>
                  <p>
                     Culminado el programa decidi continuar con mi camino para
                     lograr ser desarrollador Full-stack y aprender Frameworks,
                     tal es el caso de React que es el que estoy aprendiendo
                     ahora
                  </p>
               </div>
            </div>

            <div className="flex flex-col gap-6">
               <h2 className="head2">FORMACIÓN</h2>
               <div className="group">
                  <div
                     className=" flex flex-col border-spacing-3 p-3 rounded bg-slate-800/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] 
                  lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]"
                  >
                     <p className="italic text-sm">
                        Julio del 2022 - Febrero del 2023
                     </p>
                     <p className="">ONE | Oracle Next Education</p>
                     <h3 className="hover:text-teal-300 text-slate-200 font-bold pb-6">
                        Desarrollo Front-end y Back-end
                     </h3>
                     <Alura className="fill fill-slate-200 pb-4" height="150" />
                     <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Iusto ea suscipit saepe quam nemo blanditiis
                        delectus nam amet ullam. Beatae obcaecati doloribus
                        libero porro consequatur exercitationem incidunt iste
                        voluptatem ullam?
                     </p>
                  </div>
               </div>
               <div className="group">
                  <div
                     className="flex flex-col border-spacing-3 p-3 rounded bg-slate-800/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] 
                  lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]"
                  >
                     <p className="italic text-sm">Mayo - Julio del 2021</p>
                     <p className="">
                        Escuela de Posgrado de la Universidad Continental
                     </p>
                     <h3 className="hover:text-teal-300 text-slate-200 font-bold pb-6">
                        Desarrollador Web
                     </h3>
                     <Continental
                        className="fill fill-slate-200 pb-4"
                        height="150"
                     />

                     <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Iusto ea suscipit saepe quam nemo blanditiis
                        delectus nam amet ullam. Beatae obcaecati doloribus
                        libero porro consequatur exercitationem incidunt iste
                        voluptatem ullam?
                     </p>
                  </div>
               </div>
            </div>

            <div className="flex gap-6 flex-col">
               {/* <h2 className="font-bold text-slate-200">SKILLS</h2> */}
               <h2 className="head2">SKILLS</h2>
               <div
                  className="flex justify-evenly flex-wrap gap-x-5 gap-y-6 max-w-sm mx-auto
                  sm:gap-x-10 sm:max-w-md
                  md:max-w-lg
                  lg:gap-x-12 lg:max-w-xl
                  xl:max-w-xl"
               >
                  <Logos.CssLogo className={ICONS_SKILLS.className} />
                  <Logos.TailwindLogo className={ICONS_SKILLS.className} />
                  <Logos.JavascriptLogo className={ICONS_SKILLS.className} />
                  <Logos.TypeScript className={ICONS_SKILLS.className} />
                  <Logos.ReactLogo className={ICONS_SKILLS.className} />
                  <Logos.PhpLogo className={ICONS_SKILLS.className} />
                  <Logos.WordpressLogo className={ICONS_SKILLS.className} />
                  <Logos.GitLogo className={ICONS_SKILLS.className} />
               </div>
            </div>
            <div className="flex flex-col gap-3">
               <h2 className="head2">PROYECTOS</h2>
               {/* contenedor de los cards */}
               <div className="flex flex-col gap-4">
                  <div className="group card">
                     <figure>
                        <img id="image" className="rounded border-2 border-slate-200/10 max-w-[200px]
                        hover:border-slate-200/20
                        group-hover:border-slate-200/20" src="./src/assets/img/encriptador_texto.png" alt="" />
                     </figure>
                     <div>
                        <h3 className="font-bold text-slate-200 
                        hover:text-teal-400">
                           <a className="flex" href="https://voidzaid.github.io/sprint_one_encriptador/" target="blank">Encriptador de texto<ArrowRightUp/></a>
                        </h3>
                        <p>Es un challenge del programa ONE, el programa consiste en insertar texto y que este lo devuelva encriptado, asi mismo en la misma pagina se desencripta</p>
                     </div>
                  </div>
                  <div className="group card">
                     <figure>
                        <img id="image" className="rounded border-2 border-slate-200/10 max-w-[200px]
                        hover:border-slate-200/20
                        group-hover:border-slate-200/20" src="./src/assets/img/ahorcado.png" alt="ahorcado Alura ONE" />
                     </figure>
                     <div>
                        <h3 className="font-bold text-slate-200 
                        hover:text-teal-400">
                           <a className="flex" href="https://voidzaid.github.io/sprint_one_ahorcado/" target="blank">Juego del ahorcado<ArrowRightUp/></a>
                        </h3>
                        <p>El juego tambien es parte de los challenges del programa ONE, este consiste en desarrollar desde cero el juego del ahorcado dando oportunidades y posibilidad de escoger una palabra para el juego</p>
                     </div>
                  </div>
                  <div className="group card">
                     <figure>
                        <img id="image" className="rounded border-2 border-slate-200/10 max-w-[200px]
                        hover:border-slate-200/20
                        group-hover:border-slate-200/20" src="./src/assets/img/tiendeo.png" alt="ahorcado Alura ONE" />
                     </figure>
                     <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-slate-200 
                        hover:text-teal-400">
                           <a className="flex" href="https://voidzaid.github.io/ecommerce/" target="blank">Tiendeo - ecommerce<ArrowRightUp/></a>
                        </h3>
                        <p>Es un challenge del programa ONE, el programa consiste en insertar texto y que este lo devuelva encriptado, asi mismo en la misma pagina se desencripta</p>
                        <ul className="flex text-xs gap-2 pt-2 font-bold text-teal-400">
                           <li className="bg-teal-500/20 px-3 py-1 rounded-2xl"><span>CSS</span></li>
                           <li className="bg-teal-500/20 px-3 py-1 rounded-2xl"><span>JavaScript</span></li>
                           <li className="bg-teal-500/20 px-3 py-1 rounded-2xl"><span>Atomic desing</span></li>
                        </ul>
                     </div>
                  </div>
                  <div className="group card">
                     <figure>
                        <img id="image" className="rounded border-2 border-slate-200/10 max-w-[200px]
                        hover:border-slate-200/20
                        group-hover:border-slate-200/20" src="./src/assets/img/connect_4.png" alt="ahorcado Alura ONE" />
                     </figure>
                     <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-slate-200 
                        hover:text-teal-400">
                           <a className="flex" href="https://voidzaid.github.io/connect-4/" target="blank">Connect-4<ArrowRightUp/></a>
                        </h3>
                        <p>Es un challenge del programa ONE, el programa consiste en insertar texto y que este lo devuelva encriptado, asi mismo en la misma pagina se desencripta</p>
                        <ul className="flex text-xs gap-2 pt-2 font-bold text-teal-400">
                           <li className="bg-teal-500/20 px-3 py-1 rounded-2xl"><span>JavaScript</span></li>
                           <li className="bg-teal-500/20 px-3 py-1 rounded-2xl"><span>React</span></li>
                        </ul>
                     </div>
                  </div>
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
