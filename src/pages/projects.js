import React from 'react'
import 'boxicons'

/** Components */
import Container from '../components/container'
import Content from '../components/content'
import Header from '../components/header'

/** Styles */
import '../css/projects.css'

export default ({ location }) => {
  return (
    <Container>
      <Header location={location}
              title="Projects"></Header>
      <Content>
        <div className="container">
          <h1>Projects and plugins</h1>
          <div className="row mt-5">
            <div className="col-6">
              <h4>
                <a className="text-decoration-none" href="https://www.npmjs.com/package/bs-custom-file-input">bs-custom-file-input</a>
              </h4>
              <p>Plugin to dynamize Bootstrap 4 custom file input</p>
            </div>
            <div className="col-6">
              <h4>
                <a className="text-decoration-none" href="https://www.npmjs.com/package/bs-stepper">bs-stepper</a>
              </h4>
              <p>Stepper component for Bootstrap 4</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h4>
                <a className="text-decoration-none" href="https://www.npmjs.com/package/bs-breakpoints">bs-breakpoints</a>
              </h4>
              <p>A plugin which detect Bootstrap 4 breakpoints and emit when there is a change</p>
            </div>
            <div className="col-6">
              <h4>
                <a className="text-decoration-none" href="https://johann-s.github.io/bs-customizer/">bs-customizer</a>
              </h4>
              <p>Create a custom Bootstrap 4.x build by choosing the components and JavaScript plugins you need</p>
            </div>
          </div>
          <div className="row mt-5">
            <h2>
              <span className="mr-2">Donate</span>
              <box-icon type="solid"
                        name="heart"
                        color="red"
                        size="md"></box-icon>
            </h2>
            <div className="col-12">
              <p>
                <span>You can read more about me and my open source work on my <a className="text-decoration-none" href="https://www.patreon.com/jservoire">Patreon page</a></span>
                <span> or you can <a href="https://gitstalk.netlify.com/johann-s">stalk me</a>.</span>
              </p>
              <p>If you want to support my work you can make donations here:</p>
              <ul>
                <li>
                  <a href="https://www.patreon.com/jservoire">Patreon</a>
                </li>
                <li>
                  <a href="https://www.paypal.me/jservoire">My PayPal</a>
                </li>
                <li>
                  <a href="https://liberapay.com/Johann-S/">Liberapay</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  )
}
