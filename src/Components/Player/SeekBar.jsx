import React, { Component } from 'react'
import withMediaProps from 'react-media-player/lib/decorators/with-media-props'

class SeekBar extends Component {
  _isPlayingOnMouseDown = false

  _onChangeUsed = false

  shouldComponentUpdate({ media }) {
    return (
      this.props.media.currentTime !== media.currentTime ||
      this.props.media.duration !== media.duration
    )
  }

  handleMouseDown = () => {
    this.isPlayingOnMouseDown = this.props.media.isPlaying
    this.props.media.pause()
  }

  handleMouseUp = ({ target: { value } }) => {
    // seek on mouseUp as well because of this bug in <= IE11
    // https://github.com/facebook/react/issues/554
    if (!this.onChangeUsed) {
      this.props.media.seekTo(+value)
    }

    // only play if media was playing prior to mouseDown
    if (this.isPlayingOnMouseDown) {
      this.props.media.play()
    }
  }

  handleChange = ({ target: { value } }) => {
    this.props.media.seekTo(+value)
    this.onChangeUsed = true
  }

  render() {
    const { className, style, media } = this.props
    const { duration = 0, currentTime = 0 } = media
    return (
      <input
        type="range"
        step="any"
        max={duration.toFixed(4)}
        value={currentTime}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onChange={this.handleChange}
        className={className}
        style={{
          backgroundSize: `${(currentTime * 100) / duration}% 100%`,
          ...style,
        }}
      />
    )
  }
}

export default withMediaProps(SeekBar)
