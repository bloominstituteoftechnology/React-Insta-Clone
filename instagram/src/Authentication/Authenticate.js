import React from "react"
import dummyData from './../dummy-data';
import PostsPage from "./../components/PostContainer/PostPage";
import Login from "./../Login/Login";

const Authenticate = App =>{
return (
  class extends React.Component {
    constructor(){
    super();
    this.state = {
      dummyData: dummyData
    };
    this.login = (username, password) => {
      localStorage.setItem(username, password);
      window.location.reload();
    }
  }
    render() {
      if (localStorage.getItem("admin") == "password1"){
      return(
        <div>
          <PostsPage dummyData={this.state.dummyData}/>
        </div>)
      }
      else return(
        <div>
          <Login login={this.login}/>
        </div>
      )
    }
  }
)
}

  export default Authenticate;
