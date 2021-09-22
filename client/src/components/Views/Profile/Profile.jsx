import React from 'react';
import { withRouter } from 'react-router';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'; // connect to store
import styles from './Profile.module.scss';

const ProfileView = (props) => {
    
    return (
        <>
        {!props.loggedIn &&
            <Redirect to="/sign-in" />
        }

        {props.loggedIn &&
            <div>User logged in</div>
        }
        
        </>
    )
    
};

const mapStateToProps = state => ({
    loggedIn: state.login.loggedIn,
    user: state.user.profile
});

const mapDispatchToProps = {
    // loginCheck,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileView));