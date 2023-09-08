import { useTranslation } from "react-i18next";
import { SlSocialSpotify } from "react-icons/sl"
import "./SpotifyCard.scss"
import { useLanyard } from "react-use-lanyard";
import { favouriteSongs } from "../../Utils/Constants"

const SpotifyCard = () => {

  const { t } = useTranslation("global");

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
      <p className="title">{status?.spotify ? t("aboutPage.spotify.current") : t("aboutPage.spotify.recent")} <span><SlSocialSpotify /> </span></p>
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
