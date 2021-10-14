import React from 'react';
import PropTypes from 'prop-types';
import styles from './HollowButton.module.scss';
import { Link } from 'react-router-dom';
import { withRouter, useLocation } from 'react-router';

import { connect } from 'react-redux'; // connect to store

import { getMessagesByUser, updatedMessages } from '../../../actions/messages.js';

const HollowButton = (props) => {
    const { 
        text,
        color,
        href,
        api,
        history,
        getMessagesByUser,
        updatedMessages
    } = props;

    const style = {
        color: color ? color : '',
        borderColor: color ? color : ''
    };

    const handleClick = async (e) => {
        e.preventDefault();
        if (api) {
            if (/messages/ig.test(href)) {
                await getMessagesByUser();
                await updatedMessages();
            }
        } else {
            history.push(href);
        }
    }

    return (
            <button
                className={styles.hollowButton}
                style={style}
                onClick={handleClick}
            >
                { text }
            </button>
    )
};

const mapDispatchToProps = {
    getMessagesByUser,
    updatedMessages
};

export default withRouter(connect(null, mapDispatchToProps)(HollowButton));

HollowButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    href: PropTypes.string
};