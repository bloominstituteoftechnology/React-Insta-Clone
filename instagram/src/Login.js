import React, {Component} from 'react';
import './Styles/Login.css';

export default class Login extends Component{
    constructor(){
        super();
        
    }
    login = (e) => {
        e.preventDefault();
        const input = document.getElementById('username_input').value;
        if(input !== '' || undefined || null || 'bob'){
        const username = document.getElementById('username_input').value;
        const userId = Math.floor(Math.random() * 10000);
        window.localStorage.setItem('username', username);
        window.localStorage.setItem('userId', userId);
        window.location.reload();
        }

    }
    
    render(){
        return(
            <div id="login_box">
                <img width="20%" src={'./assets/ig-logo-pic.png'} />
                <br />
                <img width="50%" src={'./assets/ig-logo-word.png'} />
                <br/>
                <br/>
                <br/>
                <form onSubmit={this.login}>
                    {window.localStorage.getItem('userId')}
                    <label><strong>Username:</strong></label>
                    <br/>
                    <input id="username_input" type="text" />
                    <br/>
                    </form>
                    
                    
                    <br/>
                    <div className="footer" > © Copyright 2017</div>
                

            </div>
        );
    }
}