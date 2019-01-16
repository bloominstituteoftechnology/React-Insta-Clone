import React from "react";
import "./Login.scss";
import sprite from "./sprite.png";

const LoginContainer = props => {
  return (
    <div className="login-page">
      <div className="left-side">
        <img src="phones.png" alt="Hamza Elkhoudiri | Phones" />
      </div>
      <div className="right-side">
        <div
          className="title_sprite"
          style={{ backgroundImage: `url(${sprite})` }}
        />
        <h2 className="sign-up-text">
          Sign up to see photos and videos from your friends.
        </h2>
        <div className="signup-form">
          <form>
            <input name="email" placeholder="Mobile Number or Email" />
            <input name="name" placeholder="Full Name" />
            <input name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button className="signup-btn">Sign Up</button>
            <p class="terms">
              By signing up, you agree to our{" "}
              <a href="https://help.instagram.com/581066165581870">Terms</a>,{" "}
              <a href="https://help.instagram.com/519522125107875">
                Data Policy
              </a>{" "}
              and <a href="/legal/cookies/">Cookies Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
