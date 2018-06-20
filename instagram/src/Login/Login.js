import React from "react";

class Login extends React.Component {
constructor(props){
  super(props)
}
render (){
  return(
    <div>
      <form id="loginform" className="login-form">
        <div>
          <input id="login-username" type="text" className="form-control" name="username" placeholder="username"></input>
        </div>
        <div>
          <input id="login-password" type="password" className="form-control" name="password" placeholder="password"></input>
        </div>
        <div className="form-group">
          <div className="col-sm-12 login-btn-container">
              <a className="btn btn-dark login-btn" onClick={() => this.props.login(document.getElementById('login-username').value, document.getElementById('login-password').value)}>Login</a>
          </div>
        </div>
          <div className="form-group">
        </div>
      </form>
    </div>
  )
}
}

export default Login;
