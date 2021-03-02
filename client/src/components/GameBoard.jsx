import React, { useEffect, useRef, useState, useCallback } from 'react'

function GameBoard({tracks, playlist}) {
  const [songs] = useState(tracks[0]);
  const [fourTracks, setFourTracks] = useState([]);
  const [points, setPoints] = useState(0);
  const [round, setRound] = useState(0);
  let timerOut = null;
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
  });

  useEffect(() => {
    if (fourTracks.length < 4) return;

    let idx = Math.floor(Math.random() * fourTracks.length);

    playAudio(fourTracks[idx].track.preview_url);

  }, [fourTracks]);

  const playAudio = (url) => {
    audio.current.src = url;
    audio.current.volume = 0.1;
    
    clearingTimeOut();

    timerOut = setTimeout(() => {
      shuffleTrakcs();
    }, 5000);

    audio.current.play();


  };

  const checkAnswer = (item) => {
    clearingTimeOut();
    const { track: { preview_url } } = item;
    
    if (preview_url === audio.current.src) 
      setPoints(points + 1);
    
    setRound(round + 1);
    shuffleTrakcs();
  };

  const clearingTimeOut = () => {
    if (timerOut)
      clearTimeout(timerOut);
    
    timerOut = null;
  };


  return (
    <div>
      <h2>{ playlist.name } - { songs.length }</h2>
      <h3>{ points } points / { round } round</h3>
      { fourTracks.map((item) => <p onClick={() => checkAnswer(item)} key={item.track.id}>{ item.track.name }</p>) }
      <audio ref={audio}></audio>
    </div>
  )
}

export default GameBoard