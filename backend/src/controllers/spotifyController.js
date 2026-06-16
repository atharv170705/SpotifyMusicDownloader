import spotifyUrlInfo from 'spotify-url-info'
const {getData} = spotifyUrlInfo(fetch);

const getPlaylist = async (req, res) => {
    try {
        const {url} = req.body;
        const data = await getData(url);
        const name = data.name;
        const playlistImage = data.coverArt.sources[0].url;
        const trackList = data.trackList;
        
        const tracks = await Promise.all(
            trackList.map(async (track) => {
                const trackId = track.uri.split(":")[2];
                const trackUrl = `https://open.spotify.com/track/${trackId}`;

                const trackData = await getData(trackUrl);

                return {
                    id: trackId,
                    name: trackData.name,
                    artists: trackData.artists
                        .map(a => a.name)
                        .join(", "),
                    image: trackData.visualIdentity.image.at(-1)?.url,
                };
            })
        );
        res.status(200).json({
            playlist: {
                name,
                image: playlistImage
            },
            tracks
        });

    } catch (error) {
        res.status(404).json({err : error.message});
    }
}

export {getPlaylist};