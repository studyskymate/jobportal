import React, { Component } from 'react';



class TodoApp extends Component{
    render(){
        return(
            <div>
             <Login/>
            </div>
        )
    }
}


class Login extends Component{

    constructor(props) {
        super(props)
        
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
      //  this.handleChange = this.handleChange.bind(this)
      //  this.loginClicked = this.loginClicked.bind(this)
    }

    handleUsernameChange=(event)=>{
    alert(event.target.value);
    }

    render(){ 
        return(
            <div>
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange} />
                Password: <input type="password" name="password" />
                <button>Login</button>
            </div>
        )
    }
}

export default TodoApp