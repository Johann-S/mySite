import React from 'react'

/** Components */
import Container from '../components/container'
import Content from '../components/content'
import Header from '../components/header'

/** Styles */
import '../css/contact.css'

export default ({ location }) => {
  return (
    <Container>
      <Header location={location}
              title="Contact"></Header>
      <Content>
        <div class="col-8">
          <h1>Contact</h1>
          <p>If you want to contact me about job offers, projects or questions</p>
          <hr></hr>
          <p className="text-center p-email">
            <a className="text-decoration-none" href="mailto:johann.servoire@gmail.com">johann.servoire@gmail.com</a>
          </p>
          <hr></hr>
        </div>
      </Content>
    </Container>
  )
}
