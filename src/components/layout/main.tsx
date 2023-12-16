// import React from 'react'
import { TRAINING, info_projects, info_menu } from "../constants_info";
import BgCircle from "../bg_effect/bg_circle";
import BgColor from "../bg_effect/bg_color";
// CARDS
import FormationCard from "../layout/card_formation";
import CardProjects from "../layout/card_projects";
import Btn_desktop from "../btn_desktop_menu";
// CONTAINER
import Section from "../layout/section";
import Container from "../layout/container";
// ICONS
import { icons_media } from "../icons_media";
import { Logos } from "../icons_skills";
// @ts-ignore
import Perfil from "../../assets/img/void_zaid.png?url";

const Main = () => {
   return (
      <>
         <BgCircle
            className="hidden lg:z-0 lg:block lg:ml-auto lg:w-2/3"
            classFather="hidden lg:block"
         />
         <BgColor className="hidden lg:block" />
         <div>
            <div className="max-w-screen-xl lg:px-10 lg:flex lg:relative lg:w-full lg:mx-auto lg:justify-between xl:px-20">
               <Section className="lg:z-10 lg:w-2/5 lg:sticky lg:top-0 lg:h-screen lg:pt-14 xl:w-1/2 ">
                  <BgCircle className="lg:hidden" />
                  <BgColor className="lg:hidden" />
                  <Container
                     className="h-customMobile pb-0
            sm:h-auto sm:py-8
            lg:w-full lg:pt-0 lg:h-full lg:pb-0 lg:gap-8"
                  >
                     <div
                        className="flex flex-col items-center gap-16
               sm:h-auto md:gap-10 lg:items-start  lg:gap-4 2xl:gap-12"
                     >
                        <div
                           className="text-slate-200 
                  sm:flex sm:flex-col sm:gap-4 md:gap-2 lg:gap-1"
                        >
                           <h1
                              className="head1 pt-8 pb-4
                      lg:pt-0 lg:text-5xl lg:pb-2"
                           >
                              Void Zaid
                           </h1>
                           <h2 className="text-xl font-medium">
                              Web Developer
                           </h2>
                           <p className="tex text-slate-400 lg:w-3/4">
                              Hola, mi nombre es Paúl Díaz y construyo páginas y
                              aplicaciones web
                           </p>
                           <ul className="gap-6 pb-6 hidden sm:hidden">
                              {icons_media.map((e, id) => (
                                 <li key={id}>
                                    <a
                                       href={e.url}
                                       className="text-sm font-semibold leading-6 text-gray-900"
                                    >
                                       <e.icon
                                          className="stroke-teal-500"
                                          height="40"
                                       />
                                    </a>
                                 </li>
                              ))}
                           </ul>
                        </div>
                        <picture
                           className="relative flex flex-col items-center justify-center gap-10 h-full 
                  sm:gap-10 sm:pb-0 sm:h-auto lg:items-start lg:w-full"
                        >
                           <img
                              className="object-cover rounded-full w-full sm:max-w-xs lg:w-1/4 lg:max-w-xs"
                              src={Perfil}
                           />
                           {/* <div
                              className="flex relative items-center  bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-slate-400 mr-8 ml-4 
                        sm:pb-8
                        lg:hidden"
                           >
                              <span
                                 className="animate-glowing bg-clip-text  mx-auto text-2xl font-bold font-rubikMono tracking-[-4px] absolute -left-4 text-slate-600
                              "
                              >
                                 {"<"}
                              </span>
                              <figcaption
                                 className="text-3xl font-bold font-rubikMono
                              effectWriting border-slate-400 border-r-4 leading-7 text-center
                              "
                              >
                                 {"coder"}
                              </figcaption>
                              <span
                                 className="animate-glowing  mx-auto text-2xl font-bold font-rubikMono tracking-[-4px] absolute -right-8 text-slate-400 z-20
                              "
                              >
                                 {"/>"}
                              </span>
                           </div> */}
                        </picture>
                        {/* cv button */}
                        <div className="md:pt-0 lg:hidden">
                           <button className="rounded-full animate-bounce border-4 border-teal-400  px-4 py-1 font-bold text-slate-100 text-lg shadow-lg shadow-cyan-900 hover:border-teal-800">
                              <a
                                 href="./public/pdf/2312_cv-progr_en_sim.pdf"
                                 download
                              >
                                 Descargar CV
                              </a>
                           </button>
                        </div>
                        <nav className="hidden lg:block">
                           <ul className="">
                              {info_menu.map((e, id) => (
                                 <Btn_desktop
                                    key={id}
                                    title={e.title}
                                    id={e.id}
                                 />
                              ))}
                           </ul>
                        </nav>
                     </div>
                     {/* button cv LG */}
                     <div className="md:pt-0">
                        <button className="rounded-full animate-bounce border-4 border-teal-400  border-solid px-4 py-1 font-bold text-slate-100 text-sm shadow-lg shadow-cyan-900 hover:border-teal-500 hover:text-slate-400">
                           <a
                              href="./public/pdf/2312_cv-progr_en_sim.pdf"
                              download
                           >
                              Descargar CV
                           </a>
                        </button>
                     </div>
                     {/* SOCIAL MEDIA ICONS */}
                     <ul className="flex gap-6 justify-center pb-6 mt-auto sm:pb-0 md:mt-auto lg:justify-start">
                        {icons_media.map((e, id) => (
                           <li key={id}>
                              <a
                                 href={e.url}
                                 target="blank"
                                 className="text-sm font-semibold leading-6 text-gray-900"
                              >
                                 <e.icon
                                    className="stroke-teal-400 hover:stroke-teal-500"
                                    height="40"
                                 />
                              </a>
                           </li>
                        ))}
                     </ul>
                  </Container>
               </Section>
               {/* <div className="h-[1px] bg-red-200/10"></div> */}
               {/* ABOUT ME SECTION */}
               <div className="lg:w-3/5 xl:w-1/2">
                  <Section id="about_me" className="pt-8 sm:pt-10 lg:pt-14">
                     <BgColor className="lg:hidden" />
                     <Container className="">
                        <div className="flex gap-2 flex-col relative">
                           <p>
                              <span>Hola</span>, soy de Perú y tengo 25 años. En
                              el año 2021 surgió mi curiosidad por saber{" "}
                              <i className="font-bold not-italic">
                                 ¿que es la programacion?
                              </i>
                              , me puse a investigar y decidí llevar un curso en
                              Desarrollo Web en una universidad de mis país. Con
                              el transcurso de los meses encontre un trabajo en
                              el cual, en parte, debia administrar un sitio web
                              en Wordpress.
                           </p>
                           <p>
                              A mediados del 2022 inicié con el programa ONE de
                              Oracle, era un bootcamp intensivo en el que al
                              final de cada módulo se les retaba a los
                              estudiantes con <i>Sprints</i> los cuales debiamos
                              resolver aplicando los conocimientos obtenidos,
                              allí aprendí sobre <a href="#">Front-end</a> y{" "}
                              <a href="#">Back-end</a>
                           </p>
                           <p>
                              Culminado el programa decidi continuar con mi
                              camino para lograr ser desarrollador Full-stack y
                              aprender Frameworks, tal es el caso de React que
                              es el que estoy aprendiendo ahora
                           </p>
                        </div>
                     </Container>
                  </Section>

                  {/* FORMACION */}
                  <Section id="formation" className="">
                     <BgCircle className="lg:hidden md:h-20" />
                     <BgColor className="lg:hidden" />
                     <Container className="gap-8">
                        <h2 className="head2">FORMACIÓN</h2>
                        {TRAINING.map((item, id) => (
                           <FormationCard
                              key={id}
                              date={item.date}
                              institution={item.institution}
                              profession={item.profession}
                              icon={item.icon}
                              resume={item.resume}
                           />
                        ))}
                     </Container>
                  </Section>

                  {/* SKILLS */}
                  <Section id="skills" className="w-full">
                     <BgColor className="lg:hidden" />
                     <Container className="gap-10 md:w-full">
                        <h2 className="head2">SKILLS</h2>
                        <div
                           className="flex justify-evenly flex-wrap gap-x-5 gap-y-6 max-w-sm mx-auto
                  sm:gap-x-10 sm:max-w-md
                  md:max-w-lg
                  lg:gap-x-12 lg:max-w-xl
                  xl:max-w-xl"
                        >
                           {Logos.map((Icon, id) => (
                              <Icon key={id} className="" />
                           ))}
                        </div>
                     </Container>
                  </Section>
                  {/* PROJECTS */}
                  <Section id="projects">
                     <BgColor className="lg:hidden" />
                     <Container>
                        <h2 className="head2">PROYECTOS</h2>
                        {/* contenedor de los cards */}
                        <div className="flex flex-col gap-14 sm:gap-6">
                           {info_projects.map((e, id) => (
                              <CardProjects
                                 key={id}
                                 title={e.title}
                                 url={e.url}
                                 resume={e.resume}
                                 tecnologies={e.tecnologies}
                                 image={e.image}
                                 alt={e.alt}
                              />
                           ))}
                        </div>
                     </Container>
                  </Section>
               </div>
            </div>
         </div>
      </>
   );
};

export default Main;
