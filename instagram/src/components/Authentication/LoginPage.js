import React from "react";

const LoginPage = props => {
  return (
    <div className="log-in-container">
      <div className="log-in-wrapper">
        <div className="log-in-phone-container">
          <img src="https://i.imgur.com/K0GVTfd.png" alt="" />
        </div>
        <div className="log-in-form-container">
          <form onSubmit={props.handleSignupState}>
            <h1>Instagram</h1>
            <div className="facebook-login">
              <h2>
                <i className="fab fa-facebook-f" />
                Log in with Facebook
              </h2>
            </div>

            <input type="text" placeholder="Mobile Number or Email" required />
            <input type="text" placeholder="Full Name" required />
            <input
              type="text"
              placeholder="username"
              required
              onChange={props.handleLoginInput}
              value={props.loginTarget}
            />
            <input type="password" placeholder="Password" required />
            <input type="submit" id="sign-up-btn" value="Sign Up" />
            <p>
              By signing up, you agree to our Terms, Data Policy and Cookies
              Policy.
            </p>
          </form>
          <div className="log-in">
            <p>
              Have an account? <a href="#">Log in</a>
            </p>
          </div>
          <div className="get-the-app">
            <h6>Get the App.</h6>
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
              alt=""
            />
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
              alt=""
            />
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_microsoft_english-en.png/8a9204989bce.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
