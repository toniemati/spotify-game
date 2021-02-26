import React from 'react'

function PlaylistItem({playlist, onSelectPlaylist}) {
  return (
    <div>
      <h3>{playlist.name}</h3>
      <p onClick={onSelectPlaylist}>{playlist.id}</p>
    </div>
  )
}

export default PlaylistItem
