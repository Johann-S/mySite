import React from 'react'
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl'

/** Components */
import Container from '../components/container'
import Content from '../components/content'
import Header from '../components/header'

/** Images */
import brave from '../images/brave.png'

/** Styles */
import '../css/projects.css'

const Projects = ({ location, intl }) => {
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
          <div className="row">
            <div className="col-6">
              <h4>
                <a className="text-decoration-none" href="https://www.npmjs.com/package/find-unused-sass-variables">find-unused-sass-variables</a>
              </h4>
              <FormattedMessage id="projects.fusv">
                {(txt) => (<p>{txt}</p>)}
              </FormattedMessage>
            </div>
          </div>
          <div className="row mt-5">
            <h2>
              <FormattedMessage id="projects.supportWork">
                {(txt) => (<span className="mr-2">{txt}</span>)}
              </FormattedMessage>
              <div className="box-icon red">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.353 2.355-6.049-.002-8.416zm-1.412 7.002L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002 1.563 1.571 1.564 4.025.002 5.588z"/>
                </svg>
              </div>
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
                <a className="text-decoration-none" href="https://gitstalk.netlify.com/johann-s">
                  <FormattedMessage id="projects.stalk" />
                </a>.
              </p>
              <FormattedMessage id="projects.donation">
                {(txt) => (<p>{txt}:</p>)}
              </FormattedMessage>
              <ul>
                <li>
                  <a className="text-decoration-none" href="https://www.patreon.com/jservoire">Patreon</a>
                </li>
                <li>
                  <a className="text-decoration-none" href="https://www.paypal.me/jservoire">My PayPal</a>
                </li>
                <li>
                  <a className="text-decoration-none" href="https://liberapay.com/Johann-S/">Liberapay</a>
                </li>
                <li>
                  <a className="text-decoration-none" href="https://brave.com/joh343">
                    <img className="brave-img" src={brave} alt={intl.formatMessage({ id: 'projects.brave' })} /> <FormattedMessage id="projects.brave" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  )
}

export default injectIntl(Projects)
