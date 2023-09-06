import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SlSocialSpotify } from "react-icons/sl";
import "./SpotifyCard.scss";
// import SpotifyWebApi from 'spotify-web-api-js';
import SpotifyWebApi from "spotify-web-api-node";

const CLIENT_ID = "1fa2e9d24fda43ea89d761172cc34d76";
const CLIENT_SECRET = "385d4ea7a9a74274b7cafffe87773354";
const REDIRECT_URI = 'https://irenealcainealvarez.es';
const CODE = 'AQCzc1oOgWCXvKVvtQluM4iwKKOyf0WFfGZ1CuEfZI6E3WEtrqSoKdPq6Yi7hfxjl-ulewduciiOFirnUaEhjnbwnBQzHb08Z5BoXK7RTdLUm9dQKJuYk48OsnxhHWoEIlQNGGHQB-AsXYzcYyPrkJV9TGDuun_ea1nmW63LjdWSl-2BofYJjD2p3u9MXnKWSNMwTlad4_wYmDilpg';

const SPOTIFY_REFRESH_TOKEN = "AQCPZJwzvWOVZ3bKCRjTmVZoCykcd33uDlveOr05v1mthauo7dcIolhyhlztb4S73nBGOszfnPbM9k6fm7uB6YQ0kC-CDIiJK3iDNJZF27d3ducI3TGrz-MgVePKgzoH7DWndLbqP1zDkIbeyCk6sNIUXUVaKYKKnU1AztZ5Wotx2vBn29Ntn4nNOIjXZ0-gScrowC_TY2lZnNR0H0INIIVNTL21EHNGHw"

const spotifyApi = new SpotifyWebApi({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URI,
});

const SpotifyCard = () => {
  const [lastPlayedTrack, setLastPlayedTrack] = useState(null);

  const getData = async (req, res) => {
    try {
      spotifyApi.setRefreshToken(SPOTIFY_REFRESH_TOKEN);
      const data = await spotifyApi.refreshAccessToken();
      spotifyApi.setAccessToken(data.body.access_token);
  
      const recentTracks = await spotifyApi.getMyRecentlyPlayedTracks({
        limit: 1,
      });
      res.status(200).json(recentTracks.body.items[0].track);
      console.log(res);
  
    } catch (err) {
      console.log("Something went wrong!", err);
    }
  };

  getData()
  
  

  // useEffect(() => {
  //   var authParameters = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     body:
  //       `grant_type=authorization_code&code=${CODE}&redirect_uri=${REDIRECT_URI}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  //   };

  //   fetch("https://accounts.spotify.com/api/token", authParameters)
  //     .then((result) => result.json())
  //     .then((data) => {
  //       // Configurar la API de Spotify
  //       spotifyApi.setAccessToken(data.access_token);
  //       console.log(data)
  //       const refresh_token = data.refresh_token;
  //       console.log(refresh_token)

  //       // SE NECESITA CODE
  //       spotifyApi
  //         .getMyRecentlyPlayedTracks({ limit: 1 })
  //         .then((response) => {
  //           const track = response.items[0].track;
  //           setLastPlayedTrack(track);
  //         })
  //         .catch((error) => {
  //           console.error("Error al obtener la última canción escuchada:", error);
  //         });
  //     });

  // }, []);

  const { t } = useTranslation("global");

  return (
    <a href="https://developer.spotify.com/" className='spotifyCard'>
      <p className="title">{t("aboutPage.spotify.recent")} <span><SlSocialSpotify /> </span></p>
      {lastPlayedTrack ? (
        <div>
          <h3>{lastPlayedTrack.name}</h3>

        </div>
      ) : (
        <h3>Cargando la última canción...</h3>
      )}
    </a>
  );
}

export default SpotifyCard;
