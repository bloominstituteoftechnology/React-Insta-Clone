class Login extends Component {
    constructor(props) {
      super(props);
    }
  
    
    render() {
      return (
        <form>
          <h1>Username</h1>
          <input name="username" type="text" />
          <h1>Password</h1>
          <input type="password" />
          <button>Login</button>
        </form>
      );
    }
  }
  
  export default Login;
  