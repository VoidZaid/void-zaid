import { Alura, Continental } from "../icons/icons";
// @ts-ignore
import Tiendeo from "../../assets/img/tiendeo.png?url";
// @ts-ignore
import Encriptador from "../../assets/img/encriptador.png?url";
// @ts-ignore
import Ahorcado from "../../assets/img/ahorcado.png?url";
// @ts-ignore
import Connect from "../../assets/img/connect_4.png?url";
// @ts-ignore
import Conversor from "../../assets/img/conversor.png?url"
// @ts-ignore
import Estore from "../../assets/img/e-store.png?url"

export const TRAINING = [
   {
      date: "Julio del 2022 - Febrero del 2023",
      institution: "ONE | Oracle Next Education",
      profession: "Desarrollo Front-end y Back-end",
      icon: Alura,
      resume:
         "Esta fue una inciativa de Oracle en conjunto con Alura el cual contaba de una plataforma virtual donde se les otorgó a los estudiantes acceso a cursos. Fue una experiencia muy enriquecedora con cursos que abarcaron desde lógica de programación, programación front-end y back-end, bases de datos, analisis de datos. Allí aprendi Java y SQL asi como habilidades de diseño de bases de datos y desarrollo de aplicaciones web.",
   },
   {
      date: "Mayo - Julio del 2021",
      institution: "Escuela de Posgrado de la Universidad Continental",
      profession: "Desarrollador Web",
      icon: Continental,
      resume:
         "Este fue un curso con el que comencé en el desarrollo web, me proporcionó conocimientos en Html, Css y JavaScript; obtuve conocimientos sobre como usar preprocesadores de Css (en este caso de Stylus), manejo de DOM y eventos. Culminado ello pasamos a el uso de Php, Mysql y Wordpress logrando obtener habilidades en creacion de base de datos, conexiones y consultas a Base de datos y desarrollo de páginas en Wordpress",
   },
];

export const info_projects = [
   {
      title: "Encriptador de texto",
      url: "https://voidzaid.github.io/sprint_one_encriptador/",
      resume:
         "Es un challenge del programa ONE, el programa consiste en insertar texto y que este lo devuelva encriptado, asi mismo en la misma pagina se desencripta.",
      image: Encriptador,
      alt: "encriptador Alura ONE",
   },
   {
      title: "Juego del ahorcado",
      url: "https://voidzaid.github.io/sprint_one_ahorcado/",
      resume:
         "El juego tambien es parte de los challenges del programa ONE, este consiste en desarrollar desde cero el juego del ahorcado dando oportunidades y posibilidad de escoger una palabra para el juego.",
      image: Ahorcado,
      alt: "ahorcado Alura ONE",
   },
   {
      title: "Tiendeo - ecommerce",
      url: "https://voidzaid.github.io/ecommerce/",
      resume:
         "Tiendeo fue un proyecto que realicé para poder acentuar conocimientos en JS y Css; este proyecto resultó ser realmente retador y tuve que aplicar conceptos como lo son: atomic design, BEM, manipulacion de DOM, validación de formularios, fetch y Fake API. La parte mas retadora fue crear el panel de administración que consistia en un CRUD, tenia las funcionalidades de crear, leer, actualizar y eliminar  elementos de la galeria del ecommerce.",
      tecnologies: ["Css", "Atomic design", "BEM", "JavaScript"],
      image: Tiendeo,
      alt: "ecommerce Tiendeo Alura ONE",
   },
   {
      title: "Conversor de monedas",
      url: "https://github.com/VoidZaid/conversorMonedasJava",
      resume:
         "Con este proyecto pude conectarme a una api para tener los tipos de cambio actualizados y consumir datos de ella para hacer hacer calculos de distintas monedas a la moneda peruana, y además tambien tiene una calculadora de IMC donde ingresando nuestro peso y talla podemos obtener dicho valor.",
      tecnologies: ["Java", "JSON","okHttp3"],
      image: Conversor,
      alt: "conversor de monedas en Java",
   },
   {
      title: "Connect-4",
      url: "https://voidzaid.github.io/connect-4/",
      resume:
         "Es uno de mis más recientes proyectos el cual se basa en la creación de un juego denominado \"Connect 4\"; lo más retador en este proyecto fue crear un boton el cual permite a la computadora jugar y, a travéz de un algoritmo, dificultar lo más posible ganar .Con este proyecto pude acentuar conceptos de React como lo son el uso de useState y useEffect.",
      tecnologies: ["CSS", "JavaScript", "React"],
      image: Connect,
      alt: "juego del ahorcado React",
   },
   {
      title: "E-Store",
      url: "https://voidzaid.github.io/e-store/",
      resume:
         "Proyecto con el cual aprendí React de forma un poco mas profunda, primero use React-router para manejar mis rutas y en mi componente de Layout puse varias paginas como lo son de productos, productos filtrados por categorias, buscador de productos, visualizacion de los productos detallados, agregar aproductos al carrito de compas, formulario de compra y  persistencia de datos con LocalStorage.",
      tecnologies: ["Sass", "React-Modules", "React-Reducer","React-Context","React-Router", "Fetch"],
      image: Estore,
      alt: "ecommerce con react",
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
      title: "Proyectos",
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
      id: "contact",
   },
];
