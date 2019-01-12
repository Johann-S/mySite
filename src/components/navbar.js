import React from 'react'
import 'bootstrap/js/dist/collapse'

/** Styles */
import '../css/navbar.css'

/** Components */
import NavbarItem from './navbar-item'

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-shadow pb-0">
        <div className="navbar-brand">Johann SERVOIRE</div>
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
            <NavbarItem text="Donate"
                        pathName={this.props.location.pathname}
                        link="/donate"></NavbarItem>
            <NavbarItem text="About"
                        pathName={this.props.location.pathname}
                        link="/about"></NavbarItem>
            <NavbarItem text="Contact"
                        pathName={this.props.location.pathname}
                        link="/contact"></NavbarItem>
          </ul>
        </div>
      </nav>
    )
  }
}
