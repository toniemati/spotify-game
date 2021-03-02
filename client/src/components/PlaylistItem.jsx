import React from 'react'
import './PlaylistItem.css';

function PlaylistItem({playlist, onSelectPlaylist}) {
  console.log(playlist.images)

  return (
    <div onClick={() => { onSelectPlaylist(playlist) }} className="playlist-item">
      <img src={playlist.images[0].url} alt="img" />
      <h3 >{playlist.name}</h3>
    </div>
  )
}

export default PlaylistItem
