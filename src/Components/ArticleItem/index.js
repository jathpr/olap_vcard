import { connect } from 'react-redux'
import ArticleItem from './ArticleItem'

const mapStateToProps = (state, props) => ({
  locale: state.language,
  ...props,
})

export default connect(mapStateToProps)(ArticleItem)
