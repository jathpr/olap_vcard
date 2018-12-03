import { connect } from 'react-redux'
import News from './News'

const mapStateToProps = state => ({
  data: state.content.data.cNews,
})

export default connect(mapStateToProps)(News)
