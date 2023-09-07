import { useTranslation } from "react-i18next";
import { SlSocialSpotify } from "react-icons/sl"
import "./SpotifyCard.scss"
import { useLanyard } from "react-use-lanyard";

const SpotifyCard = () => {

  const { t } = useTranslation("global");

  const favouriteSongs =[
    {
      "song":"Melendi", 
      "artist":"Caminando por la vida"
    },{
      "song":"Estopa", 
      "artist":"Como Camarón"
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

  const randomSong = Math.floor(Math.random() * favouriteSongs.length)

    const { status } = useLanyard({
      userId: "952910556250136586",
      socket: true,
    });

  return (
    <a 
    href={`https://open.spotify.com/track/${status?.spotify?.track_id}` || `https://open.spotify.com/playlist/01Fvemoc0peRcK1CoU3ohz`} 
    target="_blank"
    rel="noopener noreferrer" 
    className='spotifyCard'
    >
      <p className="title">{t("aboutPage.spotify.recent")} <span><SlSocialSpotify /> </span></p>
      <h3 className="">
        {status?.spotify?.song || favouriteSongs[randomSong].song}
      </h3>
      {" - "}
      <p className="">
        {status?.spotify?.artist || favouriteSongs[randomSong].artist}
      </p>
      <div>
      </div>
    </a>
  )
}

export default SpotifyCard
