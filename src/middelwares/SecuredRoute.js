import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const SecuredRoute = ({ component: Component, ...otherProps }) => {
  const validToken=useSelector(state=>state.user.validToken)
  return(
  <Route
    {...otherProps}
    render={props =>
      validToken ? (
        <Component {...props} />
      ) : (
        <Redirect to="/signin" />
      )
    }
  />
  );
}

export default SecuredRoute;