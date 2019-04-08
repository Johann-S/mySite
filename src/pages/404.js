import React from 'react'
import { FormattedMessage, Link } from 'gatsby-plugin-intl'

/** Components */
import Container from '../components/container'
import Content from '../components/content'
import Header from '../components/header'

export default ({ location }) => {
  return (
    <Container>
      <Header location={location}></Header>
      <Content>
        <div className="text-center">
          <h2><FormattedMessage id="404.message" /></h2>
          <p>Come <Link to="/" className="text-decoration-none">home</Link></p>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe title="One Republic - Come home" className="embed-responsive-item" src="https://www.youtube.com/embed/FV76H3rgkeU" allowFullScreen></iframe>
          </div>
        </div>
      </Content>
    </Container>
  )
}
