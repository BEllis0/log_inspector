import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import dashboardSecondaryNavLinks from '../../../util/DashboardSecondaryNav.js';

// redux
import { connect } from 'react-redux'; // connect to store
import { getMessage } from '../../../actions/messages.js';

import AuthNav from '../../Nav/AuthNav/AuthNav.jsx';
import SecondaryNav from '../../Nav/Secondary/SecondaryNav';
import SnackbarAlerts from '../../Misc/Snackbar/Snackbar.jsx';

const MessageView = props => {
    const { location, getMessage } = props;
    const [loading, changeLoading] = useState(true);
    let urlArr = location.pathname.split('/');
    let messageId = urlArr[urlArr.length - 1];

    useEffect(async () => {
        await getMessage(messageId);
        await changeLoading(false);
    }, []);

    return (
        <>
            <AuthNav /> 
            <SecondaryNav navOptions={dashboardSecondaryNavLinks} />

            <div className="viewBackground">
                <div className="container">
                    {loading &&
                        <div>loading</div>
                    }
                    
                </div>
            </div>

            <SnackbarAlerts />
        </>
    )
};

const mapStateToProps = state => ({
    loggedIn: state.login.loggedIn,
    messages: state.messages.messages
});

const mapDispatchToProps = {
    getMessage
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageView));