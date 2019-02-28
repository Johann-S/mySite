import React from 'react'
import { Link } from 'gatsby'

/** Components */
import Container from '../components/container'
import Content from '../components/content'
import Header from '../components/header'

/** Styles */
import '../css/services.css'

export default ({ location }) => {
  return (
    <Container>
      <Header location={location}
              title="Services"></Header>
      <Content>
        <div>
          <h2>Mentoring</h2>
          <p>
            Do you want to learn new things or improve your skills, but you don't know how, or you need someone to show you how? That's what I can help you with! I'll be there for you to help and show you the way to improve your knowledge and achieve your goals.
          </p>
        </div>
        <div className="mt-4">
          <h2>Engineering and designing apps</h2>
          <p>
            Designing a SPA (single page application), building a library, a hybrid application or an API,
            I can help you design your project to build something awesome together by improving your process or providing outside feedback.
          </p>
          <ul>
            <li>Which framework should I use? Should I use a framework?</li>
            <li>What's the best technology for my project?</li>
            <li>What technology suits the best for my team?</li>
          </ul>
          <p>I'm here to provide an answer to these questions as an IT consultant.</p>
        </div>
        <div className="mt-4">
          <h2>Training</h2>
          <p>
            Sometimes you or your team have a lack of knowledge or you want to learn new things (a framework, new languages, etc...),
            I can provide training remotely, or if you're a company, directly at your office.
          </p>
          <p>Some examples:</p>
          <ul>
            <li>Writing <strong>unit tests</strong> with Jasmine/QUnit/PHPUnit</li>
            <li>Learning <strong>Angular</strong> or <strong>React</strong></li>
            <li>How to write an <strong>API</strong> in Node.js</li>
          </ul>
        </div>
        <p className="text-center mt-5 p-contact">If you are interested, or if you have any questions do not hesite to <Link to="/contact">contact</Link> me so that we talk about your projects.</p>
      </Content>
    </Container>
  )
}
