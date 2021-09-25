import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'; // connect to store
import styles from './Profile.module.scss';

import AuthNav from '../../Nav/AuthNav/AuthNav.jsx';
import SecondaryNav from '../../Nav/Secondary/SecondaryNav.jsx';
import ProfileTabs from '../../Nav/ProfileTabs/ProfileTabs.jsx';
import NewDomainForm from '../../Forms/NewDomain/NewDomain.jsx';
import DomainWhitelist from '../../Lists/DomainWhitelist/DomainWhitelist.jsx';

const ProfileView = (props) => {

    const { user, location, loggedIn } = props;

    const [editModeOn, changeEditMode] = useState(false);
    const [newUsername, updateUsername] = useState(user.username);
    const [newName, updateName] = useState(`${user.firstName} ${user.lastName}`);

    const handleSaveEditClick = e => {
        // currently in editing mode
        if (editModeOn) {
            // if username was changed
            if (document.getElementById('usernameEditable').innerHTML !== user.username) {
                // update  username
                console.log('username changed')
            }

            if (document.getElementById('nameEditable').innerHTML !== `${user.firstName} ${user.lastName}`) {
                console.log('name changed')
            }
        }
        // swap edit mode to on/off
        changeEditMode(!editModeOn);
    };

    const handleBlur = e => {
        if (e.target.value === "") {
            console.log('emtpy')
        }
    };

    const handleCopyKey = e => {
        const key = document.querySelector('#clientApiKey').innerHTML;
        window.navigator.clipboard.writeText(key);  
    };

    if (loggedIn === false) {
        return (
            <Redirect to="/sign-in" />
        )
    }
    
    return (
        <div>
        
        <AuthNav />
        <SecondaryNav />
        
        <div className="container">

        <ProfileTabs />

        {location.pathname === "/account/profile" &&
            <div className="widgetContainer">
                <div className="widget fb6">
                    <div className="widgetInner">
                        <div className="flex flex-ac flex-justify-sb">
                            <h3 className="subHeading">Account Details</h3>
                            <p 
                                className="strong margin-lr-10" 
                                onClick={handleSaveEditClick}

                            >
                                {editModeOn ? 'Save': 'Edit'}
                            </p>
                        </div>
                        <br />
                        <div>
                            <p className="strong">Name</p>
                            <p
                                id="nameEditable"
                                contentEditable={editModeOn}
                                suppressContentEditableWarning={true}
                                onBlur={handleBlur}
                                >
                                {user.firstName} {user.lastName}
                            </p>
                        </div>
                        <br />
                        <div>
                            <p className="strong">Email Address</p>
                            <p
                                id="emailEditable"
                                // contentEditable={editModeOn}
                                suppressContentEditableWarning={true}
                                >
                                {user.email}
                            </p>
                        </div>
                        <br />
                        <div>
                            <p className="strong">Username</p>
                            <p
                                id="usernameEditable"
                                contentEditable={editModeOn}
                                suppressContentEditableWarning={true}
                                onBlur={handleBlur}
                                >
                                {user.username}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="widget fb6">
                    <div className="widgetInner">
                        <h3 className="subHeading">Client API Key</h3>
                        <br />
                        <p>API Key Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum
                        </p>
                        <br />
                        <div className="flex flex-ac flex-justify-sb orangeBorderBox">
                            <p id="clientApiKey">{user.clientApiKey}</p>
                            <p onClick={handleCopyKey}>Copy</p>
                        </div>
                    </div>
                </div>

                <div className="widget fb12">
                    <div className="widgetInner">
                        <h3 className="subHeading">Domain Whitelist</h3>
                        <br />
                        <p>Domain whitelist Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit.
                        </p>
                        <br />
                        
                        {/* Form for adding new domains */}
                        <NewDomainForm />
                        
                        {/* Domain Whitelist */}
                        <DomainWhitelist />
                    </div>
                </div>
            </div>
        }
        
        </div>
        
        </div>
    )
    
};

const mapStateToProps = state => ({
    loggedIn: state.login.loggedIn,
    user: state.user.profile
});

const mapDispatchToProps = {

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileView));