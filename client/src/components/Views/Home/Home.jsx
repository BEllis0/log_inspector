import React from 'react';
import { withRouter, BrowserHistory } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

// redux
import { connect } from 'react-redux'; // connect to store

// components
import PrimaryNav from '../../Nav/Primary/PrimaryNav.jsx';
import AuthNav from '../../Nav/AuthNav/AuthNav.jsx';
import SnackbarAlerts from '../../Misc/Snackbar/Snackbar.jsx';

const Home = props => {

    const { loggedIn } = props;

    return (
        <>
            {/* Conditional Nav */}
            {loggedIn === true 
                ? <AuthNav /> 
                : <PrimaryNav />
            }

            <SnackbarAlerts />
        </>
    )
};

const mapStateToProps = state => ({
    loggedIn: state.login.loggedIn
});

const mapDispatchToProps = {
    // loginCheck,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));