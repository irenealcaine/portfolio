import amigaria from "../Assets/Images/amigaria.png"
import mascotas from "../Assets/Images/mascotas.png"
import crypto from "../Assets/Images/crypto.png"

export const projects = [
  {
    id: "canguro-de-mascotas",
    images: {
      main: mascotas,
      icon: mascotas,
    },
    tech: ["ReactJS", "TailwindCSS"],
    category: "web",
    github: "https://github.com/irenealcaine/cangurodemascotas",
    web: "https://www.canguromascotas.com",
    es: {
      title: "Canguro de mascotas",
      description:
        'Web que ofrece servicios de canguro de mascotas en Llíria, Valencia, donde se ofrence información sobre los diferentes servicios para perros. Se muestran opiniones de clientes satisfechos y una galería de fotos de los perros alojados, así como datos de contacto.',
    },
    en: {
      title: "Pet nanny",
      description:
        'Pets nursery',
    },
  },
  {
    id: "amigaria",
    images: {
      main: amigaria,
      icon: amigaria,
    },
    tech: ["VueJS", "Sass", "Firebase"],
    category: "web",
    github: "https://github.com/AmigariaWeb/web-app",
    web: "https://amigaria-app.vercel.app/login",
    es: {
      title: "Amigaria",
      description:
        'Web de integración social 100% accesible y para todos los públicos. Red social donde colgar en forma de ticket tus peticiones de ayuda, que cuando otro usuario acepta, ésta se elimina del tablón para el resto de usuarios. Cada ticket consta de un título, una breve descripción, fecha, categoría y autor. Hay una sección personal donde aparecen tus tickets, los cuales se pueden editar o borrar y los de otros usuarios que tu hayas aceptado.',
    },
    en: {
      title: "Pet nanny",
      description:
        'Pets nursery',
    },
  },
  {
    id: "el-rincon-de-no-pensar",
    images: {
      main: amigaria,
      icon: amigaria,
    },
    tech: ["ReactJS", "TailwindCSS"],
    category: "web",
    github: "https://github.com/irenealcaine/el-rincon-de-no-pensar",
    web: "https://glowing-klepon-fa3a77.netlify.app",
    es: {
      title: "El rincón de no pensar",
      description:
        'Web donde se encuentran proyectos pequeños pero llenos de encanto, todos ellos hecos con React y Tailwind. Aquí, presento una colección de creaciones modestas que, aunque demasiado pequeñas para tener su propio sitio web, merecen ser apreciadas y compartidas.',
    },
    en: {
      title: "Pet nanny",
      description:
        'Pets nursery',
    },
  },
  {
    id: "netfliclon",
    images: {
      main: amigaria,
      icon: amigaria,
    },
    tech: ["ReactJS", "TailwindCSS", "Firebase"],
    category: "web",
    github: "https://github.com/irenealcaine/netfliclon",
    web: "https://magenta-halva-e5d59d.netlify.app/",
    es: {
      title: "Clon de Netflix",
      description:
        'Web que imita la de Netflix usando la API de TMDB. En la página principal se pueden ver los detalles de una de las películas de moda, así como listas de las novedades, las películas populares, las pelísulas en tendencia, las mejor valoradas y documentales. Cada película tiene su propia página con informacion de la película, como una descripción, la fecha de estreno, la duración y la nota. También se muestran los actores que participan y películas similares. Cada actor tiene también su propia página donde se muestra la fecha de nacimiento y la de fallecimiento si la hubiera, lugar de nacimiento, descripción de su carrera y sus participaciones en películas.',
    },
    en: {
      title: "Pet nanny",
      description:
        'Pets nursery',
    },
  },
  {
    id: "cryptotracker",
    images: {
      main: crypto,
      icon: crypto,
    },
    tech: ["ReactJS", "MaterialUI"],
    category: "project",
    github: "https://github.com/",
    web: "https://github.com/irenealcaine",
    es: {
      title: "Seguimiento cryptos",
      description:
        'Seguimiento cryptos',
    },
    en: {
      title: "Crypto tracker",
      description:
        'Crypto tracker',
    },
  },

];
