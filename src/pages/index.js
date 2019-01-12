import React from 'react'
import 'boxicons'

/** Components */
import Container from '../components/container'
import Content from '../components/content'
import Header from '../components/header'

/** Images */
import profil from '../images/profil.jpg'

/** Styles */
import '../css/index.css';

export default ({ location }) => {
  return (
    <Container>
      <Header location={location}></Header>
      <Content>
        <div className="text-center">
          <img src={profil} className="rounded mx-auto" width="200" alt="my face" />
          <h3 className="mt-3">
            Lead developer in Angular/React and NodeJS at <a className="text-decoration-none" href="https://www.groupe-ldlc.com/">LDLC</a>
          </h3>
          <h4 className="mt-3">JavaScript developer of <a className="text-decoration-none" href="https://getbootstrap.com/">Bootstrap</a></h4>
          <h4 className="mt-3">Mentor at <a className="text-decoration-none" href="https://openclassrooms.com/">OpenClassRooms</a></h4>
          <p className="mt-3">I make a lot of plugins, CLI tools and app during my free time. Mostly on JavaScript.</p>
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
          </p>
        </div>
      </Content>
    </Container>
  )
}
