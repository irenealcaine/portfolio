import { useTranslation } from "react-i18next";
import { SlSocialSpotify } from "react-icons/sl"
import "./SpotifyCard.scss"

const SpotifyCard = () => {

  const { t } = useTranslation("global");

  return (
    <a href="https://developer.spotify.com/" className='spotifyCard'>

      <p className="title">{t("aboutPage.spotify.recent")} <span><SlSocialSpotify /> </span></p>
      <h3 className="">
        Nombre cancion
      </h3>

    </a>
  )
}

export default SpotifyCard
