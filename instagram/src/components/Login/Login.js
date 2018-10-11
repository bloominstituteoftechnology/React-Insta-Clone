import React from "react";
import "./Login.css";
import igTextLogo from "../../images/text-logo.png";
import authenticate from "../../Authentication/Authenticate";

const Login = props => {
  const footerLinks = [
    "about us",
    "support",
    "press",
    "api",
    "jobs",
    "privacy",
    "terms",
    "directory",
    "profiles",
    "hashtags",
    "language"
  ];

  return (
    <div className="login">
      <div className="login-card box">
        <img src={igTextLogo} alt="logo" />
        <form>
          <input type="text" placeholder="Mobile Number or Email" />
          <input type="password" placeholder="Password" /> <br />
          <button onClick={props.clicked}>Log in</button>
        </form>

        <h4>OR</h4>

        <div className="login-fb">
          <i class="fab fa-facebook" /> Log in with Facebook
        </div>
        <a>Forgot password?</a>
      </div>

      <div className="cta-signup box">
        Don't have an account? <a href="#">Sign up</a>
      </div>

      <p>Get the app</p>
      <div className="cta-download">
        <img
          src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
          alt="app store"
        />
        <img
          src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
          alt="googleplay"
        />
        <img
          src="https://www.instagram.com/static/images/appstore-install-badges/badge_microsoft_english-en.png/8a9204989bce.png"
          alt="microsoft"
        />
      </div>

      <div className="footer-nav">
        <div className="footer-links">
          {footerLinks.map(link => {
            return <a href="#">{link}</a>;
          })}
        </div>
        <div>&copy; instagram</div>
      </div>
    </div>
  );
};

export default Login;
