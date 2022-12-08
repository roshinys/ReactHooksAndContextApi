import React, { useContext } from "react";

import AuthContext from "../../store/auth-context";
import Button from "../UI/Button/Button";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {authCtx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {authCtx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {authCtx.isLoggedIn && (
          <li>
            <Button onClick={authCtx.logoutHandler}>Logout</Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
