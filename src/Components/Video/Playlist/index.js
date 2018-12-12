import { connect } from 'react-redux'
import { setVideo } from 'redux/actions'
import Playlist from './Playlist'

const mapStateToProps = (state, props) => ({
  ...props,
  currentTrack: state.player.currentVideo,
})

const mapDispatchToProps = dispatch => ({
  onTrackClick: index => dispatch(setVideo(index)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist)
