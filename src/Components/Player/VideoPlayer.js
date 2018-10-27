import React, { Component } from 'react'
import Media from 'react-media-player/lib/Media'
import Player from 'react-media-player/lib/Player'
import CurrentTime from 'react-media-player/lib/controls/CurrentTime'
import Progress from 'react-media-player/lib/controls/Progress'
import Duration from 'react-media-player/lib/controls/Duration'
import Volume from 'react-media-player/lib/controls/Volume'
import keyboardControls from 'react-media-player/lib/utils/keyboard-controls'
import PlayPause from './PlayPause'
import MuteUnmute from './MuteUnmute'
import Fullscreen from './Fullscreen'
import PrevTrack from './PrevTrack'
import NextTrack from './NextTrack'
import SeekBar from './SeekBar'

class VideoPlayer extends Component {
  handlePrevTrack = () => {
    this.props.onPrevTrack()
  }

  handleNextTrack = () => {
    this.props.onNextTrack()
  }

  handleEnded = () => {
    this.props.onNextTrack()
  }

  render() {
    const { src, repeatTrack, autoPlay, label } = this.props

    return (
      <Media>
        {mediaProps => (
          <div
            role="button"
            className={`media-player${mediaProps.isFullscreen ? ' media-player--fullscreen' : ''}`}
            onKeyDown={keyboardControls.bind(null, mediaProps)}
            tabIndex="0">
            <div
              role="button"
              tabIndex="0"
              className="media-player-element"
              onKeyDown={() => {}}
              onClick={() => mediaProps.playPause()}>
              <Player src={src} loop={repeatTrack} autoPlay={autoPlay} onEnded={this.handleEnded} />
            </div>
            <div className="video-controls media-controls--full">
              <div className="media-row">
                <CurrentTime className="media-control media-control--current-time" />
                <div className="media-player-col-container">
                  <div className="media-player-title-text">{label}</div>
                  <div className="media-control-group media-control-group--seek">
                    <Progress className="media-control media-control--progress" />
                    <SeekBar className="media-control media-control--seekbar" />
                  </div>
                </div>
                <Duration className="media-control media-control--duration" />
              </div>
              <div className="media-row">
                <div className="media-control-group">
                  <PrevTrack
                    className="media-control media-control--prev-track"
                    onClick={this.handlePrevTrack}
                  />
                  <PlayPause className="media-control media-control--play-pause" />
                  <NextTrack
                    className="media-control media-control--next-track"
                    onClick={this.handleNextTrack}
                  />
                </div>
                <div className="media-control-group">
                  <MuteUnmute className="media-control media-control--mute-unmute" />
                  <Volume className="media-control media-control--volume" />
                  <Fullscreen className="media-control media-control--fullscreen" />
                </div>
              </div>
            </div>
          </div>
        )}
      </Media>
    )
  }
}

export default VideoPlayer
