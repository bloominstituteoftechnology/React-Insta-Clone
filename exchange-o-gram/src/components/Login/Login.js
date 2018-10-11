import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
//import './Login.css';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 70%;
`;

const LoginHeader = styled.h2`
    text-align: center;
    font-size: 3.2rem;
    margin-bottom: 50px;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 50px;
`;

const InputContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 40px;
`;

const InputLabel = styled.p`
    align-self: center;
    width: 45%;
    padding-right: 5px;
    text-align: end;
    font-size: 2.4rem;
`;

const InputBox = styled.input`
    width: 45%;
    height: 30px;
    font-size: 2.4rem;
    border-radius: 5px;
    outline: none;
`;

const SubmitButton = styled.input`
    width: 30%;
    padding: 10px 0;
    margin: 0 auto;
    font-size: 2.4rem;
    border-radius: 10px;
    color: black;
    background-color: white;
    outline: none;
    border: 2px solid black;

    &:hover{
        color: white;
        background-color: black;
    }
`;

const DisplayInfo = styled.p`
    align-self: center;
    margin-top: 50px;
    font-size: 3.2rem;
    color: red;

    ${props => props.isDisplayed ? null : `display: none`}
`;

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
            <LoginContainer>
                <LoginHeader>Please Sign In</LoginHeader>
                <FormContainer>
                    <InputContainer><InputLabel>UserName:</InputLabel><InputBox onChange={this.usernameInput} placeholder="Enter username" value={this.state.usernameInput}></InputBox></InputContainer>
                    <InputContainer><InputLabel>Password:</InputLabel><InputBox onChange={this.passwordInput} placeholder="Enter password" value={this.state.passwordInput}></InputBox></InputContainer>
                    <SubmitButton onClick={this.login} type="submit" value="Submit"></SubmitButton>
                    <DisplayInfo isDisplayed={this.props.displayInfo}>Please log in to search posts</DisplayInfo>
                </FormContainer>
            </LoginContainer>
        )
    }
}

DisplayInfo.propTypes = {
    isDisplayed: PropTypes.bool
}

Login.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        }))
    })).isRequired,
    displayInfo: PropTypes.bool,
    addLike: PropTypes.func.isRequired,
    addNewComment: PropTypes.func.isRequired,
    searchPosts: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    setUser: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired
}

export default Login;