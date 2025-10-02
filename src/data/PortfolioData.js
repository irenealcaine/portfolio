import mascotas from "../Assets/Images/mascotas.png";
import mascotaslogo from "../Assets/Images/mascotaslogo.png";
import crypto from "../Assets/Images/crypto.png";
import cryptologo from "../Assets/Images/cryptologo.png";
import dashboard from "../Assets/Images/dashboard.png";
import dashboardlogo from "../Assets/Images/dashboardlogo.png";
import ERDNP from "../Assets/Images/ERDNP.png";
import ERDNPlogo from "../Assets/Images/ERDNPlogo.svg";
import netfliclon from "../Assets/Images/netfliclon.png";
import netfliclonlogo from "../Assets/Images/netfliclonlogo.jpg";
import shop from "../Assets/Images/shop.png";
import shoplogo from "../Assets/Images/shoplogo.png";
import spoty from "../Assets/Images/spoty.png";
import spotylogo from "../Assets/Images/spotylogo.png";
import weather from "../Assets/Images/weather.png";
import weatherlogo from "../Assets/Images/weatherlogo.png";
import ttt from "../Assets/Images/ttt.png";
import tttlogo from "../Assets/Images/tttlogo.svg";
import todo from "../Assets/Images/todo.png";
import todologo from "../Assets/Images/todologo.png";
import gallery from "../Assets/Images/gallery.png";
import gallerylogo from "../Assets/Images/gallerylogo.png";
import casinoslogo from "../Assets/Images/escudo.png";
import patrimoni from "../Assets/Images/patrimoni.png";
import directori from "../Assets/Images/directori.png";
import monsterslogo from "../Assets/Images/monsterslogo.png";
import monsters from "../Assets/Images/monsters.png";
import react from "../Assets/Images/react.svg";
import userstable from "../Assets/Images/tablausuarios.PNG";
import additems from "../Assets/Images/additems.PNG";
import mealwikilogo from "../Assets/Images/mealwiki.png"
import mealwiki from "../Assets/Images/mealwikidesktop.png"

