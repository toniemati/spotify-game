import React from 'react'
import PlaylistItem from './PlaylistItem'
import './ListPlaylists.css';

function ListPlaylists({playlists, onSetPlaylist}) {

  return (
    <div className="list-playlists">
      {playlists.map(playlist => (
        <PlaylistItem onSelectPlaylist={() => { onSetPlaylist(playlist) }} playlist={playlist} key={playlist.id} />
      ))}
    </div>
  )
}

export default ListPlaylists
