import { connect } from 'react-redux'
import Header from './Header'

const mapStateToProps = (state, props) => ({
  ...props,
  data: state.content.data.cHeader,
})

export default connect(mapStateToProps)(Header)
