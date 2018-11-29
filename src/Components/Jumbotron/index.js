import { connect } from 'react-redux'
import Jumbotron from './Jumbotron'

const mapStateToProps = (state, props) => ({
  ...props,
  cHeader: state.content.data.cHeader,
  cHome: state.content.data.cHome,
})

export default connect(mapStateToProps)(Jumbotron)
