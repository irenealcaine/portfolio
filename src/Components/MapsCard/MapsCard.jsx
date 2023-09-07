import { IoLocationOutline } from "react-icons/io5";
import "./MapsCard.scss";

const MapsCard = () => {

  return (
    <a 
    href="https://goo.gl/maps/vqtfAyuEbntcjk5aA" 
    className="mapsCard" 
    target="_blank" 
    rel="noreferrer"
    >
      <p className="title">
      Casinos
       <span><IoLocationOutline /> </span>
      </p>
      <h3 className="">
        Valencia
      </h3>
    
    </a>
  );
};

export default MapsCard;