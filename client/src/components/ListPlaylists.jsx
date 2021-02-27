import React from 'react'
import PlaylistItem from './PlaylistItem'

function ListPlaylists({playlists, onSetPlaylist}) {

  return (
    <div className="list-playlist">
      {playlists.map(playlist => (
        <PlaylistItem onSelectPlaylist={() => { onSetPlaylist(playlist) }} playlist={playlist} key={playlist.id} />
      ))}
    </div>
  )
}

export default ListPlaylists
