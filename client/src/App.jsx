import React from 'react';
import { withRouter, Redirect } from 'react-router';
import { Route } from "react-router-dom";
// redux
import { connect } from 'react-redux'; // connect to store
import styles from './styles/global.scss';
import { getProfile } from './actions/users.js';
import { getMessagesByUser } from './actions/messages.js';

// components
import AuthRoute from './components/Misc/AuthRoute.jsx';
import Home from './components/Views/Home/Home.jsx';
import RegisterOrSignIn from './components/Views/RegisterOrSignIn/RegisterOrSignIn.jsx';
import Profile from './components/Views/Profile/Profile';

class App extends React.Component {


    componentDidMount() {
        if (this.props.loggedIn) {
            this.props.getProfile();
            this.props.getMessagesByUser();
        }
    }
    
    render() {
        return (
            <div>

                {/* Public Pages */}
                <Route exact path="/" component={Home} />

                {/* Sign In and Register */}
                <Route exact path="/register"  component={RegisterOrSignIn} />
                <AuthRoute exact path="/sign-in" component={RegisterOrSignIn} type="guest">
                    {this.props.loggedIn ? <Redirect to="/account/profile" /> : <RegisterOrSignIn /> }
                </AuthRoute>
                
                {/* Account Related */}
                <AuthRoute exact path="/account/profile" type="private">
                    <Profile />
                </AuthRoute>
                <AuthRoute exact path="/account/groups" component={Profile} type="private" />
                <AuthRoute exact path="/account/domain-whitelist" component={Profile} type="private" />

                {/* Edge Case Routes - handle incorrect pathing */}
                <AuthRoute exact path='/profile' type="private">
                    <Redirect to="/account/profile" />
                </AuthRoute>
                
                
                {/* <Route path="/error" component={ErrorPage} /> */}
            </div>
        )
    }
};

const mapStateToProps = state => ({
    state: state,
    loggedIn: state.login.loggedIn,
});

const mapDispatchToProps = {
    getProfile,
    getMessagesByUser,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));