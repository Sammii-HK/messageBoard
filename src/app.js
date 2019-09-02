import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'

import './style.scss'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentCount: 8,
      message: ''
    }

    this.countDown = this.countDown.bind(this)
    this.messageDisplay = this.messageDisplay.bind(this)
  }

  countDown() {
    let newCount = this.state.currentCount
    newCount = newCount === 0 ? 8 : newCount - 1
    console.log('currentCount', this.state.currentCount)
    if(newCount >= 0) {
      this.setState({ currentCount: newCount })
    } else {
      clearInterval(this.state.intervalId)
    }
  }


  // grid index 10 must contain the first letter of the message
  // then the index should decrease

  messageDisplay() {
    const form = document.forms[0]
    // const board = document.getElementById('messageGridContainer')
    const grid = document.querySelectorAll('.messageGrid')
    const count = this.state.currentCount
    // count = count === 8 ? 0 : count + 1
    const message = form.elements[0].value
    // this.setState({ message: message })
    // message.split('')
    console.log('message[count]', message[count])

    // const firstLetter = message[0]

    // const gridStart = grid.firstIndex()
    // const gridEnd = grid.lastIndex() - message.length
    // console.log('gridEnd', gridEnd)
    grid.forEach(square => {
      let messageIndex = 0
      let gridIndex = count
      grid[gridIndex].innerText = `${message[messageIndex]}`
      square.innerText = ''
      gridIndex ++
      messageIndex ++
    })

    // let messageIndex = count
    // messageIndex = messageIndex === 0 ? messageIndex : messageIndex - 1

    // let messageIndex = count - 8
    // console.log('messageIndex', messageIndex)

    // if (messageIndex >= 0) {
    //   grid[count].innerText = `${message[messageIndex]}`
    //   // messageIndex --
    // }




    // for (let i = 0; i <= message.length; i++) {
    //
    // }

    // while decreasing the grid index i need to increase the message index

    // console.log('grid[index]', grid[index])
    // console.log('index', index)

    // while (index <= grid.length) {
    //   index = index === 0 ? index : index + 1
    //
    // }

    // grid.forEach(square => {
    //   square[index].innerText = `${message[count]}`
    // })

    // message.forEach(letter => {
    //   grid[letter].innerText = `${message[letter + count]}`
    // })

    // const index = count + message.length
    // console.log('index', index)
    // for (let i = 0; i < grid.length; i++) {
    //   grid[i].innerText = `${message[i + count]}`
    //   // index ++
    // }

    // if (message) {
      // grid.forEach(square => {
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
    // this.messageDisplay()
  }

  componentDidUpdate() {
    this.messageDisplay()
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
