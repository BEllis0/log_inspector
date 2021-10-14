import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, useLocation } from 'react-router';
// import { Link } from 'react-router-dom';
import styles from './SecondaryNav.module.scss';
// redux
import { connect } from 'react-redux'; // connect to store

import HollowButton from '../../Buttons/HollowButton/HollowButton.jsx';

const SecondaryNav = props => {
    
    const { navOptions } = props;

    const history = useLocation();
    
    const createPageName = () => {
        let strArr = history.pathname.split('/');
        for (let i = 0; i < strArr.length; i++) {
            strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
        }
        strArr.shift();
        return strArr.join('  |  ');
    }

    const pathPageName = createPageName();

    return (
        <div className={`${styles.secondaryNavContainer}`}>
            <div className="flex flex-justify-sb contentMargin flex-ac height100 w12">
                
                <h1 className="secondaryNavPageName">{pathPageName || "Page Name Undefined"}</h1>
                
                {/* Dynamic Nav Buttons */}
                <div className="flex gap-20">
                    {navOptions && navOptions.map(({href, text, color}, i) => {
                        return (
                            <HollowButton key={i} href={href} text={text} color={color} />
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

export default withRouter(connect(mapStateToProps, null)(SecondaryNav));

// SecondaryNav.propTypes = {
//     navOptions: PropTypes.arrayOf(
//         PropTypes.shape({
//             href: PropTypes.string,
//             text: PropTypes.string,
//             color: PropTypes.string,
//         })
//     ),
// };