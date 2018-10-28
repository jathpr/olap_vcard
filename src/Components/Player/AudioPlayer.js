import React, { Component } from 'react'
import Media from 'react-media-player/lib/Media'
import Player from 'react-media-player/lib/Player'
import CurrentTime from 'react-media-player/lib/controls/CurrentTime'
import SeekBar from 'react-media-player/lib/controls/SeekBar'
import Duration from 'react-media-player/lib/controls/Duration'
import Volume from 'react-media-player/lib/controls/Volume'
import keyboardControls from 'react-media-player/lib/utils/keyboard-controls'
import PlayPause from './PlayPause'
import MuteUnmute from './MuteUnmute'
import PrevTrack from './PrevTrack'
import NextTrack from './NextTrack'
import './Player.css'

class AudioPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTrack: 0,
      isPlaying: props.autoplay,
    }
  }

  handlePlay = () => {
    this.setState({ isPlaying: true })
  }

  handlePause = () => {
    this.setState({ isPlaying: false })
  }

  handlePrevTrack = () => {
    const newTrack = this.state.currentTrack - 1
    this.setState({ currentTrack: newTrack >= 0 ? newTrack : this.props.src.length - 1 })
  }

  handleNextTrack = () => {
    const newTrack = this.state.currentTrack + 1
    this.setState({ currentTrack: newTrack < this.props.src.length ? newTrack : 0 })
  }

  render() {
    const { src, playerRef, onClose } = this.props
    const { currentTrack, isPlaying } = this.state

    return (
      <Media>
        {mediaProps => (
          <div
            className="audio-container"
            role="button"
            onKeyDown={keyboardControls.bind(null, mediaProps)}
            tabIndex="0">
            {src && (
              <Player
                src={src[currentTrack].file.url}
                useAudioObject
                onPlay={this.handlePlay}
                onPause={this.handlePause}
                autoplay={isPlaying}
              />
            )}
            {
              <div className="media-controls" ref={playerRef}>
                <PrevTrack
                  className="media-control media-control--prev-track"
                  onClick={this.handlePrevTrack}
                />
                <PlayPause className="media-control media-control--play-pause" />
                <NextTrack
                  className="media-control media-control--next-track"
                  onClick={this.handleNextTrack}
                />
                <CurrentTime className="media-control media-control--current-time d-none d-sm-block" />
                <div className="media-player-col-container">
                  <div className="media-player-title-text">{src && src[currentTrack].title}</div>
                  <div className="media-controls-inner">
                    <SeekBar className="media-control media-control--volume-range" />
                  </div>
                </div>
                <Duration className="media-control media-control--duration d-none d-sm-block" />
                <MuteUnmute className="media-control media-control--mute-unmute" />
                <Volume className="media-control media-control--volume d-none d-sm-block" />
                <button type="button" onClick={onClose}>
                  X
                </button>
              </div>
            }
          </div>
        )}
      </Media>
    )
  }
}

export default AudioPlayer
