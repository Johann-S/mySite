import React from 'react'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import 'boxicons'

/** Components */
import Container from '../components/container'
import Content from '../components/content'
import Header from '../components/header'

const Experiences = ({ intl, location }) => {
  return (
    <Container>
      <Header location={location}
              title={intl.formatMessage({ id: 'navbar.experiences' })}></Header>
      <Content>
        <h1 className="mb-3">{intl.formatMessage({ id: 'navbar.experiences' })}</h1>
        <div className="mb-2">
          <p>
            <span className="badge badge-info mr-2">
              <span className="align-middle">2018</span>
              <box-icon rotate="180" color="white" name="arrow-back"></box-icon>
              <span className="align-middle">?</span>
            </span>
            <FormattedMessage id="index.currentJob">
              {(txt) => (<span className="align-middle">{txt} <a className="text-decoration-none" href="https://www.groupe-ldlc.com/">LDLC</a></span>)}
            </FormattedMessage>
          </p>
          <ul>
            <FormattedMessage id="experiences.ldlc1">
              {(txt) => (<li>{txt}</li>)}
            </FormattedMessage>
            <FormattedMessage id="experiences.ldlc2">
              {(txt) => (<li>{txt}</li>)}
            </FormattedMessage>
            <FormattedMessage id="experiences.ldlc3">
              {(txt) => (<li>{txt}</li>)}
            </FormattedMessage>
          </ul>
        </div>
        <hr></hr>
        <div className="mb-2">
          <p>
            <span className="badge badge-info mr-2">
              <span className="align-middle">2016</span>
              <box-icon rotate="180" color="white" name="arrow-back"></box-icon>
              <span className="align-middle">?</span>
            </span>
            <FormattedMessage id="index.bootstrap">
              {(txt) => (<span className="align-middle">{txt} <a className="text-decoration-none" href="https://getbootstrap.com/">Bootstrap</a></span>)}
            </FormattedMessage>
          </p>
          <ul>
            <FormattedMessage id="experiences.bootstrap1">
              {(txt) => (<li>{txt}</li>)}
            </FormattedMessage>
            <FormattedMessage id="experiences.bootstrap2">
              {(txt) => (<li>{txt} <a className="" href="https://www.browserstack.com/">BrowserStack</a></li>)}
            </FormattedMessage>
            <FormattedMessage id="experiences.bootstrap3">
              {(txt) => (<li>{txt}</li>)}
            </FormattedMessage>
          </ul>
        </div>
        <hr></hr>
        <div className="mb-2">
          <p>
            <span className="badge badge-info mr-2">
              <span className="align-middle">2016</span>
              <box-icon rotate="180" color="white" name="arrow-back"></box-icon>
              <span className="align-middle">2017</span>
            </span>
            <span className="align-middle">
              <FormattedMessage id="experiences.sii" />
              <a className="text-decoration-none" href="http://www.groupe-sii.com/">SII</a>
            </span>
          </p>
          <ul>
            <FormattedMessage id="experiences.sii1">{(txt) => (<li>{txt}</li>)}</FormattedMessage>
            <FormattedMessage id="experiences.sii2">{(txt) => (<li>{txt}</li>)}</FormattedMessage>
          </ul>
        </div>
        <hr></hr>
        <div>
          <p>
            <span className="badge badge-info mr-2">
              <span className="align-middle">2012</span>
              <box-icon rotate="180" color="white" name="arrow-back"></box-icon>
              <span className="align-middle">2016</span>
            </span>
            <span className="align-middle">
              <FormattedMessage id="experiences.it" />
              <a className="text-decoration-none" href="https://www.interactiv-technologies.com/fr/">Interactiv' Technologies</a>
            </span>
          </p>
          <ul>
            <FormattedMessage id="experiences.it1">{(txt) => (<li>{txt}</li>)}</FormattedMessage>
            <FormattedMessage id="experiences.it2">{(txt) => (<li>{txt}</li>)}</FormattedMessage>
          </ul>
        </div>
      </Content>
    </Container>
  )
}

export default injectIntl(Experiences)
