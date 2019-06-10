import React, { Component } from 'react'
import { Header, Footer } from './components/layouts'
import Exercises from './components/exercises'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Exercises />
        <Footer />
      </React.Fragment>
    )
  }
}
