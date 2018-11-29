import { connect } from 'react-redux'
import { getContent } from 'redux/actions'
import { withRouter } from 'react-router-dom'
import Main from './Main'

const mapStateToProps = state => ({
  showPlayer: state.player.isPlayerVisible,
  data: state.content.data,
})

const mapDispatchToProps = dispatch => {
  dispatch(getContent())
  return {}
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
)
