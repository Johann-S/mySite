import React from 'react'
import { Link } from 'gatsby'

/** Components */
import Container from '../components/container'
import Content from '../components/content'
import Header from '../components/header'

export default ({ location }) => {
  return (
    <Container>
      <Header location={location}
              title="Services"></Header>
      <Content>
        <div>
          <h2>Mentoring</h2>
          <p>
            Do you want to learn new things or to improve your skills but you don't know how, or you need someone to show you how, that's what
            I offer here.
            I'll be their for you to help you and show you the way to be better and to achieve your goals.
          </p>
        </div>
        <div className="mt-4">
          <h2>Engineering and designing apps</h2>
          <p>
            Designing a SPA (single page application), building a library, an hybride application or an API,
            I can help you to design your project to build something awesome together by improving your process or giving an outside feedback.
          </p>
          <ul>
            <li>Which framework should I use ? Should I use a framework ?</li>
            <li>What's the best technology for my project ?</li>
            <li>What's technology suits the best for my team ?</li>
          </ul>
          <p>I'm here to provide an answer to those questions, or if you have a lack of manpower.</p>
        </div>
        <div className="mt-4">
          <h2>Training</h2>
          <p></p>
        </div>
        <p className="text-center">Interested by something, or if you have any questions do not hesite to <Link to="/contact">contact</Link> me, we will speak about your projects.</p>
      </Content>
    </Container>
  )
}
