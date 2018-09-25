import React, {  Component } from 'react';

class Playlist extends Component {
    state = {
      showPlaylist: false,
    }
    _handleTrackClick(track) {
      this.props.onTrackClick(track)
    }
  
    render() {
      const { tracks, currentTrack } = this.props
      return (
        <aside className="media-playlist">
          <header className="media-playlist-header">
            <h3 className="media-playlist-title" onClick={() => 
              this.setState({ showPlaylist: !this.state.showPlaylist })
            }>
                Playlist
            </h3>
          </header>
          {this.state.showPlaylist && (
            <ul className="media-playlist-tracks">
              {tracks.map(track => (
                <li
                  key={track.label}
                  className={`media-playlist-track ${
                    track === currentTrack ? 'is-active' : ''
                    }`}
                  onClick={this._handleTrackClick.bind(this, track)}
                >
                  {track.label}
                </li>
              ))}
            </ul>
          )}
        </aside>
      )
    }
  }

  export default Playlist;