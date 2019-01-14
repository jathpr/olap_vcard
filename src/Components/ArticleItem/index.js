import { connect } from 'react-redux'
import ArticleItem from './ArticleItem'

const mapStateToProps = (state, props) => ({
  locale: state.language,
  popupMessage: state.content.data.cData.copyLink,
  ...props,
})

export default connect(mapStateToProps)(ArticleItem)
