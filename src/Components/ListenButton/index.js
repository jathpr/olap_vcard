import { connect } from 'react-redux'
import { togglePlayer } from 'redux/actions'
import ListenButton from './ListenButton'

const mapStateToProps = state => ({
  showPlayer: state.player.isPlayerVisible,
  cPlayer: state.content.data.cPlayer,
})

const mapDispatchToProps = dispatch => ({
  togglePlayer: showPlayer => () => dispatch(togglePlayer(showPlayer)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListenButton)
