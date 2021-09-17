import React from 'react';
import { withRouter, BrowserHistory } from 'react-router';

// redux
import { connect } from 'react-redux'; // connect to store

// components
import { Home } from './components/Views/Home/Home.jsx';

class App extends React.Component {
    
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
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