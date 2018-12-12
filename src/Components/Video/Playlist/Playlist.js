import React, { useState } from 'react'

// const mod = (num, max) => (num + max) % max

function Playlist({ tracks, currentTrack, onTrackClick }) {
  const [showPlaylist, setShowPlaylist] = useState(false)

  // const navigatePlaylist = direction => {
  //   const { currentTrack } = this.state
  //   const { playlist } = this.props
  //   const newIndex = mod(playlist.indexOf(currentTrack) + direction, playlist.length)
  //   this.setState({ currentTrack: playlist[newIndex] })
  // }

  // const handleTrackClick = track => {
  //   this.props.onTrackClick(track)
  // }

  return (
    <aside className="media-playlist">
      <header className="media-playlist-header">
        <div
          className="media-playlist-button"
          role="button"
          tabIndex={0}
          onKeyPress={() => setShowPlaylist(!showPlaylist)}
          onClick={() => setShowPlaylist(!showPlaylist)}>
          <h3 className="media-playlist-title">Playlist</h3>
        </div>
      </header>
      {showPlaylist && (
        <ul className="media-playlist-tracks">
          {tracks.map((track, index) => (
            <li key={track.label}>
              <div
                className={`media-playlist-button media-playlist-track ${
                  track.label === currentTrack.label ? 'is-active' : ''
                }`}
                role="button"
                tabIndex={0}
                onClick={() => onTrackClick(index)}
                onKeyPress={() => onTrackClick(index)}>
                {track.label}
              </div>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

export default Playlist
