// import React from 'react'
import Section from "../components/layouts/section";
import Container from "../components/layouts/container";
import BgColor from "../components/bg_effect/bg_color";
import BgCircle from "../components/bg_effect/bg_circle";

import { Link } from "react-router-dom";
import { ArrowLeft } from "../constants/icons/icons";
const Terms = () => {
   return (
      <Section className="md:justify-center md:min-h-minCustomMobile">
         <BgCircle className="" classFather="" />
         <BgColor className="" />
         <Container className="relative pb-20 md:mt-0 md:pb-24 lg:pb-5 lg:max-w-3xl">
            <h1 className="head1 text-slate-200 text-3xl mt-8 pb-4 md:pt-6 md:mt-0">
               Términos y condiciones
            </h1>
            <div className="flex flex-col gap-10">
               <div>
                  <h2 className="head2 static bg-transparent backdrop-blur-none lg:block">
                     Aceptación de los Términos y Condiciones
                  </h2>
                  <p>
                     Al acceder y utilizar este sitio web, aceptas los términos
                     y condiciones que se establecen a continuación.
                  </p>
               </div>
               <div>
                  <h2 className="head2 static bg-transparent backdrop-blur-none lg:block">
                     Propiedad Intelectual
                  </h2>
                  <p>
                     Este sitio web, incluyendo todo su contenido, diseño,
                     código y funcionalidad, es propiedad de René Díaz; todos
                     los derechos de propiedad intelectual le pertenecen.
                  </p>
               </div>
               <div>
                  <h2 className="head2 static bg-transparent backdrop-blur-none lg:block">
                     Uso del Sitio Web
                  </h2>
                  <p>
                     Este sitio web se proporciona para uso personal y no
                     comercial. Puedes navegar por el sitio web y ver los
                     proyectos y trabajos que he realizado. Si deseas
                     contactarme, puedes hacerlo a través del formulario de
                     contacto en el sitio web.
                  </p>
               </div>
               <div>
                  <h2 className="head2 static bg-transparent backdrop-blur-none lg:block">
                     Enlaces a Terceros
                  </h2>
                  <p>
                     Este sitio web puede contener enlaces a sitios web de
                     terceros. Estos enlaces son proporcionados para su
                     conveniencia y no constituyen una recomendación. El sitio
                     no es responsable de la contenido de estos sitios web de
                     terceros.
                  </p>
               </div>
               <div>
                  <h2 className="head2 static bg-transparent backdrop-blur-none lg:block">
                     Cambios a los Términos y Condiciones
                  </h2>
                  <p>
                     Se reserva el derecho de cambiar estos términos y
                     condiciones en cualquier momento. Si haces uso continuado
                     del sitio web después de que se hayan hecho cambios a estos
                     términos y condiciones, estás aceptando los nuevos términos
                     y condiciones.
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
   );
};

export default Terms;
