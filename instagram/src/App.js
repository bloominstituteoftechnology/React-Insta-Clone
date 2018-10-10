import React from "react";
import "./App.css";
import PostsPage from "./components/PostsPage";
import Authenticate from "./components/Authenticate";
import LogIn from "./components/LogIn";


const Display = Authenticate(PostsPage, LogIn)

const App = () => (
  <Display/>
)

export default App;
