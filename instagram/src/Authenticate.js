import React from "react";
import Start from "./components/Start/Start";

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: undefined,
        users: [],
      };
    }

    componentDidMount() {
      let user = JSON.parse(localStorage.getItem("user"));
      let users = JSON.parse(localStorage.getItem("users"));
      if (users) {
        console.log(users);
        this.setState({
          user: user,
          users: users,
        });
      } else if (user) {
        console.log(user);
        this.setState({
          user: user,
        });
      }
    }

    handleLogIn = user => {
      console.log(user)
      this.setState(prevState => {
        console.log(prevState.users);
        if (prevState.users.length > 0) {
          console.log('true')
          return {
            users: prevState.users.filter(a => a !== user),
            user: user,
          };
        } else {
          return {
            user: user,
          };
        }
      }, localStorage.setItem("user", JSON.stringify(user), localStorage.setItem("users", JSON.stringify(this.state.users))));
    };

    handleLogOut = user => {
      console.log(user);
      localStorage.removeItem("user");
      this.setState(prevState => {
        if (prevState.users) {
          return {
            users: [...prevState.users, user],
            user: undefined,
          };
        } else {
          return {
            users: [user],
            user: undefined,
          };
        }
      });
    };

    

    render() {
      return this.state.user ? (
        <App
          user={this.state.user}
          handleLogOut={this.handleLogOut}
          handleAddLike={this.handleAddLike}
          handleRemoveLike={this.handleRemoveLike}
        />
      ) : (
        <Start handleLogIn={this.handleLogIn} users={this.state.users} />
      );
    }
  };

export default Authenticate;
