import { connect } from 'react-redux'
import { changeLanguage } from 'redux/actions'
import LangSelector from './LangSelector'

const mapStateToProps = state => ({
  firstLang: state.content.data.cHeader.russian,
  secondLang: state.content.data.cHeader.english,
  language: state.language,
})

const mapDispatchToProps = dispatch => ({
  changeLanguage: lang => dispatch(changeLanguage(lang)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LangSelector)
