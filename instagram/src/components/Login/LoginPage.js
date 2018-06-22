import React from 'react';
import Styled from 'styled-components';
import Login from './Login';


const Body = Styled.div`
height: 100vh;
background-image: url("http://26.media.tumblr.com/tumblr_m1ujavOrpy1r6b7kmo1_500.jpg");
background-repeat: no-repeat;
background-position: left top;
background-size: 100%;
@media (max-width: 718px) {
    background-image: url("https://purr.objects-us-west-1.dream.io/i/img-20170127-wa0005.jpg");  
}

`;

const LoginContainer = Styled.div`
display: flex;
    justify-content: center;
    flex-direction: column;

    `;

    const Logo = Styled.img`
    width: 80%;
    height: auto;
    margin: 100px auto;
    border: 2px black solid;
    box-shadow: 5px 5px rgb(15, 51, 63);
    `;

    const LoginBox = Styled.div`
    width: 60%;
    height: 100px;
    background: rgba(236, 212, 177, 0.795);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 12px double rgb(124, 63, 5);
    margin: auto;
    @media (max-width: 718px) {
        width: 80%; 
        height: 150px;   
    }
    `;

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUser = event => {
        this.setState({username: event.target.value})    
      }

      handlePassword = event => {
        this.setState({password: event.target.value})
        
      }


    logIn = () => {
        window.localStorage.setItem('username', this.state.username);
        window.location.reload();
      }


    render (){
        return(
            <Body>
            <LoginContainer>
            <Logo src='http://www.brandchannel.com/wp-content/uploads/2016/05/instagram-old-log-wordmark.jpg' />
        <LoginBox>
            <Login handleUser={this.handleUser} handlePassword={this.handlePassword} logIn={this.logIn}/>
        </LoginBox>
        </LoginContainer>
        </Body>
        );
    }
}

export default LoginPage;

