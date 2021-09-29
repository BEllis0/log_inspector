import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './SecondaryNav.module.scss';
// redux
import { connect } from 'react-redux'; // connect to store

const SecondaryNav = props => {
    return (
        <div className={styles.secondaryNavContainer}>

        </div>
    )
};

const mapStateToProps = state => ({
    state: state
});

export default withRouter(connect(mapStateToProps, null)(SecondaryNav));