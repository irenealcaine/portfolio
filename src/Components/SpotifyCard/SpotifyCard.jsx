import { useTranslation } from "react-i18next";
import { SlSocialSpotify } from "react-icons/sl"
import SpotifyWebApi from "spotify-web-api-node";
import "./SpotifyCard.scss"
import { useEffect, useState } from "react";


const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI
});

const SpotifyCard = () => {

  const { t } = useTranslation("global");


  const [recentTrack, setRecentTrack] = useState(null);

  useEffect(() => {
    // Aquí obtienes la última canción escuchada del usuario
    async function fetchRecentTrack() {
      try {
        const response = await spotifyApi.getMyRecentlyPlayedTracks({
          limit: 1, // Obtener solo la última canción
        });

        if (response.body.items.length > 0) {
          // Si hay canciones recientes, establece la última en el estado
          setRecentTrack(response.body.items[0].track);
        }
      } catch (error) {
        console.error("Error al obtener la canción reciente de Spotify:", error);
      }
    }

    fetchRecentTrack();
    console.log(recentTrack)
  }, []);


  return (
    <a href="https://developer.spotify.com/" className='spotifyCard'>

      <p className="title">{t("aboutPage.spotify.recent")} <span><SlSocialSpotify /> </span></p>
      <h3 className="">
        {/* Nombre cancion */}
      </h3>
      <div>
      </div>

    </a>
  )
}

export default SpotifyCard
