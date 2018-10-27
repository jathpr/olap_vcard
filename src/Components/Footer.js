import React from 'react'

function Footer({ data }) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">{data.general}</div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>{data.copyright}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
