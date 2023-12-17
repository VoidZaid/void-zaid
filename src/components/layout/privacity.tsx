// import React from 'react'
import Section from "./section";
import Container from "./container";
import BgColor from "../bg_effect/bg_color";
import BgCircle from "../bg_effect/bg_circle";
import { Link } from "react-router-dom";
import { ArrowLeft } from "../icons";
const Privacity = () => {
   return (
      <>
         <Section className="lg:min-h-minCustomDesktop min-h-minCustomMobile justify-center">
            <BgCircle className="" classFather="" />
            <BgColor className="z-" />
            <Container className=" relative pb-20 md:pb-44 lg:pb-20 lg:max-w-3xl">
               <h1 className="head1 text-slate-200 text-3xl mt-8 pb-4">
                  Política de Privacidad
               </h1>
               <div className="flex flex-col gap-10">
                  <div>
                     <h2 className="head2 static bg-transparent backdrop-blur-none lg:block">
                        Recopilacion de Datos
                     </h2>
                     <p>
                        Este sitio web no recopila ninguna información personal
                        de los visitantes, a menos que decidas proporcionarla a
                        través del formulario de contacto. No recopilamos
                        información como tu dirección de correo electrónico o tu
                        dirección IP.
                     </p>
                  </div>
                  <div>
                     <h2 className="head2 static bg-transparent backdrop-blur-none lg:block">
                        Enlaces a Terceros
                     </h2>
                     <p>
                        Este sitio web puede contener enlaces a sitios web de
                        terceros, estos enlaces son proporcionados por la página
                        para su conveniencia y no constituyen una recomendación.
                        Este sitio no es responsable de la contenido de estos
                        sitios web de terceros. s{" "}
                     </p>
                  </div>
                  <div>
                     <h2 className="head2 static bg-transparent backdrop-blur-none lg:block">
                        Cambios a la Política de Privacidad
                     </h2>
                     <p>
                        Este sitio se reserva el derecho de cambiar esta
                        política de privacidad en cualquier momento. Si haces
                        uso continuado del sitio web después de que se hayan
                        hecho cambios a esta política de privacidad, estás
                        aceptando los nuevos términos y condiciones.
                     </p>
                  </div>
               </div>
               <div className="absolute -left-20 top-4 animate-pulse">
                  <Link to={"/"}>
                     <ArrowLeft className="h-16 fill-teal-500 stroke-teal-500 hover:stroke-teal-300" />
                  </Link>
               </div>
            </Container>
         </Section>
      </>
   );
};

export default Privacity;
