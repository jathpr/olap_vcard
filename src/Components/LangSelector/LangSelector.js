// @flow

import React from 'react'
import styles from './language.module.css'

type Props = {
  firstLang: string,
  secondLang: string,
  changeLanguage: Function,
}

function LangSelector({ changeLanguage, firstLang, secondLang }: Props) {
  return (
    <div className={styles.lang__container}>
      <button
        type="button"
        onClick={() => changeLanguage('ru')}
        className={`${styles.lang__button}`}>
        {firstLang}
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('en-US')}
        className={`${styles.lang__button}`}>
        {secondLang}
      </button>
    </div>
  )
}

export default LangSelector
