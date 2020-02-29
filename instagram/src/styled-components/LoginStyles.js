import styled from 'styled-components';


const LoginForm = styled.form`
    display: flex;
    flex-direction: ${props => props.row ? 'row' : 'column'};
    justify-content: ${props => props.row ? 'center' : 'space-around'};
    align-items: center;

    height: ${props => props.small ? '10%' : '60%'};
    width: 100%;
    padding: ${props => props.small ? '0 0' : '40px 0'};

    background-color: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 3px;

    font-size: 1.4rem;

    input {
      margin-top: 10px;
      width: 60%;
      height: 35px;
      padding-left: 7px;

      font-size: 1.4rem;
    }

    button {
      border: none;
      border-radius: 7px;
      width: 60%;
      height: 35px;
      min-height: 25px;
      margin: 5px 0;
      background-color: #405de6;

      color: white;
      font-size: 1.4rem;
      font-weight: bold;
      letter-spacing: 1.5px;

      transition: background-color .5s;
    }

    button:hover {
      cursor: pointer;

      background-color: #833ab4;
    }

    button:focus {
      outline: none;
    }

    a {
      margin-left: 10px;
      font-size: ${props => props.smLink ? '1.2rem' : 'inherit'};
    }

    @media(max-width: 952px) {
      .login__form button {
        width: 34%;
      }
    }
`;

const FooterLinks = styled.div`
  flex: .55;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  margin-right: 50px;

  a {
    color: #003569;
    font-size: 1.4rem;
    margin-right: 8px;
  }

  a:hover {
    text-decoration: none;
  }

  @media(max-width: 891px) {
    flex: .8;
  }
`;

export {
  LoginForm,
  FooterLinks
}
