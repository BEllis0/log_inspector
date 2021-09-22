import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { withRouter } from 'react-router';
// redux
import { connect } from 'react-redux'; // connect to store

const AuthRoute = ({component: Component, ...rest}) => {
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
      render={(props) => 
        props.type === "guest" && props.loggedIn === false ? <Component {...props} />
        : props.type === "guest" && props.loggedIn === true ? <Redirect to={{pathname: '/profile', state: {from: props.location}}} />
        : props.type === "private" && props.loggedIn === true ? <Component {...props} />
        : <Redirect to={{pathname: '/sign-in', state: {from: props.location}}} />
      }
    />
  )
};

const mapStateToProps = state => ({
    loggedIn: state.login.loggedIn,
});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthRoute));