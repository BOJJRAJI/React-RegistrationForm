import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isLastNameNull: false,
    isFirstNameNull: false,
    isSubmit: false,
  }

  getLastName = event => {
    this.setState({lastName: event.target.value})
  }

  getFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  submitRegistrationForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    const isValidLastName = lastName !== ''
    const isValidFirstName = firstName !== ''

    if (isValidFirstName && isValidLastName) {
      this.setState({isSubmit: true})
    } else {
      this.setState({
        isSubmit: false,
        isLastNameNull: !isValidLastName,
        isFirstNameNull: !isValidFirstName,
      })
    }
  }

  renderRegistrationForm = () => {
    const {isFirstNameNull, isLastNameNull} = this.state
    return (
      <form className="form-container" onSubmit={this.submitRegistrationForm}>
        <h1 className="heading">Registration</h1>
        <div className="names-container">
          <label className="label-element" htmlFor="firstName">
            FIRST NAME
          </label>
          <input
            className="input-element"
            id="firstName"
            onBlur={this.onBlurFirstName}
            onChange={this.getFirstName}
            placeholder="First name"
          />
          {isFirstNameNull && <p className="error">Required</p>}
        </div>

        <div className="names-container">
          <label className="label-element" htmlFor="lastName">
            LAST NAME
          </label>
          <input
            className="input-element"
            id="lastName"
            onBlur={this.onBlurLastName}
            onChange={this.getLastName}
            placeholder="Last name"
          />
          {isLastNameNull && <p className="error">Required</p>}
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    )
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    const isValidLastName = lastName !== ''

    this.setState({isLastNameNull: !isValidLastName})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    const isValidFirstName = firstName !== ''

    this.setState({isFirstNameNull: !isValidFirstName})
  }

  getForm = () => {
    this.setState({isSubmit: false, firstName: '', lastName: ''})
  }

  SuccessFullCard = () => (
    <div className="success-card-container">
      <h1 className="heading">Registration</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-icon"
      />
      <p className="para">Submitted Successfully</p>
      <button className="submit-button" type="button" onClick={this.getForm}>
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmit} = this.state
    return (
      <div className="app-container">
        {isSubmit ? this.SuccessFullCard() : this.renderRegistrationForm()}
      </div>
    )
  }
}

export default RegistrationForm
