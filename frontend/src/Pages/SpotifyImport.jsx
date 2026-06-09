import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SpotifyImport() {
    const [url, setUrl] = useState("");
    const navigate = useNavigate();

    function handleContinue() {
        if (!url.trim()) return;

        navigate("/playlist", {
            state: {
                playlistUrl: url
            }
        });
    }

    return (
        <div
            className="
                min-h-screen
                bg-black
                flex
                items-center
                justify-center
                px-6
            "
        >
            <div
                className="
                    w-full
                    max-w-2xl
                    bg-zinc-900/60
                    backdrop-blur-md
                    rounded-3xl
                    p-10
                    border
                    border-zinc-800
                    shadow-2xl
                "
            >
                <div className="text-center mb-12">
                    <h1
                        className="
                            text-5xl
                            font-semibold
                            text-white
                            mb-4
                        "
                    >
                        Spotify Playlist Import
                    </h1>

                    <p
                        className="
                            text-zinc-400
                            text-lg
                        "
                    >
                        Paste a Spotify playlist URL to view and import tracks
                    </p>
                    <div
                        className="
                            mt-4
                            bg-yellow-500/10
                            border
                            border-yellow-500/30
                            text-yellow-300
                            rounded-lg
                            px-4
                            py-3
                            text-sm
                        "
                    >
                        ⚠️ Playlist length should be less than 100 songs
                    </div>
                </div>

                <div className="mb-8">
                    <label
                        className="
                            block
                            text-white
                            text-lg
                            mb-3
                        "
                    >
                        Spotify Playlist URL
                    </label>

                    <div className="relative">
                        <span
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                            "
                        >
                            🎵
                        </span>

                        <input
                            type="text"
                            value={url}
                            onChange={(ev) => setUrl(ev.target.value)}
                            placeholder="https://open.spotify.com/playlist/..."
                            className="
                                w-full
                                bg-zinc-800
                                text-white
                                rounded-xl
                                pl-12
                                pr-4
                                py-4
                                outline-none
                                border
                                border-zinc-700
                                focus:border-green-500
                                transition
                            "
                        />
                    </div>
                </div>

                <button
                    className="
                        mt-10
                        w-full
                        py-4
                        rounded-xl
                        bg-green-500
                        hover:bg-green-400
                        text-black
                        text-lg
                        font-medium
                        transition
                    "
                    onClick={handleContinue}
                >
                    Continue
                </button>
            </div>
        </div>
    );
}