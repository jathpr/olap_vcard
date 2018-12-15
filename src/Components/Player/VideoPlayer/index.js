import { connect } from 'react-redux'
import { videoPlayPause, setVideo } from 'redux/actions'
import VideoPlayer from './VideoPlayer'

const mapStateToProps = (state, props) => ({
  ...props,
  isVideoPlaying: state.player.isVideoPlaying,
  isVideoInnerState: state.player.isVideoInnerState,
  currentVideo: state.player.currentVideo,
})

const mapDispatchToProps = dispatch => ({
  playPauseVideo: (isPlay, isInner) => dispatch(videoPlayPause(isPlay, isInner)),
  setVideo: track => dispatch(setVideo(track, true)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer)
