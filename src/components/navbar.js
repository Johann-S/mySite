import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/js/dist/collapse'
import 'boxicons'

/** Styles */
import '../css/navbar.css'

/** Components */
import NavbarItem from './navbar-item'

export default class Navbar extends React.Component {
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

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-shadow pb-0">
        <div className="navbar-brand">{this.home()}</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ml-auto">
            <NavbarItem text="Home"
                        pathName={this.props.location.pathname}
                        link="/"></NavbarItem>
            <NavbarItem text="Projects"
                        pathName={this.props.location.pathname}
                        link="/projects"></NavbarItem>
            <NavbarItem text="Experiences"
                        pathName={this.props.location.pathname}
                        link="/experiences"></NavbarItem>
            <NavbarItem text="Services"
                        pathName={this.props.location.pathname}
                        link="/services"></NavbarItem>
            <NavbarItem text="Contact"
                        pathName={this.props.location.pathname}
                        link="/contact"></NavbarItem>
          </ul>
        </div>
      </nav>
    )
  }
}
