import React, { useState } from 'react';
import { withRouter } from 'react-router';
import styles from './NewDomain.module.scss';

import { connect } from 'react-redux'; // connect to store
import { updateDomains } from '../../../actions/users.js';

const NewDomainForm = (props) => {
    const  [domainName, updateDomainName] = useState('');

    const handleSubmitDomain = (e) => {
        e.preventDefault();
        props.updateDomains(domainName);
    };

    const handleInputChange = (e) => {
        updateDomainName(e.target.value);
    };

    return (
        <form onSubmit={handleSubmitDomain} className={styles.domainForm}>
            <input className="primaryCTA" type="submit" />
            <input onChange={handleInputChange} id={styles.formInput} placeholder="mywebsite.com" type="text" />
        </form>
    );
};

const mapDispatchToProps = {
    updateDomains
};

export default withRouter(connect(null, mapDispatchToProps)(NewDomainForm));