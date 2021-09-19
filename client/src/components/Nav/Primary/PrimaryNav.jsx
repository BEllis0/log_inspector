import React from 'react';
import { withRouter } from 'react-router';
import styles from './PrimaryNav.module.scss';
import logo from '../../../assets/logo_long_350x150px.png';
// redux
import { connect } from 'react-redux'; // connect to store

const PrimaryNav = props => {
    console.log('styles: ', styles)
    return (
        <div className={styles.primaryNavContainer}>
            <div className="flex flex-justify-center">
                <img src={logo} className={styles.logo} />

            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = {
    // loginCheck,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrimaryNav));