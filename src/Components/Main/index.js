import { connect } from 'react-redux'
import { changeLanguage, togglePlayer, getContent } from 'redux/actions'
import { withRouter } from 'react-router-dom'
import Main from './Main'

const mapStateToProps = state => ({
  showPlayer: state.player.isPlayerVisible,
  language: state.language,
  data: state.content.data,
})

const mapDispatchToProps = dispatch => {
  dispatch(getContent())
  return {
    changeLanguage: lang => dispatch(changeLanguage(lang)),
    togglePlayer: showPlayer => dispatch(togglePlayer(showPlayer)),
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
)
