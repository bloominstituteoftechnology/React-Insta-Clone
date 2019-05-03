import styled from 'styled-components';

const H1 = styled.h1`
    font-family: 'Great Vibes';
    font-size: 5rem;
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    padding: 5px 15px;
    border-radius: 5px;
    border: 1px solid skyblue;
    margin: 5px 0;
    &[type=password]{
        margin-bottom: 15px;
    }
    &:hover{
        border-color: #6363ff;
    }
`

export {
    H1,
    LoginForm,
    Input
};