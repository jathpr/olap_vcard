import { connect } from 'react-redux'
import { togglePlayer } from 'redux/actions'
import AudioPlayer from './AudioPlayer'

const mapDispatchToProps = dispatch => ({
  togglePlayer: showPlayer => dispatch(togglePlayer(showPlayer)),
})

export default connect(
  null,
  mapDispatchToProps
)(AudioPlayer)
