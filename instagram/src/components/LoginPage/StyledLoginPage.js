import styled from 'styled-components';

const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F9F9F9;
`

const LoginForm = styled.form`
    width: 35rem;
    height: 35rem;
    border: 1px solid #E8E8E8;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`

const InstagramLogoText = styled.img`
    width: 18.4rem;
    height: 7.4rem;
    margin-top: 16px;
`

const InputContainer = styled.div`
    position: relative;

    input:focus {
        font-size: 1rem;
        padding-top: 10px;
        
        & + label {
            top: 2px;
            left: 0;
            font-size: 1rem;
            transform: translate(4%, 50%);
        }

    }

    label {
        position: absolute;
        left: 10px;
        top: 15px;
        font-size: 1.3rem;
        color: #B2B2B2;
        transition: 0.5s;
    }
`

const LoginInput = styled.input`
    width: 27rem;
    height: 3.5rem;
    border: 1px solid #F4F4F4;
    border-radius: 5px;
    background-color: #FAFAFA;
    padding-left: 10px;
    font-size: 1.2rem;
`

const InputUsername = styled(LoginInput)`
    margin-top: 3px;
`

const InputPassword = styled(LoginInput)`
    margin-top: 5px;
`

const LoginButton = styled.button`
    width: 27rem;
    height: 3rem;
    margin-top: 20px;
    background-color: ${props => (props.password || props.username ? '#3897F0' : '#C4E0FA')};   
    border: 1px solid ${props => (props.password || props.username ? '#3897F0' : '#C4E0FA')};
    color: ${props => (props.password || props.username ? 'white' : '#FCFDFF')};
    font-weight: bold;
`

export { 
    LoginContainer, 
    LoginForm, 
    InstagramLogoText,
    InputContainer, 
    InputUsername, 
    InputPassword, 
    LoginButton 
}