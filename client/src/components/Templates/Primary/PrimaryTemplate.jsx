import React from 'react';
import { withRouter, BrowserHistory } from 'react-router';

// redux
import { connect } from 'react-redux'; // connect to store

const PrimaryTemplate = props => {
    return (
        <div>
            I'm a template bro
        </div>
    )
};

const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = {
    // loginCheck,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrimaryTemplate));