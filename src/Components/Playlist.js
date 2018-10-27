import React, { Component } from 'react'

class Playlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPlaylist: false,
    }
    this.handleShowPlaylist = this.handleShowPlaylist.bind(this)
  }

  handleTrackClick(track) {
    this.props.onTrackClick(track)
  }

  handleShowPlaylist() {
    const { showPlaylist } = this.state
    this.setState({ showPlaylist: !showPlaylist })
  }

  render() {
    const { tracks, currentTrack } = this.props
    const { showPlaylist } = this.state
    return (
      <aside className="media-playlist">
        <header className="media-playlist-header">
          <div
            className="media-playlist-button"
            role="button"
            tabIndex={0}
            onKeyPress={this.handleShowPlaylist}
            onClick={this.handleShowPlaylist}>
            <h3 className="media-playlist-title">Playlist</h3>
          </div>
        </header>
        {showPlaylist && (
          <ul className="media-playlist-tracks">
            {tracks.map(track => (
              <li key={track.label}>
                <div
                  className={`media-playlist-button media-playlist-track ${
                    track.label === currentTrack.label ? 'is-active' : ''
                  }`}
                  role="button"
                  tabIndex={0}
                  onClick={this.handleTrackClick.bind(this, track)}
                  onKeyPress={this.handleTrackClick.bind(this, track)}>
                  {track.label}
                </div>
              </li>
            ))}
          </ul>
        )}
      </aside>
    )
  }
}

export default Playlist
