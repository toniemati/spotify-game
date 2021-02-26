import React from 'react'
import PlaylistItem from './PlaylistItem'

function ListPlaylists({playlists}) {
  const selectPlaylist = (e) => {
    console.log(e.target.innerHTML)
  };

  return (
    <div className="list-playlist">
      {playlists.map(playlist => (
        <PlaylistItem onSelectPlaylist={selectPlaylist} playlist={playlist} key={playlist.id} />
      ))}
    </div>
  )
}

export default ListPlaylists
