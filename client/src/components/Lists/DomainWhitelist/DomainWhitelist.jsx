import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'; // connect to store
import styles from './DomainWhitelist.module.scss';

// ui kit
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { deleteDomain } from '../../../actions/users.js';

const DomainWhitelist = (props) => {
    const { user, deleteDomain } = props;

    const handleDeleteDomain = (domainName) => {
        deleteDomain(domainName);
    };

    return (
        <ul className="flex wrap">
            {user.domains && user.domains.map((domain, i) => {
                return (
                    <li key={i} className={styles.domain}>{domain}<HighlightOffIcon onClick={(e) => handleDeleteDomain(domain)} /> </li>
                )
            })}
        </ul>
    )
};

const mapStateToProps = state => ({
    user: state.user.profile
});

const mapDispatchToProps = {
    deleteDomain
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DomainWhitelist));