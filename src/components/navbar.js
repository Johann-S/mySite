import React from 'react'
import { changeLocale, injectIntl, FormattedMessage, Link } from 'gatsby-plugin-intl'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/dropdown'
import 'boxicons'

/** Styles */
import '../css/navbar.css'

/** Images */
import flagEn from '../images/flag_en.png'
import flagFr from '../images/flag_fr.png'

/** Components */
import NavbarItem from './navbar-item'

class Navbar extends React.Component {
  home() {
    if (this.props.location.pathname === '/') {
      return (<span>Johann SERVOIRE</span>)
    } else {
      return (
        <Link to="/">
          <box-icon type="regular"
                    animation="tada-hover"
                    name="home"></box-icon>
        </Link>
      )
    }
  }

  currentLocal() {
    const alt = this.props.intl.formatMessage({ id: 'navbar.alt.currentLang' })

    let flagIcon = flagEn
    if (this.props.location.pathname.indexOf('/en/') === -1) {
      flagIcon = flagFr
    }

    return (<img src={flagIcon} alt={alt} />)
  }

  itemActive(local) {
    const currentUrl = window.location.href

    if (currentUrl.indexOf(local) !== -1) {
      return 'active'
    }

    return ''
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-shadow pb-0">
        <div className="navbar-brand">{this.home()}</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ml-auto">
            <NavbarItem text={this.props.intl.formatMessage({ id: 'navbar.home' })}
                        pathName={this.props.location.pathname}
                        link="/"></NavbarItem>
            <NavbarItem text={this.props.intl.formatMessage({ id: 'navbar.projects' })}
                        pathName={this.props.location.pathname}
                        link="/projects"></NavbarItem>
            <NavbarItem text={this.props.intl.formatMessage({ id: 'navbar.experiences' })}
                        pathName={this.props.location.pathname}
                        link="/experiences"></NavbarItem>
            <NavbarItem text="Services"
                        pathName={this.props.location.pathname}
                        link="/services"></NavbarItem>
            <NavbarItem text="Contact"
                        pathName={this.props.location.pathname}
                        link="/contact"></NavbarItem>
            <li className="mb-0 mr-3">
              <div className="dropdown">
                <button className="btn btn-light btn-change-local dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {this.currentLocal()}
                  <box-icon className="bx-caret" name="caret-down" size="xs"></box-icon>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <button type="button"
                          className={`btn btn-light dropdown-item ${this.itemActive('/en/')}`}
                          onClick={() => changeLocale('en')}>
                    <img src={flagEn} alt={this.props.intl.formatMessage({ id: 'navbar.english' })} /> <FormattedMessage id="navbar.english" />
                  </button>
                  <button type="button"
                          className={`btn btn-light dropdown-item ${this.itemActive('/fr/')}`}
                          onClick={() => changeLocale('fr')}>
                    <img src={flagFr} alt={this.props.intl.formatMessage({ id: 'navbar.french' })} /> <FormattedMessage id="navbar.french" />
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default injectIntl(Navbar)
