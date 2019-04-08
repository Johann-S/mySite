import React from 'react'
import { Helmet } from 'react-helmet'
import { injectIntl } from 'gatsby-plugin-intl'

/** Components */
import Navbar from '../components/navbar'

const defaultTitle = 'Johann SERVOIRE'
const defaultDescription = 'header.defaultDescription'

class Header extends React.Component {
  get title() {
    return this.props.title
      ? `${this.props.intl.formatMessage({ id: this.props.title })} - ${defaultTitle}`
      : defaultTitle
  }

  get description() {
    return this.props.description
      ? this.props.intl.formatMessage({ id: this.props.description })
      : this.props.intl.formatMessage({ id: defaultDescription })
  }

  render() {
    return (
      <div className="mb-2">
        <Helmet>
          <html className="h-100" />
          <title>{this.title}</title>
          <meta name="description" content={this.description} />
          <body className="h-100" />
        </Helmet>
        <Navbar location={this.props.location}></Navbar>
      </div>
    )
  }
}

export default injectIntl(Header)
