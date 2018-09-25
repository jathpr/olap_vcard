import React, { Component } from 'react'
import { Media, Player, controls, utils } from 'react-media-player'
import PlayPause from './PlayPause'
import MuteUnmute from './MuteUnmute'
import Fullscreen from './Fullscreen'
import PrevTrack from './PrevTrack'
import NextTrack from './NextTrack'
import SeekBar from './SeekBar'

const { CurrentTime, Progress, Duration, Volume } = controls
const { keyboardControls } = utils

class VideoPlayer extends Component {

  _handlePrevTrack = () => {
    this.props.onPrevTrack()
  }

  _handleNextTrack = () => {
    this.props.onNextTrack()
  }

  _handleEnded = () => {
    this.props.onNextTrack()
  }

  render() {
    const { src, repeatTrack, autoPlay, label } = this.props
   
    return (
      <Media>
        {mediaProps =>
          <div
            className={'media-player' + (mediaProps.isFullscreen ? ' media-player--fullscreen' : '')}
            onKeyDown={keyboardControls.bind(null, mediaProps)}
            tabIndex="0"
          >
            <div
              className="media-player-element"
              onClick={() => mediaProps.playPause()}
            >
              <Player
                src={src}
                loop={repeatTrack}
                autoPlay={autoPlay}
                onEnded={this._handleEnded}
              />
            </div>
            <div className="video-controls media-controls--full">
              <div className="media-row">
                <CurrentTime className="media-control media-control--current-time" />
                <div className="media-player-col-container">
                  <div className="media-player-title-text">
                    {label}
                  </div>
                  <div className="media-control-group media-control-group--seek">
                    <Progress className="media-control media-control--progress" />
                    <SeekBar className="media-control media-control--seekbar" />
                  </div>
                </div>
                <Duration className="media-control media-control--duration" />
              </div>
              <div className="media-row">
                <div className="media-control-group">
                  <PrevTrack className="media-control media-control--prev-track" onClick={this._handlePrevTrack} />
                  <PlayPause className="media-control media-control--play-pause" />
                  <NextTrack className="media-control media-control--next-track" onClick={this._handleNextTrack} />
                </div>
                <div className="media-control-group">
                  <MuteUnmute className="media-control media-control--mute-unmute" />
                  <Volume className="media-control media-control--volume" />
                  <Fullscreen className="media-control media-control--fullscreen" />
                </div>
              </div>
            </div>
          </div>
        }
      </Media>
    )
  }
}

export default VideoPlayer