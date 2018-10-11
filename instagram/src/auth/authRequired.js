import React, { Component } from 'react';
import Login from './Login';

const authRequired = App => class extends Component {
    constructor(props) {
        super(props);
        this.state= {
            auth: false,
            username: '',
            password: '',
            users: [
                {
                    username: 'test',
                    password: 'password',
                },
            ],
            attempted: false,
        }
    }

    componentDidMount() {
        let auth = localStorage.getItem('auth');
        console.log(auth);
        if (auth === null) {localStorage.setItem('auth', 'false')};
        if (auth === 'true') {this.setState({auth: true})};
        
    }

    login = (event) => {
        event.preventDefault();
        let userExists = false;
        let currentUser = {};
        this.state.users.forEach((user) => {
            if (user.username === this.state.username) {
                userExists = true;
                currentUser = user;
            }
        });

        if(!userExists) {
            this.setState({attempted: true})
            return;
        } 
        if (currentUser.password !== this.state.password){
            this.setState({attempted: true})
            return;
        }
            
        this.setState({auth: true}, localStorage.setItem('auth', 'true'));
    }

    logout = (event) => {
        event.preventDefault();
        this.setState({attempted: false, auth: false}, localStorage.removeItem('auth'))
    }

    changeHandler = (event) => {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        if (this.state.auth) return <App logout={this.logout}/>;
        return <Login 
            login={this.login} 
            username={this.state.username}
            password={this.state.password}
            change={this.changeHandler}
            attempted={this.state.attempted}
        />;
    }
}

export default authRequired;
