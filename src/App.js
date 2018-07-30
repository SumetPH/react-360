import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const host = 'https://sumetph-360-backend.herokuapp.com'
// const host = 'http://localhost:4000'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React 360</h1>
          <div style={{ height: '100vh' }}>
            <iframe
              title="panorama"
              width="80%"
              height="80%"
              scrolling='no'
              style={{borderStyle:'none'}}
              src={`${host}/views/one.html`}
            />
          </div>
        </header>
      </div>
    )
  }
}

export default App
