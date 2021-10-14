import React from 'react';
import PropTypes from 'prop-types';
import styles from './HollowButton.module.scss';
import { Link } from 'react-router-dom';

const HollowButton = (props) => {
    const { text, color, href } = props;

    const style = {
        color: color ? color : '',
        borderColor: color ? color : ''
    };

    return (
        <Link to={href}>
            <button
                className={styles.hollowButton}
                style={style}
            >
                { text }
            </button>
        </Link>
    )
};

export default HollowButton;

HollowButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    href: PropTypes.string
};