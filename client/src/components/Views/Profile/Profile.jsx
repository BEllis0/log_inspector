import React from 'react';
import { withRouter } from 'react-router';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'; // connect to store
import styles from './Profile.module.scss';

import AuthNav from '../../Nav/AuthNav/AuthNav.jsx';
import PrimaryNav from '../../Nav/Primary/PrimaryNav.jsx'
import ProfileTabs from '../../Nav/ProfileTabs/ProfileTabs.jsx';
import NewDomainForm from '../../Forms/NewDomain/NewDomain.jsx';

const ProfileView = (props) => {

    const { user, location, loggedIn } = props;

    if (loggedIn === false) {
        return (
            <Redirect to="/sign-in" />
        )
    }
    
    return (
        <div>
        
        <PrimaryNav />
        <AuthNav />
        
        <div className="container">

        <ProfileTabs />

        {location.pathname === "/account/profile" &&
            <div className="widgetContainer">
                <div className="widget flex">
                    <div className="w6">
                        <h3 className="subHeading">Account Details</h3>
                        <br />
                        <div>
                            <p>Name</p>
                            <p>{user.firstName} {user.lastName}</p>
                        </div>
                        <br />
                        <div>
                            <p>Email Address</p>
                            <p>{user.email}</p>
                        </div>
                        <br />
                        <div>
                            <p>Username</p>
                            <p>{user.username}</p>
                        </div>
                    </div>
                    <div className="w6">
                        <h3 className="subHeading">Client API Key</h3>
                        <br />
                        <p>API Key Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum
                        </p>
                        <br />
                        <p className="orangeBorderBox">{user.clientApiKey}</p>
                    </div>
                </div>

                <div className="widget">
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
                    <div>
                        <div className="orangeBorderBox flex">
                            <p className="secondaryCTA">Add a Domain +</p>
                            <NewDomainForm />
                        </div>
                        <ul className="flex">
                        {user.domains && user.domains.map(domain => {
                            return (
                                <li key={domain} className={styles.domain}>{domain}</li>
                            )
                        }) 

                        }
                        </ul>
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