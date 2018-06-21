import React from 'react';
import styled from 'styled-components';
import {
    Container,
    PrimaryContainer,
    LargeContainer,
    SecondContainer,
    InputOne,
    InputTwo,
    ButtonStyle,
    FormStyle, 
    TextAbove,
    SignIn
} from "../Reusables/Reusables";

class Login extends React.Component {
    constructor() {
        super();
        this.state = { 
            usernameInput:"",
            passwordInput:""

         }
    }

    // componentDidMount() {
    //     let id = this.props.postId;
    //     if (localStorage.getItem(id)) {
    //         this.setState({
    //           comments: JSON.parse(localStorage.getItem(this.props.postId))
    //         });
    //       } else {
    //         this.setComments();
    //       }
    //     }


    // componentWillUnmount() {
    //     this.setComments();
    // }

    changeInput = event => 
    this.setState({
        usernameInput: event.target.value
    });

    passwordChange = event => 
    this.setState({
        passwordInput: event.target.value
    });

    loginSubmit = (event, i) => {
        event.preventDefault();
        const username = this.state.usernameInput;
        localStorage.setItem('user', username);
        const password = this.state.passwordInput;
        localStorage.setItem('pass', password);
        window.location.reload();
    }

    render() { 
        return (  
            <Container>
                
            <PrimaryContainer>
                <TextAbove>
                    <SignIn>Sign in Below</SignIn>

                  </TextAbove>
                  
                <LargeContainer>
                  

                  <SecondContainer>  
                
                        <FormStyle onSubmit={this.loginSubmit}>
                            <InputOne 
                            value={this.state.usernameInput} 
                            type="text"
                            onChange={this.changeInput}
                            placeholder="username" /> 

                            <InputTwo
                            value={this.state.passwordInput} 
                            type="text"
                            placeholder="password"
                            onChange={this.passwordChange}
                            />   

                            <ButtonStyle>Submit</ButtonStyle>
                        </FormStyle> 

                    </SecondContainer>             
                        
                        

                </LargeContainer>
                </PrimaryContainer>
                    
                

            </Container>
        )
    }

}
 
export default Login;