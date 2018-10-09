import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            usernameInput: '',
            passwordInput: '',
            users: []
        }

        // Create user for testing
        localStorage.setItem('userData', JSON.stringify(
            [
                {'username': 'user111', 'password': 'password'},
                {'username': 'soda_popinski', 'password': 'lovesoda'},
                {'username': 'thor', 'password': 'stormbreaker'}
            ]
        ));
    }

    componentDidMount(){
        const loadedData = JSON.parse(localStorage.getItem('userData'))
        // TODO: NO SIGN UP PAGE
        this.setState({
            users: loadedData
        })
    }

    searchPost = (event)=>{
        // TODO: highlight code to enter name and password
        console.log("Please Sign In");
    }

    usernameInput = (event)=>{
        event.preventDefault();
        this.setState({
            usernameInput: event.target.value
        })
    }

    passwordInput = (event)=>{
        event.preventDefault();
        this.setState({
            passwordInput: event.target.value
        })
    }

    login = (event)=>{
        for(let i = 0; i < this.state.users.length; i++){
            if(this.state.users[i].username === this.state.usernameInput &&
               this.state.users[i].password === this.state.passwordInput){
                this.props.loginUser(this.state.users[i].username);
             }
        }

        this.setState({
            usernameInput: '',
            passwordInput: ''
        })
    }

    render(){
        return(
            <div>
                <h2>Please Sign In</h2>
                <div>
                    UserName:<input onChange={this.usernameInput} placeholder="Enter username" value={this.state.usernameInput}></input>
                    Password:<input onChange={this.passwordInput} placeholder="Enter password" value={this.state.passwordInput}></input>
                    <input onClick={this.login} type="submit" value="Submit"></input>
                </div>
            </div>
        )
    }
}

export default Login;