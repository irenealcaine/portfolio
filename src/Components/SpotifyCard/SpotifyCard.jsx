import { useTranslation } from "react-i18next";
import { SlSocialSpotify } from "react-icons/sl"
import SpotifyWebApi from "spotify-web-api-node";
import "./SpotifyCard.scss"
import axios from 'axios';
import querystring from 'querystring';
import { useEffect } from "react";

const spotifyApi = new SpotifyWebApi();

const getToken = () => {
  const CLIENT_ID = 'e81e0bc4656646c6b4f6b803b5b7d8c1';
  const CLIENT_SECRET = 'cfe7279b488d4d8bb43f4d62460db975';
  const CODE = 'AQCNaHi3sSExMBlEF89LeGxqggRO7xE4Vf8XyJQxvRvhgJe6_ITabPr8NO3iRx1DtDB9lkk_-CdGHtNMz1YEzZgte0zZUFrpgors2OWZUcB1oT-JQQwIVYVVJz3OyJKAZrgnZ3IzxCNRbDLtQ9hyk-l5BKVlU8RVG3Vlf25dbWV0t15kItbV0roGbXGPQCzBr-Z3anOwzQHyjuE';
  const REDIRECT_URI = 'https://irenealcainealvarez.es';

  const postData = querystring.stringify({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: 'authorization_code',
    code: CODE,
    redirect_uri: REDIRECT_URI,
  });

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  axios
    .post('https://accounts.spotify.com/api/token', postData, config)
    .then(response => {
      const accessToken = response.data.access_token;
      // Configurar la API de Spotify con el token de acceso obtenido
      spotifyApi.setAccessToken(accessToken);
      console.log(accessToken)
    })
    .catch(error => {
      console.error('Error al obtener el token de acceso:', error);
    });
};

const SpotifyCard = () => {

  useEffect(() => {
    getToken(); // Obtener el token de acceso
  }, []);


  const { t } = useTranslation("global");

  return (
    <a href="https://developer.spotify.com/" className='spotifyCard'>

      <p className="title">{t("aboutPage.spotify.recent")} <span><SlSocialSpotify /> </span></p>
      <h3 className="">
        Nombre cancion
      </h3>
       <div>
    </div>

    </a>
  )
}

export default SpotifyCard
