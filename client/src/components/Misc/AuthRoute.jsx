import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { withRouter } from 'react-router';
// redux
import { connect } from 'react-redux'; // connect to store

const AuthRoute = ({children, ...rest}) => {
  /*
    Route logic:
    -If route is a 'guest' page (login, register) and user is NOT logged in
      -Display the view
    -If route is a 'guest' page (login, register) and user IS logged in
      -Redirect to gated page
    -If route is a 'private' page (login, register) and user IS logged in
      -Display the view
    -If route is a 'guest' page (login, register) and user is NOT logged in
      -Redirect to sign in page
  */
  
  return (
    <Route
      {...rest}
      render={(props) => {
        return rest.type === "guest" && rest.loggedIn === false ? children
        : rest.type === "guest" && rest.loggedIn === true ? <Redirect to={{pathname: 'account/profile', state: {from: rest.location}}} />
        : rest.type === "private" && rest.loggedIn === true ? children
        : <Redirect to={{pathname: '/sign-in', state: {from: rest.location}}} />
      }}
    />
  )
};

const mapStateToProps = state => ({
    loggedIn: state.login.loggedIn,
});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthRoute));