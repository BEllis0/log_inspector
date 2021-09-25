import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import AccountCircle from '@mui/icons-material/AccountCircle';

import styles from './AuthNav.module.scss';
import logo from '../../../assets/logo_long_350x150px.png';
import authNavLinks from '../../../util/authNavLinks.js';

// redux
import { connect } from 'react-redux'; // connect to store

const AuthNav = props => {

    const [anchorEl, setAnchorEl] = useState(null);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };

    return (
        <div className={styles.authNavContainer}>
            <div className="flex flex-justify-sb contentMargin flex-ac">
                <div className="flex flex-ac">
                    <img src={logo} className={styles.logo} />
                    <div className="flex flex-ac flex-justify-sa">
                        {authNavLinks.map((link, i) => {
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
                <AccountCircle fontSize="large" />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthNav));