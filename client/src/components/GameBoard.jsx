import React, { useEffect, useRef, useState, useCallback } from 'react'

function GameBoard({tracks, playlist}) {
  const [songs] = useState(tracks[0]);
  const [fourTracks, setFourTracks] = useState([]);
  const [points, setPoints] = useState(0);
  const audio = useRef();

  useEffect(() => {
    shuffleTrakcs();
  }, [tracks]);

  const shuffleTrakcs = useCallback(() => {
    const fourArr = [];

    for (let i = 0; i < 4; i++) {
      let idx = Math.floor(Math.random() * songs.length);
      if (fourArr.includes(songs[idx]))
        console.log('includes');
      else
        fourArr.push(songs[idx]);
    }
    setFourTracks(fourArr);
  }, [tracks]);

  useEffect(() => {
    if (!fourTracks.length) return;

    let idx = Math.floor(Math.random() * fourTracks.length);
    const url = fourTracks[idx].track.preview_url;
    audio.current.src = url;
    audio.current.volume = 0.2;
    audio.current.play();
  }, [fourTracks]);

  const checkAnswer = (item) => {
    const { track: { preview_url } } = item;
    
    if (preview_url === audio.current.src) {
      setPoints(points + 1)
    } else {
      // setPoints(points - 1);
    }

    shuffleTrakcs();
  };


  return (
    <div>
      <h2>{ playlist.name } - { songs.length }</h2>
      <h3>{ points } score</h3>
      { fourTracks.map((item) => <p onClick={() => checkAnswer(item)} key={item.track.id}>{ item.track.name }</p>) }
      <audio ref={audio}></audio>
    </div>
  )
}

export default GameBoard