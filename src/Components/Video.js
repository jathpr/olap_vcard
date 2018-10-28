import React, { Component } from 'react'
import VideoPlayer from './Player/VideoPlayer'
import Playlist from './Playlist'

const mod = (num, max) => (num + max) % max

class Video extends Component {
  playlist = [
    {
      src: `https:${this.props.data.fields.file.url}`,
      label: this.props.data.fields.title,
    },
  ].concat(
    this.props.videoList.map(video => ({
      src: video.fields.url,
      label: video.fields.title,
    }))
  )

  constructor(props) {
    super(props)
    this.state = {
      currentTrack: {
        src: `https:${props.data.fields.file.url}`,
        label: props.data.fields.title,
      },
      isPlaying: false,
    }
  }

  handleTrackClick = track => {
    this.setState({ currentTrack: track })
  }

  navigatePlaylist = direction => {
    const { currentTrack } = this.state
    const { playlist } = this.props
    const newIndex = mod(playlist.indexOf(currentTrack) + direction, playlist.length)
    this.setState({ currentTrack: playlist[newIndex] })
  }

  componentDidCatch() {
    this.setState({ isPlaying: false })
  }

  render() {
    const { currentTrack, isPlaying } = this.state
    return (
      <div className="media-player-wrapper">
        <VideoPlayer
          src={currentTrack.src}
          autoPlay={false}
          label={currentTrack.label}
          repeatTrack={false}
          onPrevTrack={() => this.navigatePlaylist(-1)}
          onNextTrack={() => this.navigatePlaylist(1)}
          onPlay={() => !isPlaying && this.setState({ isPlaying: true })}
          onPause={() => this.setState({ isPlaying: false })}
          onEnded={() => false && this.navigatePlaylist(1)}
        />
        <Playlist
          tracks={this.playlist}
          currentTrack={currentTrack}
          onTrackClick={this.handleTrackClick}
        />
      </div>
    )
  }
}

export default Video
