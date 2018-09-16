import React, { Component } from 'react'
import TextInput from './TodoTextInput.js'
import SignUp from './sinup/SignUp'
class App extends Component {
  render() {
    return (
      <div>

        {/* <button type="button" className="btn btn-success">button</button> */}

        <TextInput placeholder="TestAddMongoose" />
        <SignUp />
      </div>
    )
  }
}

export default App
