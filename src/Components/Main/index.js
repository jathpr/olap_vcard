import { connect } from 'react-redux'
import { getContent, toggleMenu } from 'redux/actions'
import { withRouter } from 'react-router-dom'
import Main from './Main'

const mapStateToProps = state => ({
  showPlayer: state.player.isPlayerVisible,
  data: state.content.data,
  showMenu: state.responsive.showMenu,
})

const mapDispatchToProps = dispatch => {
  dispatch(getContent())
  return { toggleMenu: showMenu => () => dispatch(toggleMenu(showMenu)) } // use null value to change state from current
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
)
