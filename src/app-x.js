import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'

import './style.scss'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentCount: 0,
      gridCount: 0,
      message: ''
    }

    this.countDown = this.countDown.bind(this)
    this.gridCount = this.gridCount.bind(this)
    this.messageDisplay = this.messageDisplay.bind(this)
  }

  countDown() {
    const form = document.forms[0]
    const message = form.elements[0].value
    const grid = document.querySelectorAll('.messageGrid')

    // const gridCountValue = grid.length
    // this.setState({ gridCount: gridCountValue })

    const countValue = message.length + grid.length
    let newCount = this.state.currentCount
    newCount = newCount === 0 ? countValue : newCount - 1
    console.log('currentCount', this.state.currentCount)
    if(newCount >= 0) {
      this.setState({ currentCount: newCount })
    } else {
      clearInterval(this.state.intervalId)
    }
    // this.gridCount()
  }

  gridCount() {
    const form = document.forms[0]
    const message = form.elements[0].value
    const grid = document.querySelectorAll('.messageGrid')
    const gridCountValue = grid.length
    // this.setState({ gridCount: gridCountValue })
    const minCountValue = (0 - message.length)
    let newCount = this.state.gridCount
    newCount = newCount === minCountValue ? gridCountValue : newCount - 1
    // this.setState({ gridCount: newCount })
    // console.log('minCountValue', minCountValue)
    console.log('gridCount', this.state.gridCount)
    if(newCount >= minCountValue) {
      this.setState({ gridCount: newCount })
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

    let gridIndex = grid.length

    // this.setState({ gridCount: gridIndex })

    let countValue = message.length + grid.length

    let messageIndex = 0
    // gridIndex = gridIndex === (0 - message.length) ? grid.length : gridIndex - 1
    console.log('messageIndex', messageIndex)
    console.log('gridIndex', gridIndex)
    if (grid[gridIndex]) {
      grid.forEach(square => {
        square.innerText = ''
        grid[gridIndex].innerText = `${message[messageIndex]}`
      })
      // gridIndex ++
      messageIndex ++
      // countValue --
    }



    // const gridStart = grid.firstIndex()
    // const gridEnd = grid.lastIndex() - message.length
    // console.log('gridEnd', gridEnd)

    // THIS PHASES THE FIRST LETTER THROUGH THE MESSAGE BOARD
    // grid.forEach(square => {
    //   let messageIndex = 0
    //   let gridIndex = count
    //   grid[gridIndex].innerText = `${message[messageIndex]}`
    //   square.innerText = ''
    //   gridIndex ++
    //   messageIndex ++
    // })
    // ================================================

    // DISPLAYS THE MESSAGE BACKWARDS ON THE FIRST FEW BOXES
    // let messageIndex = 0
    // let gridIndex = count
    // gridIndex = gridIndex === 0 ? 8 : gridIndex - 1
    // grid.forEach(square => {
    //   // grid[gridIndex].innerText = `${message[0]}`
    //   // loop through the grid and repeat line 66
    //   // each loop should decrease the gridIndex by one
    //   // and increase the message index by one
    //   if (grid[gridIndex]) {
    //     for (let i = 0; i <= 8; i++) {
    //       grid[gridIndex].innerText = `${message[messageIndex]}`
    //     }
    //     gridIndex --
    //     messageIndex ++
    //     console.log('messageIndex', messageIndex)
    //     console.log('gridIndex', gridIndex)
    //   }
    //   square.innerText = ''
    // })
    // =====================================================

    // PHASES THROUGH 4 LETTERS IN THE CENTRAL BOXES
    // let messageIndex = 0
    // let gridIndex = count + message.length
    // gridIndex = gridIndex === (9 + message.length) ? 0 : gridIndex - 1
    // grid.forEach(square => {
    //   // grid[gridIndex].innerText = `${message[0]}`
    //   // loop through the grid and repeat line 66
    //   // each loop should decrease the gridIndex by one
    //   // and increase the message index by one
    //   for (let i = 0; i <= grid.length; i++) {
    //     if (grid[gridIndex]) {
    //       grid[gridIndex].innerText = `${message[messageIndex]}`
    //     }
    //     console.log('**==**')
    //   }
    //   gridIndex --
    //   messageIndex ++
    //   console.log('messageIndex', messageIndex)
    //   console.log('gridIndex', gridIndex)
    //   square.innerText = ''
    // })
    //
    // console.log('====================================')
    // ============================================

    // DISPLAYS lroW
    // let countValue = message.length + grid.length
    //
    // let messageIndex = 0
    // let gridIndex = grid.length
    // // gridIndex = gridIndex === (0 - message.length) ? grid.length : gridIndex - 1
    // console.log('messageIndex', messageIndex)
    // console.log('gridIndex', gridIndex)
    // grid.forEach(square => {
    //   if (grid[gridIndex]) {
    //     grid[gridIndex].innerText = `${message[messageIndex]}`
    //   }
    //   gridIndex --
    //   messageIndex ++
    //   square.innerText = ''
    //   // countValue --
    // })
    //
    // console.log('====================================')







  }

  componentDidMount() {
    // setInterval(this.countDown, 5000)
    setInterval(this.countDown, 1000)
    setInterval(this.gridCount, 1000)
    // this.messageDisplay()

    const grid = document.querySelectorAll('.messageGrid')
    const gridCountValue = grid.length
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
              <div className="messageGrid"></div>
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
