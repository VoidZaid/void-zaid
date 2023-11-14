// import React from "react";
import BgCircle from "./bg_effect/bg_circle";
import BgColor from "./bg_effect/bg_color";
import { TRAINING, info_projects } from "./constants_info";
// CARDS
import FormationCard from "./layout/card_formation";
import CardProjects from "./layout/card_projects";
// CONTAINER
import Section from "./layout/section";
import Container from "./layout/container";
// ICONS
import { icons_media } from "./icons_media";
import { Logos } from "./icons_skills";

const Layout = () => {
   return (
      <main className="relative lg:bg-cyan-900 ">
         <BgCircle className="lg:z-0"/>
         <BgColor className=""/>
         <div className="max-w-screen-xl lg:flex lg:relative lg:w-full lg:mx-auto lg:justify-between">
            <Section className="lg:z-10 lg:w-1/2 lg:sticky lg:top-0 lg:h-screen ">
               <BgCircle className="lg:hidden" />
               <BgColor className="lg:hidden"/>
               <Container
                  className="h-customMobile pb-0
            sm:h-auto sm:py-8
            lg:w-full"
               >
                  <div
                     className="flex flex-col items-center h-full
               sm:h-auto"
                  >
                     <div
                        className="text-slate-200 
                  sm:flex sm:flex-col sm:gap-4 md:gap-8"
                     >
                        <h1
                           className="text-4xl font-bold pt-8 pb-4
                     sm:pb-0"
                        >
                           Paúl Díaz
                        </h1>
                        <h2 className="text-xl font-medium">Web Developer</h2>
                        <p className="tex text-slate-400">
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
                        className="relative flex flex-col items-center justify-center gap-10 h-full pb-10  
                  sm:gap-10 sm:pb-0 sm:h-auto sm:pt-8"
                     >
                        <img
                           className="object-cover rounded-full w-3/4 lg:max-w-xs"
                           src="./src/assets/img/void_zaid.jfif"
                        />
                        <div>
                           <span
                              className="animate-glowing bg-clip-text text-transparent
                  bg-gradient-to-r from-teal-800 to-teal-200
                  mx-auto text-5xl font-bold
                  sm:hidden"
                           >
                              {"<coder/>"}
                           </span>
                        </div>
                     </picture>
                  </div>
                  {/* SOCIAL MEDIA ICONS */}
                  <ul className="flex gap-6 justify-center pb-6 mt-auto sm:pb-0">
                     {icons_media.map((e, id) => (
                        <li key={id}>
                           <a
                              href={e.url}
                              className="text-sm font-semibold leading-6 text-gray-900"
                           >
                              <e.icon className="stroke-teal-500" height="40" />
                           </a>
                        </li>
                     ))}
                  </ul>
               </Container>
            </Section>
            {/* <div className="h-[1px] bg-red-200/10"></div> */}
            {/* ABOUT ME SECTION */}
            <div className="lg:w-1/2">
               <Section id="about_me" className="pt-16 sm:pt-10">
                  <BgColor className="lg:hidden"/>
                  <Container className="">
                     <div className="flex gap-2 flex-col relative">
                        <p>
                           <span>Hola</span>, soy de Perú y tengo
                           25 años. En el año 2021 surgió mi curiosidad por
                           saber{" "}
                           <i className="font-bold not-italic">
                              ¿que es la programacion?
                           </i>
                           , me puse a investigar y decidí llevar un curso en
                           Desarrollo Web en una universidad de mis país. Con el
                           transcurso de los meses encontre un trabajo en el
                           cual, en parte, debia administrar un sitio web en
                           Wordpress.
                        </p>
                        <p>
                           A mediados del 2022 inicié con el programa ONE de
                           Oracle, era un bootcamp intensivo en el que al final
                           de cada módulo se les retaba a los estudiantes con{" "}
                           <i>Sprints</i> los cuales debiamos resolver aplicando
                           los conocimientos obtenidos, allí aprendí sobre{" "}
                           <a href="#">Front-end</a> y <a href="#">Back-end</a>
                        </p>
                        <p>
                           Culminado el programa decidi continuar con mi camino
                           para lograr ser desarrollador Full-stack y aprender
                           Frameworks, tal es el caso de React que es el que
                           estoy aprendiendo ahora
                        </p>
                     </div>
                  </Container>
               </Section>

               {/* FORMACION */}
               <Section id="formation" className="">
                  <BgCircle className="lg:hidden md:h-40"/>
                  <BgColor  className="lg:hidden"/>
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
                  <BgColor className="lg:hidden"/>
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
                  <BgColor className="lg:hidden"/>
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
      </main>
   );
};

export default Layout;
