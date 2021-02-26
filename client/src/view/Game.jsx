import React, { useState, useEffect} from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
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

  useEffect(() => {
    spotify.setAccessToken(creds.access_token);
    spotify.getMe().then(data => setUserId(data.body.id));

  }, [spotify, creds]);

  const getMyPlaylist = () => {
    spotify.getUserPlaylists(userId).then(data => setPlaylists(data.body.items));
  };

  return (
    <div>
      <h1>It's only game! 🎮</h1>
      {!playlists && <button onClick={getMyPlaylist}>get my playlist</button>}
      {playlists && <ListPlaylists playlists={playlists}/>}
    </div>
  )
}

export default Game
