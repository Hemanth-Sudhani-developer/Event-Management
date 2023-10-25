import React, { Component } from 'react';
import "./index.css"

class LoginPage extends Component {
  
    state = {
      email: '',
      password: '',
      isLoggedIn: false,
      showPassword:true
    };
  

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onClickCheckBox=(event)=>{
    
    if(event.target.checked){
        this.setState((prevState)=>({showPassword:!prevState.showPassword}))
    }else{
        this.setState({showPassword:true})
    }
  }

  /*newAccount=()=>{
    const{history}=this.props
    history.replace("/")
  }*/
 

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

   
    if (email === 'user' && password === 'user') {
      this.setState({
        isLoggedIn: true,
      });
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  render() {
    if (this.state.isLoggedIn) {
      return <div>You are logged in!</div>;
    }

    const passwordType=this.state.showPassword?"password":"text"

    return (
      <div className='login-page-container'>
        <h2 className='login-heading'>Login With Your Details</h2>
        <form className='form-container login-container' onSubmit={this.handleSubmit}>
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
              type={passwordType}
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              placeholder='Enter Your Password'
            />
          </div>
          <div className='check-box-container'>
            <input className='checkbox' type="checkbox" onClick={this.onClickCheckBox}/>
            <label className='check-box-label'>show password</label>
          </div>
          <button type="submit">Login</button>
          <p className='login-para' onClick={() => window.location.href = '/registration'}>Create New Accout</p>
        </form>
      </div>
    );
  }
}

export default LoginPage;