import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

/** Components */
import Header from '../components/header'

/** Styles */
import '../css/main.css'
import '../css/contact.css'

export default ({ location }) => {
  return (
    <div className="container h-100">
      <Header location={location}
              title="Contact"></Header>
      <div class="row h-75 align-items-center justify-content-center">
        <div class="col-8">
          <h1>Contact</h1>
          <p>If you want to contact me about job offers, projects or questions</p>
          <hr></hr>
          <p className="text-center p-email">
            <a className="text-decoration-none" href="mailto:johann.servoire@gmail.com">johann.servoire@gmail.com</a>
          </p>
          <hr></hr>
        </div>
      </div>
    </div>
  )
}
