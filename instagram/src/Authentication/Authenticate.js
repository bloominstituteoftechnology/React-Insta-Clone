import React, { useState, useEffect } from "react";

const Authenticate = App => Login => () => {
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setLoginStatus(true);
    }
  }, []);

  if (loginStatus) {
    return <App />;
  }
  return <Login />;
};

export default Authenticate;
