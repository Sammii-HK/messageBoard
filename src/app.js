import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'

import './style.scss'

class App extends React.Component {
  constructor() {
    super()

    this.messageDisplay = this.messageDisplay.bind(this)
  }


  messageDisplay(e) {
    e.preventDefault()
    const form = document.forms[0]
    // const board = document.getElementById('messageGridContainer')
    const grid = document.querySelectorAll('.messageGrid')
    const message = form.elements[0].value
    message.split('')
    console.log('message', message)
    let count = 0

    grid.forEach(square => {
      count = count === 9 ? 0 : count + 1
      square.innerText = `${message[count]}`
    })
  }

  // setInterval(messageDisplay, 100)

  render() {
    return (
      <section className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="field">
              <label className="label">Message:</label>
              <div className="control">
                <input
                  id="message"
                  type="text"
                  name="message"
                  placeholder="enter your message"
                  onChange={this.messageDisplay}
                />
              </div>
            </div>
            <div id="messageGridContainer" className="columns is-centered is-mobile">
              <div className="messageGrid"></div>
              <div className="messageGrid"></div>
              <div className="messageGrid"></div>
              <div className="messageGrid"></div>
              <div className="messageGrid"></div>
              <div className="messageGrid"></div>
              <div className="messageGrid"></div>
              <div className="messageGrid"></div>
              <div className="messageGrid"></div>
            </div>
            <button id="messageButton" onClick={this.messageDisplay}>Start Message</button>
          </form>
        </div>
      </section>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