export const projects = [
  
  {
    id: 2,
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
        "Información actualizada de las criptomonedas más populares utilizando la API de Coingecko. Precios y gráficas de variación de precios del último año de 100 criptomonedas, así como el precio y market cap en tiempo real, tanto en euros como en dólares.",
    },
    en: {
      title: "Crypto tracker",
      description:
        "Up-to-date information on the most popular cryptocurrencies using the Coingecko API. Prices and price variation charts from the last year for 100 cryptocurrencies, as well as real-time price and market cap in both euros and dollars.",
    },
  },
  {
    id: 3,
    images: {
      main: todo,
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
      title: "To-do list app",
      description:
        "App for a to-do list, where each task is assigned to a category (work or personal) and displayed with different colors. Each task can be edited, marked as done, or deleted. The data is stored in localStorage.",
    },
  },
  {
    id: 4,
    images: {
      main: weather,
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
      title: "Weather app",
      description:
        "Weather forecast website that offers detailed information about the current weather and forecasts for the upcoming days using the OpenWeatherMap API. With automatic location detection, it displays the current date and time, as well as temperature, humidity, and wind speed. Additionally, it presents a graph for the next 12 hours showing temperature and rainfall probability, along with a seven-day view providing information about temperature, humidity, wind speed, and rain probability for each day.",
    },
  },
  
  {
    id: 6,
    images: {
      main: gallery,
      icon: gallerylogo,
    },
    tech: ["ReactJS", "Firebase"],
    category: "project",
    github: "https://github.com/irenealcaine/gallery",
    web: "https://cosmic-cheesecake-074bb8.netlify.app",
    es: {
      title: "Galería",
      description:
        "Galería donde puedes subir tus fotos mediante Firebase. Al darle click a una foto se puede ver en tamaño aumentado.",
    },
    en: {
      title: "Gallery",
      description:
        "Gallery where you can upload your photos using Firebase. By clicking on a photo, you can view it in an enlarged size.",
    },
  },
  
  {
    id: 8,
    images: {
      main: shop,
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
      title: "Shop catalog",
      description:
        "Simple catalog of a fictional store. With a search bar, sorting by price, number of sales, and user reviews, as well as filters for stock availability, user ratings, and categories. The option to add items to the shopping cart, which has its own page for managing the added products.",
    },
  },
 
 
  {
    id: 11,
    images: {
      main: netfliclon,
      icon: netfliclonlogo,
    },
    tech: ["ReactJS", "TailwindCSS", "Firebase"],
    category: "web",
    github: "https://github.com/irenealcaine/netfliclon",
    web: "https://magenta-halva-e5d59d.netlify.app/",
    es: {
      title: "Clon de Netflix",
      description:
        "Web que imita la de Netflix usando la API de TMDB. En la página principal se pueden ver los detalles de una de las películas de moda, así como listas de las novedades, las películas populares, las películas en tendencia, las mejor valoradas y documentales. Cada película tiene su propia página con información de la película, como una descripción, la fecha de estreno, la duración y la nota. También se muestran los actores que participan y películas similares. Cada actor tiene también su propia página donde se muestra la fecha de nacimiento y la de fallecimiento si la hubiera, lugar de nacimiento, descripción de su carrera y sus participaciones en películas.",
    },
    en: {
      title: "Netflix clone",
      description:
        "A website that mimics Netflix's layout using the TMDB API. On the main page, you can view details about a trending movie, as well as lists of new releases, popular films, trending movies, top-rated movies, and documentaries. Each movie has its own page with film information such as a description, release date, duration, and rating. The actors involved and similar movies are also displayed. Each actor also has their own page showcasing their birthdate, date of passing if applicable, place of birth, career description, and filmography.",
    },
  },
  {
    id: 12,
    images: {
      main: monsters,
      icon: monsterslogo,
    },
    tech: ["ReactJS"],
    category: "web",
    github: "https://github.com/irenealcaine/mh-api/",
    web: "https://celadon-kheer-920e58.netlify.app/",
    es: {
      title: "Base de datos de Monster Hunter",
      description:
        "Web con multitud de datos sobre Monster Hunter, informacion sobre los monstruos, armas, armaduras, localizaciones, habilidades, objetos, estados y su relación entre ellos. Utilizando la api de AP de Monster Hunter World.",
    },
    en: {
      title: "Monster Hunter Database",
      description:
        "Website with a wealth of data on Monster Hunter, information about monsters, weapons, armor, locations, skills, items, ailments, and their relationships with each other. Using the API of Monster Hunter World.",
    },
  },
  {
    id: 13,
    images: {
      main: ERDNP,
      icon: ERDNPlogo,
    },
    tech: ["ReactJS", "TailwindCSS"],
    category: "web",
    github: "https://github.com/irenealcaine/el-rincon-de-no-pensar",
    web: "https://glowing-klepon-fa3a77.netlify.app",
    es: {
      title: "El rincón de no pensar",
      description:
        "Web donde se encuentran proyectos pequeños pero llenos de encanto, todos ellos hechos con React y Tailwind. Aquí, presento una colección de creaciones modestas que, aunque demasiado pequeñas para tener su propio sitio web, merecen ser apreciadas y compartidas.",
    },
    en: {
      title: "The Corner of Unthinking",
      description:
        "A website where you'll find small yet charming projects, all made with React and Tailwind. Here, I present a collection of modest creations that, although too small to have their own website, deserve to be appreciated and shared.",
    },
  },
  
 
  
  {
    id: 17,
    images: {
      main: mealwiki,
      icon: mealwikilogo,
    },
    tech: ["ReactJS"],
    category: "web",
    github: "https://github.com/irenealcaine/meal-wiki",
    web: "https://meal-wiki.netlify.app/",
    es: {
      title: "Wiki de comidas",
      description:
        "Esta web esta hecha para participar en la hackathon del dev, organizada por el Rincón del Dev. En esta web hecha con la API de TheMealDB, encontrarás toda la informacion de más de 300 recetas de comida, pudiendo filtrar por categoría de comida (entrante, postre, vegano...), ingredientes (vacuno, salmón, berenejena...) o por zona de origen (España, Japón, Italia...). También puedes buscar tu plato favorito o intentar ampliar tus límites con un plato aleatorio recomendado. En la página de cada plato encontrarás toda la informacíon, los ingredientes necesarios y sus cantidades y una serie de pasos para su elaboración, así como la fuente de donde se saca la informacion y un vídeo explicativo de YouTube.",
    },
    en: {
      title: "The Meal Wiki",
      description:
        "This website was created to participate in the dev hackathon, organized by El Rincón del Dev. Using TheMealDB API, this site provides information on over 300 food recipes. You can filter by food category (starter, dessert, vegan, etc.), ingredients (beef, salmon, eggplant, etc.), or region of origin (Spain, Japan, Italy, etc.). You can also search for your favorite dish or try to broaden your horizons with a randomly recommended dish. On each dish's page, you'll find all the necessary information, ingredients and their quantities, and a series of steps for preparation, as well as the source of the information and a YouTube explanatory video.",
    },
  }
];
