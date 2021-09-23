import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

// redux
import { connect } from 'react-redux'; // connect to store

const ProfileTabs = (props) => {
    return (
        <>
            <ul className="tabsList flex container">
                <Link to="/account/profile"><li className="tabItem highlight">Profile</li></Link>
                {/* <Link to="/account/groups"><li className="tabItem">Groups</li></Link>
                <Link to="/account/domain-whitelist"><li className="tabItem">Domain Whitelist</li></Link> */}
            </ul>
            <div className="divider-100"></div>
        </>
    )
};

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = {

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileTabs));