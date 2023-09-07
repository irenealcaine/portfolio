import { useTranslation } from "react-i18next";
import { SlSocialSpotify } from "react-icons/sl"
import SpotifyWebApi from "spotify-web-api-node";
import "./SpotifyCard.scss"
import { useEffect, useState } from "react";
import { useLanyard } from "react-use-lanyard";


// const spotifyApi = new SpotifyWebApi({
//   clientId: process.env.CLIENT_ID,
//   clientSecret: process.env.CLIENT_SECRET,
//   redirectUri: process.env.REDIRECT_URI
// });

const SpotifyCard = () => {

  const { t } = useTranslation("global");
    const { status } = useLanyard({
      userId: "952910556250136586",
      socket: true,
    });

  return (
    <a 
    href={`https://open.spotify.com/track/${status?.spotify?.track_id}` || `https://open.spotify.com/track/6Qi1MNFHCLo4bVsV14MOmz`} 
    target="_blank"
    rel="noopener noreferrer" 
    className='spotifyCard'
    >
      <p className="title">{t("aboutPage.spotify.recent")} <span><SlSocialSpotify /> </span></p>
      <h3 className="">
        {status?.spotify?.song || "Libertad"}
      </h3>
      {" - "}
      <p className="">
        {status?.spotify?.artist || "Nil Moliner"}
      </p>
      <div>
      </div>
    </a>
  )
}

export default SpotifyCard
