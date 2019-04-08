import React from 'react'
import { injectIntl, FormattedMessage, Link } from 'gatsby-plugin-intl'
import 'boxicons'

/** Components */
import Container from '../components/container'
import Content from '../components/content'
import Header from '../components/header'

/** Images */
import profil from '../images/profil.jpg'

/** Styles */
import '../css/index.css';

const Index = ({ location, intl }) => {
  return (
    <Container>
      <Header location={location}></Header>
      <Content>
        <div className="text-center">
          <img src={profil} className="rounded mx-auto" width="200" alt={intl.formatMessage({ id: 'index.alt.pic' })} />
          <h3 className="mt-3">
            <FormattedMessage id="index.currentJob" />
            <a className="text-decoration-none" href="https://www.groupe-ldlc.com/">LDLC</a>
          </h3>
          <h4 className="mt-3">
            <FormattedMessage id="index.bootstrap" />
            <a className="text-decoration-none" href="https://getbootstrap.com/">Bootstrap</a>
            </h4>
          <h4 className="mt-3">
            <FormattedMessage id="index.mentor" />
            <a className="text-decoration-none" href="https://openclassrooms.com/">OpenClassRooms</a>
          </h4>
          <p className="mt-3">
            <FormattedMessage id="index.activities" />
          </p>
          <p className="mt-3">
            <FormattedMessage id="index.interested" />
            <Link to="/services"><FormattedMessage id="index.together" /></Link>!
          </p>
          <p className="mt-3">
            <a className="btn btn-light pb-0" href="https://github.com/Johann-S" role="button">
              <box-icon
                type="logo"
                name="github"
                size="md"></box-icon>
                <span className="ml-2">Code</span>
            </a>
            <a className="btn btn-light pb-0" href="https://twitter.com/jservoire" role="button">
              <box-icon
                type="logo"
                name="twitter"
                size="md"></box-icon>
                <span className="ml-2">Tweets</span>
            </a>
            <a className="btn btn-light pb-0" href="https://www.linkedin.com/in/johann-servoire-5896b063/" role="button">
              <box-icon
                type="logo"
                name="linkedin"
                size="md"></box-icon>
                <span className="ml-2"><FormattedMessage id="index.resume" /></span>
            </a>
          </p>
        </div>
      </Content>
    </Container>
  )
}

export default injectIntl(Index)
