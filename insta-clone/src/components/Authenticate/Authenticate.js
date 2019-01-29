import React from "react";
import Login from "../Login/Login";
const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount = () => {
      if (!localStorage.getItem("user")) {
        this.setState({ loggedIn: false });
      } else {
        setTimeout(() => { localStorage.clear() }, 300000)
          this.setState({ loggedIn: true });
      }
    };

    render() {
      // return <App />
        if (this.state.loggedIn) return <App />;
      return <Login />;

    }
  };
export default Authenticate;
