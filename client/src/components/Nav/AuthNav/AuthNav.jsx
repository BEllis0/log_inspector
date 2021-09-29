import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import styles from './AuthNav.module.scss';
import logo from '../../../assets/logo_long_350x150px.png';
import authNavLinks from '../../../util/authNavLinks.js';

// redux
import { connect } from 'react-redux'; // connect to store
import { logout } from '../../../actions/login.js';

const AuthNav = props => {

    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
      };
    
      const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
      };
    
      const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
      };

      const handleLogout = e => {
        props.logout();
      };
    
      const menuId = 'primary-search-account-menu';
      const renderMenu = (
        <Menu
          className={styles.menuDropdown}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id={menuId}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
            <MenuItem component={Link} to="/account/profile" onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem component={Link} onClick={handleLogout} to="/">Logout</MenuItem>
        </Menu>
      );
    
      const mobileMenuId = 'primary-search-account-menu-mobile';
      const renderMobileMenu = (
        <Menu
          className={styles.menuDropdown}
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id={mobileMenuId}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
        >
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <MenuItem component={Link} to="/account/profile">Profile</MenuItem>
            <MenuItem component={Link} onClick={handleLogout} to="/">Logout</MenuItem>
          </MenuItem>
        </Menu>
      );

    return (
        <div className={styles.authNavContainer}>
            <div className="flex flex-justify-sb contentMargin flex-ac">
                <div className="flex flex-ac">
                    <Link to="/"><img src={logo} className={styles.logo} /></Link>
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
                {/* <AccountCircle fontSize="large" /> */}
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircle fontSize="large" />
                </IconButton>
            </div>

            {renderMobileMenu}
            {renderMenu}
        </div>
    )
};

const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = {
    logout
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthNav));