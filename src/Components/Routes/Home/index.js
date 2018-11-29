import { connect } from 'react-redux'
import Home from './Home'

const mapStateToProps = state => ({
  data: state.content.data.cHome,
})

export default connect(mapStateToProps)(Home)
