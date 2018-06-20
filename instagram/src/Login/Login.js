import React from "react";

class Login extends React.Component {
constructor(){
  super()
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
              <a href="#" className="btn btn-dark login-btn">Login</a>
          </div>
        </div>
          <div className="form-group">
          <div className="col-md-12 control">
            <div >
              Don't have an account! <br></br>
              <a href="#">
                Sign Up Here
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
}

export default Login;
