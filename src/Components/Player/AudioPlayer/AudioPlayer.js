import React from 'react'
import Media from 'react-media-player/lib/Media'
import Player from 'react-media-player/lib/Player'
import CurrentTime from 'react-media-player/lib/controls/CurrentTime'
import SeekBar from 'react-media-player/lib/controls/SeekBar'
import Duration from 'react-media-player/lib/controls/Duration'
import Volume from 'react-media-player/lib/controls/Volume'
import keyboardControls from 'react-media-player/lib/utils/keyboard-controls'
import PlayPause from '../PlayPause'
import MuteUnmute from '../MuteUnmute'
import PrevTrack from '../PrevTrack'
import NextTrack from '../NextTrack'
import '../Player.css'

function AudioPlayer({
  src,
  className,
  togglePlayer,
  currentTrack,
  isPlaying,
  playPauseAudio,
  setTrack,
}) {
  const handlePrevTrack = () => {
    const newTrack = currentTrack - 1
    setTrack(newTrack >= 0 ? newTrack : src.length - 1)
  }

  const handleNextTrack = () => {
    const newTrack = currentTrack + 1
    setTrack(newTrack < src.length ? newTrack : 0)
  }

  return (
    <Media>
      {mediaProps => {
        if (!mediaProps.isLoading)
          if (isPlaying) mediaProps.play()
          else mediaProps.pause()
        return (
          <div
            className={`${className} audio-container`}
            role="button"
            onKeyDown={keyboardControls.bind(null, mediaProps)}
            tabIndex="0">
            {src && <Player src={src[currentTrack].file.url} useAudioObject />}
            {
              <div className="media-controls">
                <PrevTrack
                  className="media-control media-control--prev-track"
                  onClick={handlePrevTrack}
                />
                <PlayPause
                  isPlaying={isPlaying}
                  playPauseAudio={isPlaying ? playPauseAudio(false) : playPauseAudio(true)}
                  className="media-control media-control--play-pause"
                />
                <NextTrack
                  className="media-control media-control--next-track"
                  onClick={handleNextTrack}
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
                <button type="button" onClick={() => togglePlayer(false)}>
                  X
                </button>
              </div>
            }
          </div>
        )
      }}
    </Media>
  )
}

export default AudioPlayer
