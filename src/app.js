import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'

import './style.scss'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentCount: 10,
      message: ''
    }

    this.countDown = this.countDown.bind(this)
    this.messageDisplay = this.messageDisplay.bind(this)
  }

  countDown() {
    let newCount = this.state.currentCount
    newCount = newCount === 0 ? 10 : newCount - 1
    if(newCount >= 0) {
      this.setState({ currentCount: newCount })
    } else {
      clearInterval(this.state.intervalId)
    }
  }



  messageDisplay() {
    // this.setState({ currentCount: 10 })
    // e.preventDefault()
    const form = document.forms[0]
    // const board = document.getElementById('messageGridContainer')
    const grid = document.querySelectorAll('.messageGrid')
    // let message = 'Hello World!'
    const count = this.state.currentCount
    const message = form.elements[0].value
    this.setState({ message: message })
    // message.split('')
    console.log('message', message)
    console.log('message[count]', message[count])
    console.log('currentCount', this.state.currentCount)
    // let count = 0

    // const index = count + message.length
    // console.log('index', index)
    for (let i = 0; i < grid.length; i++) {
      grid[i].innerText = `${message[i + count]}`
      // index ++
    }

    // if (message) {
      // grid.forEach(square => {
      //   // count = count === 9 ? 0 : count + 1
      //   square.innerText = `${message[count]}`
      // })

      // index = index === message.length ? 0 : index + 1
      // grid[count].innerText = `${message[index]}`
      // for (let i = 0; i <= message.length; i++) {
      // }

    // }
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
                  value="Hello World!"
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
            <button id="messageButton">Start Message</button>
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
