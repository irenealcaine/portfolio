import { useTranslation } from "react-i18next";
import {SlSocialSpotify} from "react-icons/sl"

const SpotifyCard = () => {

    const {  t } = useTranslation("global");

    return (
        <a href="https://developer.spotify.com/" className='spotifyCard'>
             <div className="">
          <p><SlSocialSpotify/> {t("aboutPage.spotify.recent")}</p>
          <h3 className="">
            Nombre cancion
          </h3>
        </div>
        </a>
    )
}

export default SpotifyCard