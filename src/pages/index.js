import React from 'react'

/** Components */
import Container from '../components/container'
import Content from '../components/content'
import Header from '../components/header'

/** Images */
import profil from '../images/profil.jpg'

export default ({ location }) => {
  return (
    <Container>
      <Header location={location}></Header>
      <Content>
        <div className="text-center">
          <img src={profil} className="rounded mx-auto" width="200" alt="my face" />
          <h3>
            Lead developer in Angular/React and NodeJS at <a className="text-decoration-none" href="https://www.groupe-ldlc.com/">LDLC</a>
          </h3>
          <h4>JavaScript developer of <a className="text-decoration-none" href="https://getbootstrap.com/">Bootstrap</a></h4>
          <h4>Mentor at <a className="text-decoration-none" href="https://openclassrooms.com/">OpenClassRooms</a></h4>
          <p>I make a lot of plugins, CLI tools and app during my free time. Mostly on JavaScript.</p>
        </div>
      </Content>
    </Container>
  )
}
