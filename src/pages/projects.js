import React from 'react'

/** Components */
import Container from '../components/container'
import Content from '../components/content'
import Header from '../components/header'

export default ({ location }) => {
  return (
    <Container>
      <Header location={location}
              title="Projects"></Header>
      <Content>
        <h1>Projects and plugins</h1>
        <div className="container mt-5">
          <div className="row">
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
        </div>
      </Content>
    </Container>
  )
}
