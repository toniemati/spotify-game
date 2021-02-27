import React, { useState, useEffect} from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import GameBoard from '../components/GameBoard';
import ListPlaylists from '../components/ListPlaylists';

const SPOTIFY = new SpotifyWebApi({
  clientId: 'fcecfc72172e4cd267473117a17cbd4d',
  clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
  redirectUri: 'http://www.example.com/callback'
});

function Game({creds}) {
  const [spotify] = useState(SPOTIFY);
  const [userId, setUserId] = useState();
  const [playlists, setPlaylists] = useState();
  const [currentPlaylist, setCurrentPlaylist] = useState();
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    spotify.setAccessToken(creds.access_token);
    spotify.getMe().then(data => setUserId(data.body.id));

  }, [spotify, creds]);

  const getMyPlaylist = () => {
    spotify.getUserPlaylists(userId).then(data => setPlaylists(data.body.items));
  };

  const setPlaylist = (playlist) => {
      setCurrentPlaylist(playlist);
      
      const { tracks: { total } } = playlist;
      const tracksArr = [];
      
      for (let i = 0; i < total; i += 100) {

        spotify.getPlaylistTracks(playlist.id, { offset: i })
        .then(({ body: { items } }) => {
          items.forEach((item) => {
            if (item.track.preview_url)
              tracksArr.push(item);
          });
          setTracks([...tracks, tracksArr]);
        });
      }

  };

  return (
    <div>
      <h1>It's only game! 🎮</h1>
      {!playlists && <button onClick={getMyPlaylist}>get my playlist</button>}
      {playlists && !currentPlaylist && <ListPlaylists onSetPlaylist={setPlaylist} playlists={playlists}/>}
      {currentPlaylist && tracks.length && <GameBoard playlist={currentPlaylist} tracks={tracks} />}
    </div>
  )
}

export default Game
