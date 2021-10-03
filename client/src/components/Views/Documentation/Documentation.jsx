import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

// redux
import { connect } from 'react-redux'; // connect to store

import AuthNav from '../../Nav/AuthNav/AuthNav.jsx';
import PrimaryNav from '../../Nav/Primary/PrimaryNav.jsx'

const DocumentationView = props => {
    const { loggedIn } = props;
    return (
        <>
            {/* Conditional Nav */}
            {loggedIn === true 
                ? <AuthNav /> 
                : <PrimaryNav />
            }

            <div className="container flex">
                <div className="fb4">
                    <h1 className="heading">Documentation</h1>
                    <h2>Configuring the log-inspector package</h2>
                </div>
                <div className="fb8">
                    <h2>stuff</h2>
                </div>
            </div>

        </>
    )
};

const mapStateToProps = state => ({
    loggedIn: state.login.loggedIn
});

export default withRouter(connect(mapStateToProps, null)(DocumentationView));