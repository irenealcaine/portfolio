import { RiDiscordLine } from "react-icons/ri"
import "./DiscordCard.scss"

const DiscordCard = () => {

  return (
    <a href="https://developer.spotify.com/" className='discordCard'>


      <p className="title">
        Estado <span><RiDiscordLine /> </span>
      </p>
      <h3 className="">
        @Nombre Discord
      </h3>

    </a>
  )
}

export default DiscordCard
