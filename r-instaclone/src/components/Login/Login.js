import React, {Component} from 'react';
import styled from 'styled-components';


const LoginPage = styled.div`
margin: 200px 500px;

`;
 const Header = styled.h1`
 font-family: sans;
 `;



class Login extends Component {
    constructor (props) {
        super(props);

        this.state = {
            username: '',
            password: ''

        }

    }

handleInputChange = e => {
    this.setState({[e.target.name]: e.target.value})
}

handleLoginInput = e => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
}



render(){
    return (

       <LoginPage>
           <Header>
           <h1>Instagram</h1>
           </Header>
            <form onSubmit={this.handleLoginInput}>

                <input type='text' placeholder='username'  name='username' value={this.state.username} onChange={this.handleInputChange}/>
                <input type='password' name='password' placeholder='password' value={this.state.password}
                onChange={this.handleInputChange} />
                <button> Login </button>

            </form>

        </LoginPage>
        )
    }
    
} // main curly 


export default Login;