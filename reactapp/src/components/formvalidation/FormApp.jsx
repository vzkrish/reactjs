import React, { Component } from 'react';
import { FormErrors } from "./FromErrors";
import './Forms.css';
import logo from "../../../src/logo.svg"

export default class FormApp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
   /*    <form className="demoForm">
        <h2>Sign up</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className=
        {`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <input type="email" required className="form-control" 
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={(event)=>this.handleUserInput(event)}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" 
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(e)=>this.handleUserInput(e)}  />
        </div>
        
      </form>
 */
<div>
<div class="container pt-3">
  <div class="row justify-content-sm-center">
    <div class="col-sm-6 col-md-4">

      <div class="card border-info text-center">
        <div class="card-header">
          Sign in to continue
        </div>
        <div class="card-body">
          {/* <img src="https://placeimg.com/128/128/tech/sepia" /> */}
          <img src={logo} className="App-logo" height ="100" width = "100" alt="logo" />
          <form class="form-signin">
          <div className={'form-group ${this.errorClass(this.state.formErrors.email)}'}></div>
            <input type="text" class="form-control mb-2" placeholder="Email" required autofocus />
            <input type="password" class="form-control mb-2" placeholder="Password" required />
            
            <button type="submit"  class="btn btn-lg btn-primary btn-block mb-1"      disabled={!this.state.formValid}>Sign up</button>
            <label class="checkbox float-left">
              <input type="checkbox" value="remember-me" />
              Remember me
            </label>
            <a href="#" class="float-right">Need help?</a>
          </form>
        </div>
      </div>
      <a href="#" class="float-right">Create an account </a>
    </div>
  </div>
</div>
</div>
    )
  }
}