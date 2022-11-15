import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  changeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="label-container">
            <label className="label" htmlFor="phrase">
              Enter the phrase
            </label>
            <input
              className="input"
              type="text"
              id="phrase"
              value={searchInput}
              onChange={this.changeInput}
              placeholder="Enter the phrase"
            />
          </div>
          <div className="counter-container">
            <p className="no-of-letters">No.of letters: {searchInput.length}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
