import {RiDiscordLine} from "react-icons/ri"

const DiscordCard = () => {

    return (
        <a href="https://developer.spotify.com/" className='discordCard'>
             <div className="">
                
          <p className="">
           <RiDiscordLine/> Estado
          </p>
          <h3 className="">
            @Nombre Discord
          </h3>
        </div>
        </a>
    )
}

export default DiscordCard