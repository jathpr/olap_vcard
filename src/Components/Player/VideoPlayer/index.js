import { connect } from 'react-redux'
import { videoPlayPause, setVideo } from 'redux/actions'
import VideoPlayer from './VideoPlayer'

const mapStateToProps = (state, props) => ({
  ...props,
  isVideoPlaying: state.player.isVideoPlaying,
  currentVideo: state.player.currentVideo,
})

const mapDispatchToProps = dispatch => ({
  playPauseVideo: isPlay => () => dispatch(videoPlayPause(isPlay)),
  setVideo: track => dispatch(setVideo(track)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer)
