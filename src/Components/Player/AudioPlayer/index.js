import { connect } from 'react-redux'
import { togglePlayer, setTrack, playPause } from 'redux/actions'
import AudioPlayer from './AudioPlayer'

const mapStateToProps = (state, props) => ({
  ...props,
  player: state.content.data.cPlayer,
  src: state.content.data.cAllMusic,
  isPlaying: state.player.isPlaying,
  currentTrack: state.player.currentTrack,
})

const mapDispatchToProps = dispatch => ({
  togglePlayer: showPlayer => dispatch(togglePlayer(showPlayer)),
  setTrack: track => dispatch(setTrack(track)),
  playPauseAudio: isPlay => () => dispatch(playPause(isPlay)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer)
