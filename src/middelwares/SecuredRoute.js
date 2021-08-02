import React from "react";
import { Route, Redirect } from "react-router-dom";

const SecuredRoute = ({ component: Component, ...otherProps }) => {
  const token = localStorage.getItem('access_token');
  return(
  <Route
    {...otherProps}
    render={props =>
        token!==null ? (
        <Component {...props} />
      ) : (
        <Redirect to="/signin" />
      )
    }
  />
  );
}

export default SecuredRoute;