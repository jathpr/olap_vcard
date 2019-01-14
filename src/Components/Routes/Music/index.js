import { connect } from 'react-redux'
import { selectTrack } from 'redux/actions'
import Music from './Music'

const mapStateToProps = state => ({
  // cConcert: state.content.data.cConcert,
  // cFilm: state.content.data.cFilm,
  songList: state.content.data.cSongs,
  songsFilters: state.content.data.cMusicTypes,
})

const mapDispatchToProps = dispatch => ({
  selectTrack: title => () => dispatch(selectTrack(title)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Music)
