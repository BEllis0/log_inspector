import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import styles from './PrimaryNav.module.scss';
import logo from '../../../assets/logo_long_350x150px.png';
import primaryNavLinks from '../../../util/primaryNavPublicLinks.js';

// redux
import { connect } from 'react-redux'; // connect to store

const PrimaryNav = props => {
    return (
        <div className={styles.primaryNavContainer}>
            <div className="flex flex-justify-sb contentMargin">
                <img src={logo} className={styles.logo} />
                
                <div className="flex flex-ac flex-justify-sa">
                    {primaryNavLinks.map((link, i) => {
                        return (
                            <Link 
                                className="navLink"
                                key={i}
                                to={link.href}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </div>
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