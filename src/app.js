import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'

import './style.scss'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentCount: 10
    }

    this.countDown = this.countDown.bind(this)
    this.messageDisplay = this.messageDisplay.bind(this)
  }

  countDown() {
    let newCount = this.state.currentCount
    newCount = newCount === 10 ? 0 : newCount + 1
    if(newCount >= 0) {
      this.setState({ currentCount: newCount })
    } else {
      clearInterval(this.state.intervalId)
    }
    console.log('currentCount', this.state.currentCount)
  }



  messageDisplay() {
    // e.preventDefault()
    const form = document.forms[0]
    // const board = document.getElementById('messageGridContainer')
    const grid = document.querySelectorAll('.messageGrid')
    const message = form.elements[0].value
    message.split('')
    console.log('message', message)
    // let count = 0
    const count = this.state.currentCount

    grid.forEach(square => {
      // count = count === 9 ? 0 : count + 1
      square.innerText = `${message[count]}`
    })
  }

  componentDidMount() {
    setInterval(this.countDown, 1000)
  }

  componentDidUpdate() {
    setInterval(this.messageDisplay, 1000)
  }


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
