import React from 'react'

/** Styles */
import '../css/content.css'

export default ({ children }) => (
  <div className="content row h-85 justify-content-center">
    <div className="col-8 mt-5">{children}</div>
  </div>
)
