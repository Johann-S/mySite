import React from 'react'
import { FormattedMessage, Link } from 'gatsby-plugin-intl'

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
          <FormattedMessage id="services.mentorTitle">
            {(txt) => (<h2>{txt}</h2>)}
          </FormattedMessage>
          <FormattedMessage id="services.mentorDescription">
            {(txt) => (<p>{txt}</p>)}
          </FormattedMessage>
        </div>
        <div className="mt-4">
          <FormattedMessage id="services.engineeringTitle">
            {(txt) => (<h2>{txt}</h2>)}
          </FormattedMessage>
          <FormattedMessage id="services.engineeringDescription">
            {(txt) => (<p>{txt}</p>)}
          </FormattedMessage>
        </div>
        <div className="mt-4">
          <FormattedMessage id="services.trainingTitle">
            {(txt) => (<h2>{txt}</h2>)}
          </FormattedMessage>
          <FormattedMessage id="services.trainingDescription">
            {(txt) => (<p>{txt}</p>)}
          </FormattedMessage>
          <p><FormattedMessage id="services.trainingExampleTitle"/>:</p>
          <ul>
            <FormattedMessage id="services.trainingExample1">
              {(txt) => (<li>{txt}</li>)}
            </FormattedMessage>
            <FormattedMessage id="services.trainingExample2">
              {(txt) => (<li>{txt}</li>)}
            </FormattedMessage>
            <FormattedMessage id="services.trainingExample3">
              {(txt) => (<li>{txt}</li>)}
            </FormattedMessage>
          </ul>
        </div>
        <p className="text-center mt-5 p-contact">
          <FormattedMessage id="services.lastSentence1" />
          <Link to="/contact"><FormattedMessage id="services.lastSentence2" /></Link>
          <FormattedMessage id="services.lastSentence3" />
        </p>
      </Content>
    </Container>
  )
}
