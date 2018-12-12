import React from 'react'
import Media from 'react-media-player/lib/Media'
import Player from 'react-media-player/lib/Player'
import CurrentTime from 'react-media-player/lib/controls/CurrentTime'
import Progress from 'react-media-player/lib/controls/Progress'
import Duration from 'react-media-player/lib/controls/Duration'
import Volume from 'react-media-player/lib/controls/Volume'
import keyboardControls from 'react-media-player/lib/utils/keyboard-controls'
import PlayPause from '../PlayPause'
import MuteUnmute from '../MuteUnmute'
import Fullscreen from '../Fullscreen'
import PrevTrack from '../PrevTrack'
import NextTrack from '../NextTrack'
import SeekBar from '../SeekBar'

function VideoPlayer({ tracks, currentVideo, isVideoPlaying, playPauseVideo, setVideo }) {
  const handlePrevTrack = () => {
    const newTrack = currentVideo - 1
    setVideo(newTrack >= 0 ? newTrack : tracks.length - 1)
  }

  const handleNextTrack = () => {
    const newTrack = currentVideo + 1
    setVideo(newTrack < tracks.length ? newTrack : 0)
  }
  const currentTrack = tracks[currentVideo]
  let ins = true // hook for work both redux and local media state
  return (
    <Media>
      {mediaProps => {
        if (!mediaProps.isLoading && (mediaProps.currentTime !== mediaProps.duration || ins))
          if (isVideoPlaying) mediaProps.play()
          else mediaProps.pause()
        ins = false
        return (
          <div
            role="button"
            className={`media-player${mediaProps.isFullscreen ? ' media-player--fullscreen' : ''}`}
            onKeyDown={keyboardControls.bind(null, mediaProps)}
            tabIndex="0">
            <div
              role="button"
              tabIndex="0"
              className="media-player-element"
              onKeyDown={playPauseVideo(!isVideoPlaying)}
              onClick={playPauseVideo(!isVideoPlaying)}>
              <Player src={currentTrack.src} onEnded={playPauseVideo(false)} />
            </div>
            <div className="video-controls media-controls--full">
              <div className="media-row">
                <CurrentTime className="media-control media-control--current-time" />
                <div className="media-player-col-container">
                  <div className="media-player-title-text">{currentTrack.label}</div>
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
                    onClick={handlePrevTrack}
                  />
                  <PlayPause
                    isPlaying={isVideoPlaying}
                    playPauseAudio={isVideoPlaying ? playPauseVideo(false) : playPauseVideo(true)}
                    className="media-control media-control--play-pause"
                  />
                  <NextTrack
                    className="media-control media-control--next-track"
                    onClick={handleNextTrack}
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
        )
      }}
    </Media>
  )
}

export default VideoPlayer
