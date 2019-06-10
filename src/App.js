import React, { Component } from 'react'
import { Header, Footer } from './components/layouts'
import Exercises from './components/exercises'
import { muscles, exercises } from './store'

export default class App extends Component {
  state = {
    exercises: exercises
  }

  getExercisesByMuscles = () => {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]
        return exercises
      }, {})
    )
  }

  render() {
    const exercises = this.getExercisesByMuscles()
    return (
      <React.Fragment>
        <Header />
        <Exercises exercises={exercises} />
        <Footer muscles={muscles} />
      </React.Fragment>
    )
  }
}
