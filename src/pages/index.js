import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

/** Components */
import Header from '../components/header'

export default ({ location }) => {
  return (
    <div className="container h-100">
      <Header location={location}></Header>
    </div>
  )
}
