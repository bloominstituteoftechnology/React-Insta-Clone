// Login page

// state -> username/password

// on submit -> localStorage.setItem("user")










// import authenticate

class App extends Component {
    constructor() {
      super();
      this.state = {
        username: ""
      };
    }
  
    componentDidMount() {
      // login.js -> state: username/password, localStorage.setItem() 
      const user = localStorage.getItem("user");
      this.setState({ username: user });
    }
  
    render() {
      return (
  
      );
    }
  }
  
  export default Authenticate(App);
  
  
  
  
  
  // Authenticate
  
  // import Login
  
  const Authenticate = App =>
    class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          loggedIn: false
        };
      }
      componentDidMount() { // runs after render() 
        console.log(2); // logs second
        // check if user exists in localstorage
        // if it does, set state to true, if it doesnt set state to false 
      }
      render() { // runs first, returns login page
        console.log(1); // logs first
        if (this.state.loggedIn) return <App />;
        return <LoginPage />;
      }
    };
  
  export default Authenticate;
  
  