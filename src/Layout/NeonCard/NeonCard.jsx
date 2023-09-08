import "./DiscordNeonCard.scss"

const NeonCard = ({href, className, title, icon, h3}) => {

  return (
    <a 
    href={href}
    className={className} 
    target="_blank" 
    rel="noreferrer"
    >
        <p className="title">
            {title}
            <span>{icon} </span>
        </p>
        <h3 className="">
            {h3}
        </h3>
    
    </a>
  );
};

export default NeonCard;
