import React from 'react'

/** Components */
import Container from '../components/container'
import Content from '../components/content'
import Header from '../components/header'

export default ({ location }) => {
  return (
    <Container>
      <Header location={location}></Header>
      <Content></Content>
    </Container>
  )
}
