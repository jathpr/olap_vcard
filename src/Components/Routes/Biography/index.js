import { connect } from 'react-redux'
import Biography from './Biography'

const mapStateToProps = state => ({
  data: state.content.data.cBio,
})

export default connect(mapStateToProps)(Biography)
