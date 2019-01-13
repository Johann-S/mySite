import React from 'react'
import 'boxicons'

/** Components */
import Container from '../components/container'
import Content from '../components/content'
import Header from '../components/header'

export default ({ location }) => {
  return (
    <Container>
      <Header location={location}
              title="Experiences"></Header>
      <Content>
        <h1 className="mb-3">Experiences</h1>
        <p>
          <span className="badge badge-info mr-2">2018 <box-icon rotate="180" color="white" name="arrow-back"></box-icon> ?</span>
          <span className="align-middle">Lead developer in Angular/React and NodeJS at <a className="text-decoration-none" href="https://www.groupe-ldlc.com/">LDLC</a></span>
        </p>
        <p>
          <span className="badge badge-info mr-2">2016 <box-icon rotate="180" color="white" name="arrow-back"></box-icon> 2017</span>
          <span className="align-middle">Java JEE developer for <a className="text-decoration-none" href="http://www.groupe-sii.com/">SII</a></span>
          <ul>
            <li>Carrefour: Worked on CARLA logistic suite</li>
            <li>Orange Business: Worked on a software to manage room access for Orange</li>
          </ul>
        </p>
        <p>
          <span className="badge badge-info mr-2">2012 <box-icon rotate="180" color="white" name="arrow-back"></box-icon> 2016</span>
          <span className="align-middle">Web developer at <a className="text-decoration-none" href="https://www.interactiv-technologies.com/fr/">Interactiv' Technologies</a></span>
        </p>
      </Content>
    </Container>
  )
}
