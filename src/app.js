import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'

import './style.scss'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      gridCount: 0,
      message: [],
      display: [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
      ]
    }

    this.gridCount = this.gridCount.bind(this)
    this.messageDisplay = this.messageDisplay.bind(this)
  }

  gridCount() {
    const form = document.forms[0]
    const message = form.elements[0].value
    const grid = document.querySelectorAll('.messageGrid')
    const gridCountValue = grid.length - 1
    const minCountValue = (0 - message.length)
    let newCount = this.state.gridCount
    newCount = newCount === minCountValue ? gridCountValue : newCount - 1

    console.log('>>>> gridCount', this.state.gridCount)

    if(newCount >= minCountValue) {
      this.setState({ gridCount: newCount })
    } else {
      clearInterval(this.state.intervalId)
    }
  }


  messageDisplay() {
    // this.gridCount()
    const grid = document.getElementById('messageGridContainer')

    const form = document.forms[0]
    const count = this.state.gridCount
    const message = form.elements[0].value.split('')
    const display = this.state.display
    const displayValue = display

    console.log('display', display)
    // console.log('message', message)
    console.log('displayValue', displayValue)

    let gridIndex = count
    // let messageIndex = 0

    // for (let i = 0; i <= grid.length; i ++) {
    //   grid[gridIndex].innerText = `${message[messageIndex]}`
    //   gridIndex ++
    //   messageIndex ++
    // }

    // message.forEach(letter => {
    //   grid[gridIndex].innerText = ''
    //   grid[gridIndex].innerText = letter
    //   gridIndex ++
    // })

    message.forEach(letter => {
      if (gridIndex < 9) {
        displayValue[gridIndex] = ''
        displayValue[gridIndex] = letter
        gridIndex ++

      }
    })

    // grid[gridIndex]
    // if (gridIndex < grid.length && gridIndex > 0) {
    //   grid[gridIndex]
    // }



  }

  componentDidMount() {
    setInterval(this.gridCount, 1000)

    const display = this.state.display
    const gridCountValue = display.length
    this.setState({ gridCount: gridCountValue })
  }

  componentDidUpdate() {
    this.messageDisplay()

    // setInterval(this.messageDisplay, 1000)
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
              {this.state.display.map((grid, i) =>
                <div className="messageGrid" key={i}>
                  {this.state.display[i]}
                </div>
              )}
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
