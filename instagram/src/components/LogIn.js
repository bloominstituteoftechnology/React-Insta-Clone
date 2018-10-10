import React from "react";
import DummyPost from "./PostContainer/DummyPost";
import SearchBar from "./SearchBar/SearchBar";
import {Instagram} from '../assets/assets'
import './LogIn.css'

const LogIn = props => (
  <div>
      <div className="transparent-cover">
      <form className="log-in-form" onSubmit={props.logInHandler}>
      <div className='instabox'><Instagram/>
      <h4 className='title' >Insta-clone Log In:</h4>
      </div>
        <input type='text' className="user-input" placeholder="username" required />
        <input type='password' className="password-input" placeholder="password" required/>
      </form>
    </div>
    <SearchBar />
    <DummyPost />
    
  </div>
);

export default LogIn;
