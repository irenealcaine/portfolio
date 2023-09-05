import { RiDiscordLine } from "react-icons/ri";
import "./DiscordCard.scss";
import { useLanyard } from "react-use-lanyard";


const DiscordCard = () => {


    const { loading, status } = useLanyard({
      userId: "952910556250136586",
      socket: true,
    });

  return (
    <a href="https://discordapp.com/users/952910556250136586" className="discordCard" target="_blank" rel="noreferrer">
      <p className="title">
      {/* <Status />  */}
      {status?.discord_status}
       <span><RiDiscordLine /> </span>
      </p>
      <h3 className="">
        @{status?.discord_user.username}
      </h3>
    
    </a>
  );
};

export default DiscordCard;
