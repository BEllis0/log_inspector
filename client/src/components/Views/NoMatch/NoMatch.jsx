import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './NoMatch.module.scss';

// redux
import { connect } from 'react-redux'; // connect to store

import AuthNav from '../../Nav/AuthNav/AuthNav.jsx';
import PrimaryNav from '../../Nav/Primary/PrimaryNav.jsx';

const NoMatchView = props => {
    const { loggedIn } = props;
    
    return (
        <>
            {/* Conditional Nav */}
            {loggedIn === true 
                ? <AuthNav /> 
                : <PrimaryNav />
            }
            <div id={styles.viewBackground}>
                <h1>Page Not Found</h1>

                <div className="primaryCTA"><Link to="/">Return Home</Link></div>
            </div>

        </>
    )
};

const mapStateToProps = state => ({
    loggedIn: state.login.loggedIn
});

export default withRouter(connect(mapStateToProps, null)(NoMatchView));