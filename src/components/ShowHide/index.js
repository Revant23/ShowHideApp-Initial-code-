// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {FirstNameShow: false, LastNameShow: false}

  FirstNameBtn = () => {
    this.setState(prevState => ({FirstNameShow: !prevState.FirstNameShow}))
  }

  LastNameBtn = () => {
    this.setState(prevState => ({LastNameShow: !prevState.LastNameShow}))
  }

  render() {
    const {FirstNameShow, LastNameShow} = this.state

    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <div className="container">
          {FirstNameShow && (
            <div>
              <button type="button" onClick={this.FirstNameBtn}>
                Show/Hide FirstName
              </button>
              <div className="firstNameContainer">
                <p>Joe</p>
              </div>
            </div>
          )}
          {!FirstNameShow && (
            <div>
              <button type="button" onClick={this.FirstNameBtn}>
                Show/Hide FirstName
              </button>
            </div>
          )}

          {LastNameShow && (
            <div>
              <button type="button" onClick={this.LastNameBtn}>
                Show/Hide LastName
              </button>
              <div className="lastNameContainer">
                <p>Jonas</p>
              </div>
            </div>
          )}
          {!LastNameShow && (
            <div>
              <button type="button" onClick={this.LastNameBtn}>
                Show/Hide LastName
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default ShowHide
