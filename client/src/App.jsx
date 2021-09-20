import React from 'react';
import { withRouter, BrowserHistory } from 'react-router';
import { Route } from "react-router-dom";
// redux
import { connect } from 'react-redux'; // connect to store
import styles from './styles/global.scss';

// components
import Home from './components/Views/Home/Home.jsx';
import RegisterOrSignIn from './components/Views/RegisterOrSignIn/RegisterOrSignIn.jsx';

class App extends React.Component {

    componentDidMount() {
        console.log('mounted')
    }
    
    render() {
        return (
            <div>
                <Route exact path="/register"  component={RegisterOrSignIn} />
                <Route exact path="/sign-in"  component={RegisterOrSignIn} />
                {/* <Route exact path="/" component={Home} /> */}
                {/* <Route path="/error" component={ErrorPage} /> */}
            </div>
        )
    }
};

const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = {
    // loginCheck,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));