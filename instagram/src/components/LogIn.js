import React from "react";
import DummyPost from "./PostContainer/DummyPost";
import SearchBar from "./SearchBar/SearchBar";
import { Instagram } from "../assets/assets";
import "./LogIn.css";
import {FullPageCover} from '../components/styleComponents'

class LogIn extends React.Component {
    constructor(){
        super();

        this.state={
            user: ''
        }
    }

    
      fillIn = e => {
        e.preventDefault()
        this.setState({ user: e.target.value });
      };


    logInHandler = e =>{
        let input = this.state.user;
        localStorage.setItem('user', input)
    }
  render() {
    return (
      <div>
        <FullPageCover>
          <form className="log-in-form" onSubmit={this.logInHandler}>
            <div className="instabox">
              <Instagram />
              <h4 className="title">Insta-clone Log In:</h4>
            </div>
            <input
              type="text"
              className="user-input"
              placeholder="username"
              name="username"
              onChange={this.fillIn}
              value={this.state.user}
              
            />
            <input
              type="password"
              className="password-input"
              placeholder="password"
              name="password"
              
            />
            <button type='submit'></button>
          </form>
        </FullPageCover>
        <SearchBar />
        <DummyPost />
      </div>
    );
  }
}
export default LogIn;
