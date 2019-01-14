import React from 'react'
import 'bootstrap/js/dist/collapse'

/** Styles */
import '../css/navbar.css'

/** Components */
import NavbarItem from './navbar-item'

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-shadow pb-0">
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
            <NavbarItem text="Experiences"
                        pathName={this.props.location.pathname}
                        link="/experiences"></NavbarItem>
            <NavbarItem text="Contact"
                        pathName={this.props.location.pathname}
                        link="/contact"></NavbarItem>
          </ul>
        </div>
      </nav>
    )
  }
}
