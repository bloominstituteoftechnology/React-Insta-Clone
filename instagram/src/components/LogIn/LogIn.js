import React from "react";
import "./LogIn.css";
import logo from "../../assets/instagramlogin.png";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      username: ''
    }
  }

  handleChange = e => {
    this.setState({ username: e.target.value })
  }

  handleSubmit = () => {
    localStorage.setItem('username', this.state.username)
  }
  render() {
    return (
      <div className="login">
        <div className="login__box">
          <form 
            className="login__box--inside"
            onSubmit={this.handleSubmit}>
            <img src={logo} alt="logo" className="login--logo" />
            <div className="input-box">
              <input 
              className="input input--username" 
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
               />
              <input className="input input--password" placeholder="Password" />
            </div>
            <button className="login--btn" type="submit">Log in</button>
          </form>
        </div>
      </div>
    );
  }
}
export default LogIn;
