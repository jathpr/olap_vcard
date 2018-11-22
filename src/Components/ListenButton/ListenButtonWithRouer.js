import React from 'react'
import withRouter from 'react-router-dom/es/withRouter'
import { ReactComponent as Play } from 'images/PlayButton.svg'
import styles from './listenbutton.module.css'

const ListenButtonWithRouer = withRouter(
  ({ showPlayer, cPlayer, onClick }) =>
    !showPlayer && (
      <button
        type="button"
        className={`${styles['listen-button']}`}
        // style={
        //   !(location.pathname === process.env.REACT_APP_HOME)
        //     ? { position: 'fixed', right: '5%', top: '90%' }
        //     : null
        // }
        onClick={onClick}>
        <Play />
        <span className={styles['listen-button__text']}>{cPlayer && cPlayer.listen}</span>
      </button>
    )
)

export default ListenButtonWithRouer
