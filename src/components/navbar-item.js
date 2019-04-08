import React from 'react'
import { Link } from 'gatsby-plugin-intl'

import { getCurrentLocal } from '../util'

const defaultClasses = 'nav-item mb-0 mr-3'

export default class NavbarItem extends React.Component {
  get classes() {
    if (this.props.pathName === `/${getCurrentLocal()}${this.props.link}`) {
      return `${defaultClasses} active`
    }

    return defaultClasses
  }

  render() {
    return (
      <li className={this.classes}>
        <Link
          to={this.props.link}
          className="nav-link"
        >
          {this.props.text}
        </Link>
      </li>
    )
  }
}
