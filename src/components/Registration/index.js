import React, { Component } from 'react';
import "./index.css"

class RegistrationPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted:', this.state);
    
  };

  render() {
    return (
      <div className="registration-page-container">
        <h2 className='registration-heading'>Provide Your Details For New Registration</h2>
        <form className='form-container' onSubmit={this.handleSubmit}>
          <div className='input-box'>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              placeholder='Enter Your Username'
            />
          </div>
          <div className='input-box'>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder='Enter Your Email'
            />
          </div>
          <div className='input-box'>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              placeholder='Enter Your Password'
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default RegistrationPage;