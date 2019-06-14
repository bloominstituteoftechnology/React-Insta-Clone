import React from "react";
import PrivateRoute from "./components/withAuth/authRouter.js";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from "./components/LoginComponent/login";
import Nav from "./components/SearchBar/searchBar.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Nav} />
      </div>
    </Router>
  );
}

export default App;
