import React, { Fragment } from 'react'
import Button from 'reactstrap/lib/Button'
import Link from 'react-router-dom/Link'

function Contacts({ data }) {
  const btnStyle = { width: 40, height: 40, margin: 5, padding: 0 }

  function createMarkup() {
    return { __html: data.contacts }
  }

  if (data) {
    return (
      <Fragment>
        <div className="row">
          <div className="col-12 text-center" dangerouslySetInnerHTML={createMarkup()} />
        </div>
        <Link to="//www.facebook.com/olga.podgaiskaja" target="blank">
          <Button style={btnStyle}>Fb</Button>
        </Link>
        <Link to="//vk.com/id12970969" target="blank">
          <Button style={btnStyle}>Vk</Button>
        </Link>
      </Fragment>
    )
  }
  return null
}

export default Contacts
