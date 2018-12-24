// @flow

import React from 'react'
import styles from './language.module.css'

type Props = {
  firstLang: string,
  secondLang: string,
  language: string,
  changeLanguage: Function,
}

function LangSelector({ changeLanguage, firstLang, secondLang, language }: Props) {
  const isSmallScreen = window.innerWidth < 600
  return (
    <div className={styles.lang__container}>
      {(!isSmallScreen || (isSmallScreen && language === 'ru')) && (
        <button
          type="button"
          onClick={() => changeLanguage('en-US')}
          className={`${styles.lang__button}`}>
          {secondLang}
        </button>
      )}
      {(!isSmallScreen || (isSmallScreen && language === 'en-US')) && (
        <button
          type="button"
          onClick={() => changeLanguage('ru')}
          className={`${styles.lang__button}`}>
          {firstLang}
        </button>
      )}
    </div>
  )
}

export default LangSelector
