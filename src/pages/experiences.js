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
        <div className="mb-2">
          <p>
            <span className="badge badge-info mr-2">
              <span className="align-middle">2018</span>
              <box-icon rotate="180" color="white" name="arrow-back"></box-icon>
              <span className="align-middle">?</span>
            </span>
            <span className="align-middle">Lead developer in Angular/React and NodeJS at <a className="text-decoration-none" href="https://www.groupe-ldlc.com/">LDLC</a></span>
          </p>
          <ul>
            <li>Built a web app with <a href="https://angular.io/">Angular</a> 6 for LDLC shops to sell and manage their stock</li>
            <li>Developed an hybrid mobile app on Android and iOS with <a href="https://ionicframework.com/">Ionic</a> to allow shops to do an inventory of their shop's stock</li>
            <li>Embedded a web app inside a software thanks to <a href="https://electronjs.org/">Electron</a> to allow this web app to comunicate with a payment terminal</li>
            <li>Participate on improving LDLC APIs on PHP 7 with <a href="https://symfony.com/">Symfony 4</a></li>
          </ul>
        </div>
        <hr></hr>
        <div className="mb-2">
          <p>
            <span className="badge badge-info mr-2">
              <span className="align-middle">2016</span>
              <box-icon rotate="180" color="white" name="arrow-back"></box-icon>
              <span className="align-middle">2017</span>
            </span>
            <span className="align-middle">Java JEE developer for <a className="text-decoration-none" href="http://www.groupe-sii.com/">SII</a></span>
          </p>
          <ul>
            <li>Carrefour: Worked on CARLA logistic suite</li>
            <li>Orange Business: Worked on a software to manage room access for Orange</li>
          </ul>
        </div>
        <hr></hr>
        <div>
          <p>
            <span className="badge badge-info mr-2">
              <span className="align-middle">2012</span>
              <box-icon rotate="180" color="white" name="arrow-back"></box-icon>
              <span className="align-middle">2016</span>
            </span>
            <span className="align-middle">Web developer at <a className="text-decoration-none" href="https://www.interactiv-technologies.com/fr/">Interactiv' Technologies</a></span>
          </p>
          <ul>
            <li>Built an API to communicate with a native web app</li>
            <li>Worked on creating a HTML5 viewer to read PDF</li>
          </ul>
        </div>
      </Content>
    </Container>
  )
}
