import React from 'react'
import { injectIntl, FormattedMessage, Link } from 'gatsby-plugin-intl'

/** Components */
import Container from '../components/container'
import Content from '../components/content'
import Header from '../components/header'

/** Images */
import profil from '../images/profil.jpg'

/** Styles */
import '../css/index.css'

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
              <div className="box-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465	c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338	c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028	c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93	c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021	c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021	c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922	c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479	C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"/></svg>
              </div>
              <span className="ml-2">Code</span>
            </a>
            <a className="btn btn-light pb-0" href="https://twitter.com/jservoire" role="button">
              <div className="box-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"/></svg>
              </div>
              <span className="ml-2">Tweets</span>
            </a>
            <a className="btn btn-light pb-0" href="https://www.linkedin.com/in/johann-servoire-5896b063/" role="button">
              <div className="box-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.668,3H4.328C3.595,3,3,3.581,3,4.298v15.403C3,20.417,3.595,21,4.328,21h15.34c0.733,0,1.331-0.582,1.331-1.299V4.298 C20.999,3.581,20.401,3,19.668,3z M8.339,18.337H5.667v-8.59h2.672V18.337z M7.003,8.574c-0.856,0-1.548-0.694-1.548-1.548 s0.691-1.548,1.548-1.548c0.854,0,1.548,0.693,1.548,1.548S7.857,8.574,7.003,8.574z M18.338,18.337h-2.669V14.16 c0-0.996-0.018-2.277-1.388-2.277c-1.39,0-1.601,1.086-1.601,2.207v4.248h-2.667v-8.59h2.56v1.174h0.037 c0.355-0.675,1.227-1.387,2.524-1.387c2.704,0,3.203,1.778,3.203,4.092V18.337z"/></svg>
              </div>
              <span className="ml-2"><FormattedMessage id="index.resume" /></span>
            </a>
          </p>
        </div>
      </Content>
    </Container>
  )
}

export default injectIntl(Index)
