import { FaReact, FaVuejs, FaSass } from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoFirebase,
  BiLogoWordpress
} from "react-icons/bi";
import { SiMui } from "react-icons/si";
import { RiBootstrapLine } from "react-icons/ri";

export const colors = [
  "blue",
  "green",
  "yellow",
  "lightBlue",
  "orange",
  "red",
  "purple",
  "pink"
];

 export const filterOptions = [
    { text: "Todos", value: "all" },

    { icon: <BiLogoJavascript />, value: "JavaScript" },
    { icon: <FaReact />, value: "ReactJS" },
    { icon: <FaVuejs />, value: "VueJS" },

    { icon: <BiLogoTailwindCss />, value: "TailwindCSS" },
    { icon: <SiMui />, value: "MaterialUI" },
    { icon: <FaSass />, value: "Sass" },
    { icon: <RiBootstrapLine />, value: "Bootstrap" },

    { icon: <BiLogoFirebase />, value: "Firebase" },
    { icon: <BiLogoWordpress />, value: "WordPress" },
  ];


export const favouriteSongs = [
  {
    "song": "Melendi",
    "artist": "Caminando por la vida"
  }, {
    "song": "Estopa",
    "artist": "Como Camarón"
  },
  {
    "song": "Ricky Martin",
    "artist": "Livin' la Vida Loca"
  },
  {
    "song": "Chayanne",
    "artist": "Torero"
  },
  {
    "song": "Shakira",
    "artist": "Ciega, Sordomuda"
  },
  {
    "song": "Juanes",
    "artist": "A Dios le Pido"
  }
]
