import { connect } from 'react-redux'
import Article from './Article'

const mapStateToProps = (state, props) => ({
  locale: state.language,
  ...props,
})

export default connect(mapStateToProps)(Article)
