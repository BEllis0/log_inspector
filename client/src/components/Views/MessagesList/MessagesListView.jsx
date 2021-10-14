import React from 'react';
import { withRouter } from 'react-router';
import styles from './MessagesListView.module.scss';

import dashboardSecondaryNavLinks from '../../../util/DashboardSecondaryNav.js';

// redux
import { connect } from 'react-redux'; // connect to store

import AuthNav from '../../Nav/AuthNav/AuthNav.jsx';
import SecondaryNav from '../../Nav/Secondary/SecondaryNav';
import DataSelectTable from '../../Data Viz/DataSelectTable/DataSelectTable.jsx';

const MessagesListView = props => {
    const { messages } = props;

    let tableHeader = [];

    if (messages.length) {
        tableHeader = Object.keys(messages[0]);
    }
    
    return (
        <>
            <AuthNav /> 
            <SecondaryNav navOptions={dashboardSecondaryNavLinks} />
            
            <div id={styles.viewBackground}>
                <div className="container">
                    
                    <DataSelectTable tableData={messages} tableHeader={tableHeader} />
                </div>
            </div>

        </>
    )
};

const mapStateToProps = state => ({
    loggedIn: state.login.loggedIn,
    messages: state.messages.messages
});

export default withRouter(connect(mapStateToProps, null)(MessagesListView));