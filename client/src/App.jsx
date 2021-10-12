import React, { Suspense, lazy } from 'react';
import { withRouter, Redirect } from 'react-router';
import { Route, Switch } from "react-router-dom";
// redux
import { connect } from 'react-redux'; // connect to store
import styles from './styles/global.scss';
import { getProfile } from './actions/users.js';
import { getMessagesByUser } from './actions/messages.js';
import { pollServer } from './actions/login.js';

// components
import AuthRoute from './components/Misc/AuthRoute.jsx';
import Home from './components/Views/Home/Home.jsx';
const RegisterOrSignIn = lazy(() => import('./components/Views/RegisterOrSignIn/RegisterOrSignIn.jsx'));
const Profile = lazy(() => import('./components/Views/Profile/Profile'));
const DocumentationView = lazy(() => import('./components/Views/Documentation/Documentation.jsx'));
import NoMatchView from './components/Views/NoMatch/NoMatch.jsx';
import ErrorBoundary from './components/Views/ErrorBoundary/ErrorBoundary.jsx';
import DashboardView from './components/Views/Dashboard/DashboardView.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount = () => {
        if (this.props.loggedIn) {
            this.props.getProfile();
            this.props.getMessagesByUser();
            
            window.interval = window.interval || setInterval(() => {
                this.props.pollServer();
            }, 60000);
        }
    }
    
    render() {
        return (
            <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {/* Public Pages */}
                        <Route exact path="/" component={Home} />
                        <Route exact path="/documentation" component={DocumentationView} />

                        {/* Sign In and Register */}
                        <Route exact path="/register"  component={RegisterOrSignIn} />
                        <AuthRoute exact path="/sign-in" type="guest">
                            {this.props.loggedIn ? <Redirect to={"/account/profile"} /> : <RegisterOrSignIn /> }
                        </AuthRoute>

                        {/* Data Viz Related */}
                        <AuthRoute exact path="/dashboard" type="private">
                            <DashboardView />
                        </AuthRoute>
                        
                        {/* Account Related */}
                        <AuthRoute exact path="/account/profile" type="private">
                            <Profile />
                        </AuthRoute>
                        {/* <AuthRoute exact path="/account/groups" component={Profile} type="private" />
                        <AuthRoute exact path="/account/domain-whitelist" component={Profile} type="private" /> */}

                        {/* Edge Case Routes - handle incorrect pathing */}
                        <Route path="*">
                            <NoMatchView />
                        </Route>
                        
                    </Switch>
                </Suspense>
            </ErrorBoundary>
        )
    }
};

const mapStateToProps = state => ({
    loggedIn: state.login.loggedIn,
});

const mapDispatchToProps = {
    getProfile,
    getMessagesByUser,
    pollServer
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));