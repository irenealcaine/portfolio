import amigaria from "../Assets/Images/amigaria.png";
import amigarialogo from "../Assets/Images/amigarialogo.svg";
import mascotas from "../Assets/Images/mascotas.PNG";
import mascotaslogo from "../Assets/Images/mascotaslogo.png";
import cryptologo from "../Assets/Images/cryptologo.png";
import dashboardlogo from "../Assets/Images/dashboardlogo.png";
import ERDNPlogo from "../Assets/Images/ERDNPlogo.svg";
import netfliclonlogo from "../Assets/Images/netfliclonlogo.jpg";
import shoplogo from "../Assets/Images/shoplogo.png";
import spotylogo from "../Assets/Images/spotylogo.png";
import weatherlogo from "../Assets/Images/weatherlogo.png";

export const projects = [
  {
    id: "canguro-de-mascotas",
    images: {
      main: mascotas,
      icon: mascotaslogo,
    },
    tech: ["ReactJS", "TailwindCSS"],
    category: "web",
    github: "https://github.com/irenealcaine/cangurodemascotas",
    web: "https://www.canguromascotas.com",
    es: {
      title: "Canguro de mascotas",
      description:
        "Web que ofrece servicios de canguro de mascotas en Llíria, Valencia, donde se ofrence información sobre los diferentes servicios para perros. Se muestran opiniones de clientes satisfechos y una galería de fotos de los perros alojados, así como datos de contacto.",
    },
    en: {
      title: "Pet nanny",
      description: "Pets nursery",
    },
  },
  {
    id: "amigaria",
    images: {
      main: amigaria,
      icon: amigarialogo,
    },
    tech: ["VueJS", "Sass", "Firebase"],
    category: "web",
    github: "https://github.com/AmigariaWeb/web-app",
    web: "https://amigaria-app.vercel.app/login",
    es: {
      title: "Amigaria",
      description:
        "Web de integración social 100% accesible y para todos los públicos. Red social donde colgar en forma de ticket tus peticiones de ayuda, que cuando otro usuario acepta, ésta se elimina del tablón para el resto de usuarios. Cada ticket consta de un título, una breve descripción, fecha, categoría y autor. Hay una sección personal donde aparecen tus tickets, los cuales se pueden editar o borrar y los de otros usuarios que tu hayas aceptado.",
    },
    en: {
      title: "Pet nanny",
      description: "Pets nursery",
    },
  },
  {
    id: "el-rincon-de-no-pensar",
    images: {
      main: amigaria,
      icon: ERDNPlogo,
    },
    tech: ["ReactJS", "TailwindCSS"],
    category: "web",
    github: "https://github.com/irenealcaine/el-rincon-de-no-pensar",
    web: "https://glowing-klepon-fa3a77.netlify.app",
    es: {
      title: "El rincón de no pensar",
      description:
        "Web donde se encuentran proyectos pequeños pero llenos de encanto, todos ellos hecos con React y Tailwind. Aquí, presento una colección de creaciones modestas que, aunque demasiado pequeñas para tener su propio sitio web, merecen ser apreciadas y compartidas.",
    },
    en: {
      title: "Pet nanny",
      description: "Pets nursery",
    },
  },
  {
    id: "netfliclon",
    images: {
      main: amigaria,
      icon: netfliclonlogo,
    },
    tech: ["ReactJS", "TailwindCSS", "Firebase"],
    category: "web",
    github: "https://github.com/irenealcaine/netfliclon",
    web: "https://magenta-halva-e5d59d.netlify.app/",
    es: {
      title: "Clon de Netflix",
      description:
        "Web que imita la de Netflix usando la API de TMDB. En la página principal se pueden ver los detalles de una de las películas de moda, así como listas de las novedades, las películas populares, las pelísulas en tendencia, las mejor valoradas y documentales. Cada película tiene su propia página con informacion de la película, como una descripción, la fecha de estreno, la duración y la nota. También se muestran los actores que participan y películas similares. Cada actor tiene también su propia página donde se muestra la fecha de nacimiento y la de fallecimiento si la hubiera, lugar de nacimiento, descripción de su carrera y sus participaciones en películas.",
    },
    en: {
      title: "Pet nanny",
      description: "Pets nursery",
    },
  },
  {
    id: "catalogo",
    images: {
      main: amigaria,
      icon: shoplogo,
    },
    tech: ["ReactJS", "Bootstrap"],
    category: "project",
    github: "https://github.com/irenealcaine/commerce-react",
    web: "https://magenta-lily-93994f.netlify.app/",
    es: {
      title: "Catálogo de tienda",
      description:
        "Catálogo sencillo de una tienda ficticia. Con barra de búsqueda, ordenación por precio, número de ventas y opiniones de usuarios y filtros de stock, nota de usuarios y categorías. Posibilidad de añadir al carrito, el cual tiene una página propia donde gestiona los productos añadidos.",
    },
    en: {
      title: "Pet nanny",
      description: "Pets nursery",
    },
  },
  {
    id: "dashboard",
    images: {
      main: amigaria,
      icon: dashboardlogo,
    },
    tech: ["ReactJS", "MaterialUI", "Sass", "Firebase"],
    category: "project",
    github: "https://github.com/irenealcaine/react-sass-mui",
    web: "https://vermillion-starburst-865331.netlify.app/",
    es: {
      title: "Dashboard",
      description:
        "Panel de control de administrador con registro de usuarios y autentificación con distintas bases de datos. Estadísitcas en tiempo real de nuevos usuarios y productos del último mes y el porcentaje de crecimiento con especto al mes anterior, así como estadisitcas de ganancias y beneficios. Tablas de usuarios con posibilidad de agregar nuevos y tablas de productos y ordenes que se pueden eliminar.",
    },
    en: {
      title: "Pet nanny",
      description: "Pets nursery",
    },
  },
  {
    id: "spotyclon",
    images: {
      main: amigaria,
      icon: spotylogo,
    },
    tech: ["ReactJS", "TailwindCSS"],
    category: "web",
    github: "https://github.com/irenealcaine/spotyclon",
    web: "https://majestic-macaron-741bec.netlify.app/",
    es: {
      title: "Clon de Spotify",
      description:
        "Web que imita la página de Spotify antigua, usando la API de Shazam, incluso se pueden escuchar las canciones. En la página principal se ven las canciones populares del momento a nivel mundial ordenadas por categoría, también se puede acceder mediante el menú a las canciones populares de tu zona, los artistas y los discos populares.",
    },
    en: {
      title: "Pet nanny",
      description: "Pets nursery",
    },
  },
  {
    id: "weaher-app",
    images: {
      main: amigaria,
      icon: weatherlogo,
    },
    tech: ["JavaScript", "TailwindCSS"],
    category: "project",
    github: "https://github.com/irenealcaine/weather-API",
    web: "https://prismatic-chaja-00b433.netlify.app",
    es: {
      title: "App del tiempo",
      description:
        "Web de pronóstico del tiempo que proporciona información detallada sobre el clima actual y los pronósticos para los próximos días utilizando la API de Openweathermap. Con detección automática de ubicación, muestra la fecha y hora actual, así como la temperatura, humedad y velocidad del viento. Además, muestra una gráfica de las próximas 12 horas con la temperatura y probabilidad de lluvia, y una vista de siete días con información sobre la temperatura, humedad, velocidad del viento y probabilidad de lluvia para cada día.",
    },
    en: {
      title: "Pet nanny",
      description: "Pets nursery",
    },
  },
  {
    id: "todo-list",
    images: {
      main: amigaria,
      icon: todologo,
    },
    tech: ["VueJS", "TailwindCSS"],
    category: "project",
    github: "https://github.com/irenealcaine/todo-vue",
    web: "https://melodic-pony-2cdb8b.netlify.app",
    es: {
      title: "App de lista de tareas",
      description:
        "Web de lista de tareas pendientes, cada tarea está asignada a una categoría (trabajo o personal) y se muestran con colores diferentes. Cada tarea se puede editar, marcar como realizada o borrar. Los datos se almacenan en localStorage.",
    },
    en: {
      title: "Pet nanny",
      description: "Pets nursery",
    },
  },
  {
    id: "cryptotracker",
    images: {
      main: crypto,
      icon: cryptologo,
    },
    tech: ["ReactJS", "MaterialUI"],
    category: "web",
    github: "https://github.com/irenealcaine/cryptotracker",
    web: "https://deft-moonbeam-671bbb.netlify.app",
    es: {
      title: "Seguimiento de cryptos",
      description:
        "Información actualizada de las criptomonedas más populares utilizando la API de coingecko. Precios y gráficas de variación de precios del último año de 100 criptomonedas, así como el precio y market cap en tiempo real, tanto en euros como en dólares.",
    },
    en: {
      title: "Crypto tracker",
      description: "Crypto tracker",
    },
  },
  {
    id: "tic-tac-toe",
    images: {
      main: crypto,
      icon: tttlogo,
    },
    tech: ["VueJS", "TailwindCSS"],
    category: "project",
    github: "https://github.com/irenealcaine/tic-tac-toe-in-vue",
    web: "https://coruscating-mooncake-d025e2.netlify.app/",
    es: {
      title: "Tres en raya",
      description:
        "Juego del tres en raya, que indica a que jugador le toca jugar, además de un contador de victorias. Cuando acaba el juego aparece un cartel diciendo el ganador o si es un empate, así como un botón para resetear el juego y empezar otra partida.",
    },
    en: {
      title: "Crypto tracker",
      description: "Crypto tracker",
    },
  },
];
