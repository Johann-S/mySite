import React from 'react'
import { Link } from 'gatsby'

/** Components */
import Container from '../components/container'
import Content from '../components/content'
import Header from '../components/header'

export default ({ location }) => {
  return (
    <Container>
      <Header location={location}></Header>
      <Content>
        <div class="text-center">
          <h2>I think you're lost...</h2>
          <p>Come <Link to="/" className="text-decoration-none">home</Link></p>
          <div class="embed-responsive embed-responsive-16by9">
            <iframe title="One Republic - Come home" class="embed-responsive-item" src="https://www.youtube.com/embed/FV76H3rgkeU" allowfullscreen></iframe>
          </div>
        </div>
      </Content>
    </Container>
  )
}
