import { FaReact, FaVuejs, FaSass } from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoFirebase,
  BiLogoWordpress,
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
  "pink",
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
    song: "Caminando por la vida",
    artist: "Melendi",
  },
  {
    song: "Como camarón",
    artist: "Estopa",
  },
  {
    song: "Livin' la Vida Loca",
    artist: "Ricky Martin",
  },
  {
    song: "Torero",
    artist: "Chayanne",
  },
  {
    song: "Ciega, sordomuda",
    artist: "Shakira",
  },
  {
    song: "A Dios le pido",
    artist: "Juanes",
  },
  {
    song: "Insoportable",
    artist: "El canto del loco",
  },
  {
    song: "Princesas",
    artist: "Pereza",
  },
  {
    song: "Me voy",
    artist: "Julieta Venegas",
  },
  {
    song: "No puedo vivir sin ti",
    artist: "Los Ronaldos",
  },
];
