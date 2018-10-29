import React from 'react'
import withRouter from 'react-router-dom/es/withRouter'
import Button from 'reactstrap/lib/Button'

const ListenButtonWithRouer = withRouter(
  ({ location, showPlayer, cPlayer, onClick }) =>
    !showPlayer && (
      <Button
        className="main-play-button"
        style={
          !(location.pathname === process.env.REACT_APP_HOME)
            ? { position: 'fixed', right: '5%', top: '90%' }
            : null
        }
        onClick={onClick}>
        {cPlayer && cPlayer.listen}
      </Button>
    )
)

export default ListenButtonWithRouer
