import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            usernameInput: '',
            passwordInput: '',
            username: '',
            password: ''
        }

        window.onbeforeunload = this.saveData;
    }

    saveData = ()=>{
        localStorage.setItem('userData', JSON.stringify({'username': 'user111', 'password': 'password'}));
    }

    componentDidMount(){
        const loadedData = JSON.parse(localStorage.getItem('userData'))
        console.log(loadedData); // Leave in for testing, NO SIGN UP PAGE
        this.setState({
            username: loadedData.username,
            password: loadedData.password
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
        if(this.state.username === this.state.usernameInput &&
           this.state.password === this.state.passwordInput){
            this.props.setLoggedIn(true);
        }

        this.setState({
            usernameInput: '',
            passwordInput: ''
        })
    }

    render(){
        return(
            <div>
                <SearchBar searchPosts={this.searchPost}/>
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