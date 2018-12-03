import { connect } from 'react-redux'
import Projects from './Projects'

const mapStateToProps = state => ({
  data: state.content.data.cProject,
})

export default connect(mapStateToProps)(Projects)
