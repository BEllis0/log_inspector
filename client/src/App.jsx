import React from 'react';
import { withRouter, Redirect } from 'react-router';
import { Route } from "react-router-dom";
// redux
import { connect } from 'react-redux'; // connect to store
import styles from './styles/global.scss';

// components
import AuthRoute from './components/Misc/AuthRoute.jsx';
import Home from './components/Views/Home/Home.jsx';
import RegisterOrSignIn from './components/Views/RegisterOrSignIn/RegisterOrSignIn.jsx';
import Profile from './components/Views/Profile/Profile';

class App extends React.Component {

    componentDidMount() {
        console.log('mounted')
    }
    
    render() {
        return (
            <div>
                <Route exact path="/register"  component={RegisterOrSignIn} />
                
                <AuthRoute exact path="/sign-in" component={RegisterOrSignIn} type="guest">
                    {this.props.loggedIn ? <Redirect to="/profile" /> : <RegisterOrSignIn /> }
                </AuthRoute>
                
                <AuthRoute exact path="/profile" type="private">
                    <Profile />
                </AuthRoute>
                {/* <Route exact path="/" component={Home} /> */}
                {/* <Route path="/error" component={ErrorPage} /> */}
            </div>
        )
    }
};

const mapStateToProps = state => ({
    loggedIn: state.login.loggedIn,
});

const mapDispatchToProps = {
    // loginCheck,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));