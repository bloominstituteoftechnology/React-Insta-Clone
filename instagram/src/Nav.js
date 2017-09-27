import React, {Component} from 'react';
// Style
import './Styles/Nav.css';

// Assets

export default class Nav extends Component {
    constructor(){
        super();
        this.isDrop = false;
        this.showLogout = '';
        this.username = '';
        if(window.localStorage.getItem('username')) {
            this.username = window.localStorage.getItem('username').toUpperCase();
            this.showLogout =
            <div> 
                <div id="nav-user_block" onClick={this.dropLogin}>
                    <img id="nav-user_image" width="7%" src="./assets/no-photo.png"/>
                    <div id="nav-username">{this.username}</div>
                </div>
                <div id="nav-login_dropdown">
                    <div id="logout_btn" onClick={this.logout}>Logout</div>
                </div>
        </div>;
           
        
        }
    }
    logout = () => {
        window.localStorage.clear();
        window.location.reload();
    }
    dropLogin = () => {
        
        const dropdown = document.getElementById('nav-login_dropdown');
        if(this.isDrop) {
            dropdown.style.height = "0px";
            setTimeout(()=>{dropdown.style.display = "none"}, 500);
            this.isDrop = false;
            
        } else {
            dropdown.style.display = "block";
            setTimeout(()=>{dropdown.style.height = "50px"},100);
            this.isDrop = true;
        }
        
    }
    render(){
        return (
            <div id="nav_bar">
                <img id="logo_pic" src={'./assets/ig-logo-pic.png'} alt="Logo"/>
                <img id="logo_word" src={'./assets/ig-logo-word.png'} alt="Instagram"/>
                {this.showLogout}
                
                
            </div>
        );
    }
}