import React from 'react'
import { Helmet } from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.css'

/** Components */
import Navbar from '../components/navbar'

export default ({ location }) => {
  return (
    <div className="container">
      <Helmet>
        <title>Johann SERVOIRE</title>
        <meta name="description" content="Web developer and open-sourcerer" />
      </Helmet>
      <Navbar location={location}></Navbar>
    </div>
  )
}
