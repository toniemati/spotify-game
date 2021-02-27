import React from 'react'

function PlaylistItem({playlist, onSelectPlaylist}) {
  return (
    <div>
      <h3 onClick={() => { onSelectPlaylist(playlist) }}>{playlist.name}</h3>
    </div>
  )
}

export default PlaylistItem
