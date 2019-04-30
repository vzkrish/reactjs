import React, { Component } from 'react';
import Cars from "./Cars"

export  class Login extends Component {
    constructor(props){
        super(props)       
    }
    handleLogin(event){
        event.preventDefault()
        alert("Thanks for submitting")
    // do some login logic here, and if successful:
   
        this.props.history.push('/cars')
       }
    render() {
        return (
            <div className="container">            
                 <h2>Login Form</h2>
                <form className="container bg-danger" 
                            onSubmit={(e)=>this.handleLogin(e)}>
                    User Name : <input type="text" value="Murthy" />
                    <br /><br />
                    Password : <input type="password" value="welcome" />
                    <br />
                    <input type="submit" className="btn btn-primary" 
                    value="Login"/>
                </form> 

            {/* <div class="row justify-content-center align-items-center" style="height:100vh">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <form action="" autocomplete="off">
                            <div class="form-group">
                                <input type="text" class="form-control" name="username" /> 
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" name="password" />
                            </div>
                            <button type="button" id="sendlogin" class="btn btn-primary">login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div> */}
     
            </div>
        )
    }
}