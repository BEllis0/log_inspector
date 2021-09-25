import React from 'react';
import { withRouter, BrowserHistory } from 'react-router';

// components

// redux
import { connect } from 'react-redux'; // connect to store

const Home = props => {
    return (
        <div></div>
    )
};

const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = {
    // loginCheck,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));