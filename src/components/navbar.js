import React from 'react'
import { changeLocale, injectIntl, FormattedMessage, Link } from 'gatsby-plugin-intl'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/dropdown'

/** Styles */
import '../css/navbar.css'

/** Images */
import flagEn from '../images/flag_en.png'
import flagFr from '../images/flag_fr.png'

/** Components */
import NavbarItem from './navbar-item'

class Navbar extends React.Component {
  home() {
    if (this.props.location.pathname === '/fr/' || this.props.location.pathname === '/en/') {
      return (<span>Johann SERVOIRE</span>)
    } else {
      return (
        <Link to="/">
          <span className="sr-only">{this.props.intl.formatMessage({ id: 'navbar.home' })}</span>
          <div className="box-icon sm bx-tada-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 13h1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm11 7h-4v-4h4v4zM12 4.414l6.649 6.649A1.002 1.002 0 0 0 18 12v8h-2v-5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v5H6v-8c0-.429-.27-.794-.649-.937L12 4.414z"/></svg>
          </div>
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
    if (typeof window === 'undefined') {
      return ''
    }

    const currentUrl = window.location.href

    if (currentUrl.indexOf(local) !== -1) {
      return 'active'
    }

    return ''
  }

  changeLang(lang) {
    changeLocale(lang)
    document.documentElement.setAttribute('lang', lang)
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-shadow pb-0">
        <div className="navbar-brand">{this.home()}</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu">
          <span className="navbar-toggler-icon"></span>
          <span className="sr-only">{this.props.intl.formatMessage({ id: 'navbar.sr.changeLang' })}</span>
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
                  <div className="box-icon xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.998 17L18.998 9 4.998 9z"/></svg>
                  </div>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <button type="button"
                          className={`btn btn-light dropdown-item ${this.itemActive('/en/')}`}
                          onClick={() => this.changeLang('en')}>
                    <img src={flagEn} alt={this.props.intl.formatMessage({ id: 'navbar.english' })} /> <FormattedMessage id="navbar.english" />
                  </button>
                  <button type="button"
                          className={`btn btn-light dropdown-item ${this.itemActive('/fr/')}`}
                          onClick={() => this.changeLang('fr')}>
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
