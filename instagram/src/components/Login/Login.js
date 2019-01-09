import React from 'react';
import PropTypes from 'prop-types';
import iconSet from '../../img/app-icon-set.png';
import iconMicro from '../../img/microsoft-icon.png';
import phoneBG from '../../img/phone-bg.png';
import screenshot from '../../img/screenshot.jpg';
import title from '../../img/insta-title.png';

import './Login.css';

const Login = props => {
  const links = ["ABOUT US","SUPPORT","PRESS","API","JOBS","PRIVACY","TERMS","DIRECTORY","PROFILES","HASHTAGS","LANGUAGE",]

  return(
    <div className="login--container" >
      <div className="login__main">

        <div className="login__main__img">
          <img src={phoneBG} alt="#" />
          <img src={screenshot} alt="#" id="screenshot"/>
        </div>


        <div className="form-container">
          <form className="login__form">
            <img src={title} alt="Instagram" />
            <input type="text" name="username" onChange={props.handleUser} placeholder="Username"/>
            <input type="text" name="password" onChange={props.handlePass} placeholder="Password"/>
            <button onClick={props.login}>Log In</button>
            <button onClick={props.signup}>Sign Up</button>
          </form>

          <p>Get The App</p>

          <div className="app-icons">
            <img src={iconSet} alt="Apple Store and Google Play Icons" />
            <img src={iconMicro} alt="Microsoft Icon" />
          </div>
        </div>
      </div>

      <div className="form__footer">
        <div className="form__footer__links">
          {links.map(link => <a href="#" key={Math.random()}>{link}</a>)}
        </div>

        <p>&copy; 2019 INSTAGRAM</p>
      </div>

    </div>
  );
}

Login.propTypes = {
  login: PropTypes.func,
  handleUser: PropTypes.func,
  handlePass: PropTypes.func,
  signup: PropTypes.func,
}

export default Login;
