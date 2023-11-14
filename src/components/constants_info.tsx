import { Alura, Continental } from "./icons";

export const TRAINING = [
   {
      date: "Julio del 2022 - Febrero del 2023",
      institution: "ONE | Oracle Next Education",
      profession: "Desarrollo Front-end y Back-end",
      icon: Alura,
      resume:
         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ea suscipit saepe quam nemo blanditiis delectus nam amet ullam. Beatae obcaecati doloribus libero porro consequatur exercitationem incidunt iste voluptatem ullam",
   },
   {
      date: "Mayo - Julio del 2021",
      institution: "Escuela de Posgrado de la Universidad Continental",
      profession: "Desarrollador Web",
      icon: Continental,
      resume:
         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ea suscipit saepe quam nemo blanditiis delectus nam amet ullam. Beatae obcaecati doloribus libero porro consequatur exercitationem incidunt iste voluptatem ullam",
   },
];

export const info_projects = [
   {
      title: "Encriptador de texto",
      url: "https://voidzaid.github.io/sprint_one_encriptador/",
      resume:
         "Es un challenge del programa ONE, el programa consiste en insertar texto y que este lo devuelva encriptado, asi mismo en la misma pagina se desencripta",
      image: "./src/assets/img/encriptador_texto.png",
      alt: "encriptador Alura ONE",
   },
   {
      title: "Juego del ahorcado",
      url: "https://voidzaid.github.io/sprint_one_ahorcado/",
      resume:
         "El juego tambien es parte de los challenges del programa ONE, este consiste en desarrollar desde cero el juego del ahorcado dando oportunidades y posibilidad de escoger una palabra para el juego",
      image: "./src/assets/img/ahorcado.png",
      alt: "ahorcado Alura ONE",
   },
   {
      title: "Tiendeo - ecommerce",
      url: "https://voidzaid.github.io/ecommerce/",
      resume:
         "El juego tambien es parte de los challenges del programa ONE, este consiste en desarrollar desde cero el juego del ahorcado dando oportunidades y posibilidad de escoger una palabra para el juego",
      tecnologies: ["Css", "Atomic design", "BEM", "JavaScript"],
      image: "./src/assets/img/tiendeo.png",
      alt: "ecommerce Tiendeo Alura ONE",
   },
   {
      title: "Connect-4",
      url: "https://voidzaid.github.io/connect-4/",
      resume:
         "El juego tambien es parte de los challenges del programa ONE, este consiste en desarrollar desde cero el juego del ahorcado dando oportunidades y posibilidad de escoger una palabra para el juego",
      tecnologies: ["CSS", "JavaScript", "React"],
      image: "./src/assets/img/connect_4.png",
      alt: "juego del ahorcado React",
   },
];

export const info_menu = [
   {
      title: "Sobre mi",
      id: "about_me",
   },
   {
      title: "Formación",
      id: "formation",
   },
   {
      title: "Skills",
      id: "skills",
      submenu:undefined
   },
   {
      title: "Projects",
      id: "projects",
      // submenu: [
      //    {
      //       name: "Analytics",
      //       description: "Get a better understanding of your traffic",
      //       href: "#",
      //       // icon: Alura,
      //    },
      //    {
      //       name: "Engagement",
      //       description: "Speak directly to your customers",
      //       href: "#",
      //       // icon: Continental,
      //    },
      // ],
   },
   {
      title: "Contacto",
      id: "#contact",
   },
];
