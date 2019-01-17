import React, { Component } from 'react';
import LoginImg from '../../ig-login-pic.png';
import IgLogoImg from '../logo.png'
import Apple from '../../apple-dwnload.png';
import Google from '../../google-dwnload.png';
import {StyledLogin, StyledImg, IgLogo} from '../Styles/Reusables'


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
        username: '',
        password: '',   
        loggedIn: props.loggedIn,
        hidePW: true
    }
  }
   handleChanges = ev => {
        this.setState({ [ev.target.name]: ev.target.value });
    }
    loginSubmit = e => {
        // e.preventDefault();
        if(this.state.username && this.state.password){
            localStorage.setItem("username", `${this.state.username}`);
            localStorage.setItem("password", `${this.state.password}`);
        } 
        else if(this.state.username){
          e.preventDefault();
          alert('Sorry, please insert your password')
        }
        else if(this.state.password){
          e.preventDefault();
          alert('Sorry, please enter a valid username')
        }

     }
     showPW = () =>{
       console.log(this.state.hidePW)
      if(this.state.hidePW === false){
        this.setState({hidePW: true});
      } 
      if(this.state.hidePW === true){
        this.setState({hidePW: false});
      }
     }
  render() {
    return (
      <StyledLogin>
        <div className="w-50">  
            <StyledImg src={LoginImg} alt="Mockup of Instagram on Iphone"></StyledImg>
        </div>
        <div className="w-50">
          <div className="mt-5 my-3 pb-5 pt-3 card align-items-center">
            <IgLogo src={IgLogoImg} alt="Mockup of Instagram on Iphone"></IgLogo>
            <form onSubmit={this.loginSubmit}>
                Username: <input 
                type="text"
                onChange={this.handleChanges}
                name="username"
                />
                <div >
                <p>Password:</p>
                  <div className="border">
                  <input
                  type={this.state.hidePW === true 
                  ? 'password' 
                  : 'text'
                  }
                  onChange={this.handleChanges}
                  name="password"
                  className="pw-input border-0 w-90"/>
                  <i onClick={this.showPW}
                  class="fas fa-eye"></i>
                  </div>
                </div>
                <button className="btn btn-primary mt-3" onClick={this.props.loginSubmit}>Log In</button>
                
            </form>
          </div>
          <div className="text-center">
            <p>Get the App</p>
          <div className="d-flex mt-3 mx-auto justify-content-center">
            <a target="_blank"
              className="w-30"
              href={'https://itunes.apple.com/app/instagram/id389801252?mt=8&vt=lo'}>
              <img src={Apple} alt="Download on Apple"/>
            </a>
            <a target="_blank"
              className="w-30"
              href={'https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DW3H22AAEAAHVii6DFMXDE4Vj_M6H%26utm_content%3Dlo%26utm_medium%3Dbadge'}>
              <img src={Google} alt="Download on Google"/>
            </a>
          </div>
          </div>
        </div>
      </StyledLogin>
    );
  }
}


export default Login;