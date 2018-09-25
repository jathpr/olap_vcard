import React, { Component } from 'react'
import VideoPlayer from './Player/VideoPlayer'
import Playlist from './Playlist'

const mod = (num, max) => (num + max) % max

class Video extends Component {
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
    const { playlist } = this.props
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
          tracks={playlist}
          currentTrack={currentTrack}
          onTrackClick={this.handleTrackClick}
        />
      </div>
    )
  }
}

export default Video

// const videoSrc = "https://www.youtube.com/embed/" +
//     props.video + "?autoplay=" +
//     props.autoplay + "&rel=" +
//     props.rel + "&modestbranding=" +
//     props.modest + "&showinfo=" +
//     props.info + "&iv_load_policy=" +
//     '3';
