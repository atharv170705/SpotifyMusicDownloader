import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ImportCard from "../components/ImportCard";
import spotifyLogo from "../assets/spotify_logo.svg";
import ytMusicLogo from "../assets/ytmusic_logo.svg";

export default function Home() {
  const navigate = useNavigate();
  
  const spotifyLogin = () => {
    navigate("/spotifymusic");
  };
  const ytNavigate = () => {
    navigate("/youtubemusic");
  };
  return (
    <div
      className="
                min-h-screen
                bg-black
                flex
                justify-center
                items-center
                gap-20
            "
    >
      <ImportCard
        logo={spotifyLogo}
        alt="Spotify"
        subtitle="Import your playlist"
        buttonText="Continue"
        onButtonClick={spotifyLogin}
      />

      <ImportCard
        logo={ytMusicLogo}
        alt="YouTube Music"
        subtitle="Paste url"
        buttonText="Continue"
        onButtonClick={ytNavigate}
      />
    </div>
  );
}
