import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import styles from './MessageView.module.scss';
import dashboardSecondaryNavLinks from '../../../util/DashboardSecondaryNav.js';

// redux
import { connect } from 'react-redux'; // connect to store
import { getMessage } from '../../../actions/messages.js';

import { Skeleton } from '@mui/material';

import AuthNav from '../../Nav/AuthNav/AuthNav.jsx';
import SecondaryNav from '../../Nav/Secondary/SecondaryNav';
import SnackbarAlerts from '../../Misc/Snackbar/Snackbar.jsx';

const MessageView = props => {
    const { location, getMessage, message } = props;
    const [loading, changeLoading] = useState(true);
    const [editModeOn, changeEditMode] = useState(false);
    let urlArr = location.pathname.split('/');
    let messageId = urlArr[urlArr.length - 1];

    useEffect(async () => {
        await getMessage(messageId);
        await changeLoading(false);
    }, []);

    const handleSaveEditClick = e => {
        // currently in editing mode
        // if (editModeOn) {

        //     let payload = {};
        //     // if username was changed
        //     if (document.getElementById('usernameEditable').innerHTML !== user.username) {
        //         payload["username"] = document.getElementById('usernameEditable').innerHTML;
        //     }
        //     // name changed
        //     if (document.getElementById('nameEditable').innerHTML !== `${user.firstName} ${user.lastName}`) {
        //         let name = document.getElementById('nameEditable').innerHTML.split(' ');
        //         payload["firstName"] = name[0];
        //         payload["lastName"] = name[1];
        //     }
        //     // if anything changed, run action
        //     if (Object.keys(payload).length > 0) {
        //         props.updateUserSettings(payload);
        //     }
        // }
        // swap edit mode to on/off
        changeEditMode(!editModeOn);
    };

    const handleInputChange = (e) => {
        console.log(e.target);
    }

    return (
        <>
            <AuthNav /> 
            <SecondaryNav navOptions={dashboardSecondaryNavLinks} />

            <div className="viewBackground">
                <div className="container">
                    <div className="widgetContainer">
                        <div className="widget fb6">
                            <div className="widgetInner">
                                {loading &&
                                    <Skeleton />
                                }
                                <h3 
                                    onClick={handleSaveEditClick}
                                    className="orangeBorderBox"
                                >
                                        {editModeOn ? 'Save': 'Edit'}
                                </h3>
                                
                                {message &&
                                    <div className="flex">
                                        <div className={`${styles.messageContainer} fb6`}>
                                            <h3>Site Name:</h3>
                                            <p contentEditable={editModeOn} suppressContentEditableWarning={true}>{message.siteName || "Null"}</p>
                                            <h3>Message Type:</h3>
                                            <p>{message.type}</p>
                                            <h3>Channel:</h3>
                                            <p contentEditable={editModeOn} suppressContentEditableWarning={true}>{message.channel || "Null"}</p>
                                            <h3>Environment:</h3>
                                            <p contentEditable={editModeOn} suppressContentEditableWarning={true}>{message.environment || "Null"}</p>
                                            <h3>Owner ID:</h3>
                                            <p>{message.ownerId}</p>
                                            <h3>Priority Level:</h3>
                                            <p contentEditable={editModeOn} suppressContentEditableWarning={true}>{message.priorityLevel || "Null"}</p>
                                            <h3>Status:</h3>
                                            <p contentEditable={editModeOn} suppressContentEditableWarning={true}>{message.status || "Null"}</p>
                                            <h3>Project Ticket URL:</h3>
                                            <p contentEditable={editModeOn} suppressContentEditableWarning={true}>{message.projectTicketUrl || "Null"}</p>
                                        </div>
                                        <div className={`${styles.messageContainer} fb6`}>
                                            <h3>Domain:</h3>
                                            <p contentEditable={editModeOn} onChange={handleInputChange} suppressContentEditableWarning={true}>{message.domain || "Null"}</p>
                                            <h3>Page:</h3>
                                            <p contentEditable={editModeOn} suppressContentEditableWarning={true}>{message.page || "Null"}</p>
                                            <h3>Description:</h3>
                                            <p contentEditable={editModeOn} suppressContentEditableWarning={true}>{message.description || "Null"}</p>

                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="widget fb6">
                            <div className="widgetInner">
                                {loading &&
                                    <Skeleton />
                                }

                                {message &&
                                    <div className={styles.messageContainer}>
                                        <div className="flex flex-justify-sb">
                                            <h3>Created At:</h3>
                                            <p>{message.createdAt}</p>
                                        </div>
                                        <div className="flex flex-justify-sb">
                                            <h3>Updated At:</h3>
                                            <p>{message.updatedAt}</p>
                                        </div>
                                        <h3>Log Message</h3>
                                        {message.message.map((message, i) => {
                                            return (
                                                <p className="markdownBox" key={i}>{typeof message === 'string' ? message : 'Error displaying message'}</p>
                                            )
                                        })}
                                        <h3>Context</h3>
                                        <p contentEditable={editModeOn} suppressContentEditableWarning={true}>{message.context || "Null"}</p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SnackbarAlerts />
        </>
    )
};

const mapStateToProps = state => ({
    loggedIn: state.login.loggedIn,
    message: state.messages.selectedMessage
});

const mapDispatchToProps = {
    getMessage
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageView));