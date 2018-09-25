import React, { Component } from 'react'
import { Media, Player, controls } from 'react-media-player'
import keyboardControls from 'react-media-player/lib/utils/keyboard-controls'
import PlayPause from './PlayPause'
import MuteUnmute from './MuteUnmute'
import PrevTrack from './PrevTrack'
import NextTrack from './NextTrack'
import './Player.css'

const {
  SeekBar,
  CurrentTime,
  Duration,
  Volume,
} = controls

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrack: 0,
    }
  }

  _handlePlay = () => {
    this.setState({ isPlaying: true })
  }

  _handlePause = () => {
    this.setState({ isPlaying: false })
  }

  _handlePrevTrack = () => {
    const newTrack = this.state.currentTrack - 1;
    this.setState({ currentTrack: newTrack >= 0 ? newTrack : this.props.src.length - 1 })
  }

  _handleNextTrack = () => {
    const newTrack = this.state.currentTrack + 1;
    this.setState({ currentTrack: newTrack < this.props.src.length ? newTrack : 0 })
  }

  render() {
    const { src, playerRef } = this.props;
    const { currentTrack } = this.state;

    return (
      <Media>
        {mediaProps =>
          <div onKeyDown={keyboardControls.bind(null, mediaProps)}
          tabIndex="0">
            {src && <Player
              src={src[currentTrack].file.url}
              useAudioObject
              onPlay={this._handlePlay}
              onPause={this._handlePause}
            />}
            {<div className="media-controls" ref={playerRef}>
              <PrevTrack className="media-control media-control--prev-track" onClick={this._handlePrevTrack} />
              <PlayPause className="media-control media-control--play-pause" />
              <NextTrack className="media-control media-control--next-track" onClick={this._handleNextTrack} />
              <CurrentTime className="media-control media-control--current-time d-none d-sm-block" />
              <div className="media-player-col-container">
                <div className="media-player-title-text">
                  {src && src[currentTrack].title}
                </div>
                <div className="media-controls-inner">
                  <SeekBar className="media-control media-control--volume-range" />
                </div>
              </div>
              <Duration className="media-control media-control--duration d-none d-sm-block" />
              <MuteUnmute className="media-control media-control--mute-unmute" />
              <Volume className="media-control media-control--volume d-none d-sm-block" />
            </div>
            }
          </div>
        }
      </Media>
    )
  }
}

export default AudioPlayer
