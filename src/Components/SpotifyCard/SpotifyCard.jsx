import { useTranslation } from "react-i18next";

const SpotifyCard = () => {

    const {  t } = useTranslation("global");

    return (
        <a href="https://developer.spotify.com/" className='spotifyCard'>
             <div className="">
          <p>{t("aboutPage.spotify.recent")}</p>
          <h3 className="">
            Nombre cancion
          </h3>
          <p className="">
            Artista
          </p>
        </div>
        </a>
    )
}

export default SpotifyCard