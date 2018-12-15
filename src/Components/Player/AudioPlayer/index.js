import { connect } from 'react-redux'
import { togglePlayer, setTrack, playPause } from 'redux/actions'
import AudioPlayer from './AudioPlayer'

const mapStateToProps = (state, props) => ({
  ...props,
  player: state.content.data.cPlayer,
  src: state.content.data.cAllMusic,
  isPlaying: state.player.isPlaying,
  isInnerState: state.player.isInnerState,
  currentTrack: state.player.currentTrack,
})

const mapDispatchToProps = dispatch => ({
  togglePlayer: showPlayer => dispatch(togglePlayer(showPlayer)),
  setTrack: track => dispatch(setTrack(track, true)),
  playPauseAudio: isPlay => dispatch(playPause(isPlay, true)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer)
