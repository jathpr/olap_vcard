import { connect } from 'react-redux'
import { toggleMenu } from 'redux/actions'
import Header from './Header'

const mapStateToProps = (state, props) => ({
  ...props,
  data: state.content.data.cHeader,
  isPlayerVisible: state.player.isPlayerVisible,
})

const mapDispatchToProps = dispatch => ({
  toggleMenu: showMenu => () => dispatch(toggleMenu(showMenu)), // use null value to change state from current
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
