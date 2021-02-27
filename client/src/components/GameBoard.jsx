import React, { useEffect, useState } from 'react'

function GameBoard({tracks, playlist}) {
  const [songs, setSongs] = useState([]);
  const [fourTracks, setFourTracks] = useState([]);

  useEffect(() => {
    setSongs(tracks[0]);

    if (songs.length)
      shuffleTracks();

  }, [tracks, songs]);

  const shuffleTracks = () => {
      const fourArr = [];
      const newArr = songs;

      for (let i = 0; i < 4; i++) { 
        let idx = Math.floor(Math.random() * (newArr.length - 0)) + 0;

        console.log(songs[idx]);
      }

      
  };

  return (
    <div>
      <h3>{ playlist.name }</h3>
      { fourTracks.map((item) => <p key={item.track.id}>{ item.track.name }</p>) }
      <button onClick={shuffleTracks}>shuffle again</button>
    </div>
  )
}

export default GameBoard

