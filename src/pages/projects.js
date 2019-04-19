import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'

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
              title="projects.title"></Header>
      <Content>
        <div className="container">
          <h1><FormattedMessage id="projects.subTitle" /></h1>
          <div className="row mt-5">
            <div className="col-6">
              <h4>
                <a className="text-decoration-none" href="https://www.npmjs.com/package/bs-custom-file-input">bs-custom-file-input</a>
              </h4>
              <FormattedMessage id="projects.bsCustomFileInput">
                {(txt) => (<p>{txt}</p>)}
              </FormattedMessage>
            </div>
            <div className="col-6">
              <h4>
                <a className="text-decoration-none" href="https://www.npmjs.com/package/bs-stepper">bs-stepper</a>
              </h4>
              <FormattedMessage id="projects.bsStepper">
                {(txt) => (<p>{txt}</p>)}
              </FormattedMessage>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h4>
                <a className="text-decoration-none" href="https://www.npmjs.com/package/bs-breakpoints">bs-breakpoints</a>
              </h4>
              <FormattedMessage id="projects.bsBreakpoints">
                {(txt) => (<p>{txt}</p>)}
              </FormattedMessage>
            </div>
            <div className="col-6">
              <h4>
                <a className="text-decoration-none" href="https://johann-s.github.io/bs-customizer/">bs-customizer</a>
              </h4>
              <FormattedMessage id="projects.bsCustomizer">
                {(txt) => (<p>{txt}</p>)}
              </FormattedMessage>
            </div>
          </div>
          <div className="row mt-5">
            <h2>
              <FormattedMessage id="projects.supportWork">
                {(txt) => (<span className="mr-2">{txt}</span>)}
              </FormattedMessage>
              <box-icon type="solid"
                        name="heart"
                        color="red"
                        size="md"></box-icon>
            </h2>
            <div className="pl-0 col-12">
              <p>
                <span>
                  <FormattedMessage id="projects.supportWorkInfo" />
                  <a className="text-decoration-none" href="https://www.patreon.com/jservoire">
                    <FormattedMessage id="projects.patreonPage" />
                  </a>
                </span>
                <FormattedMessage id="projects.orYouStalk" />
                <a href="https://gitstalk.netlify.com/johann-s">
                  <FormattedMessage id="projects.stalk" />
                </a>.
              </p>
              <FormattedMessage id="projects.donation">
                {(txt) => (<p>{txt}:</p>)}
              </FormattedMessage>
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
