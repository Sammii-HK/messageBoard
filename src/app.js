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
    const display = this.state.display
    const displayCountValue = display.length - 1
    const minCountValue = (0 - message.length)
    let newCount = this.state.gridCount
    newCount = newCount === minCountValue ? displayCountValue : newCount - 1

    console.log('>>>> gridCount', this.state.gridCount)

    if(newCount >= minCountValue) {
      this.setState({ gridCount: newCount })
    } else {
      clearInterval(this.state.intervalId)
    }
  }


  messageDisplay() {
    const form = document.forms[0]
    const count = this.state.gridCount
    const message = form.elements[0].value.split('')
    const display = this.state.display
    let gridIndex = count
    // let displayIndex = gridIndex - 1

    message.forEach(letter => {
      if (gridIndex < 9) {
        display[gridIndex] = letter
        gridIndex ++
        display[gridIndex] = ''
      }
    })

    // if (display.length > 9) {
    //   display.pop()
    // }

    console.log('display', display.length)


  }

  componentDidMount() {
    setInterval(this.gridCount, 1000)

    const display = this.state.display
    const gridCountValue = display.length
    this.setState({ gridCount: gridCountValue })
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
