import React from 'react';
import { withRouter, BrowserHistory } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

import debuggingImg from '../../../assets/debugging.jpg';
import openSourceImg from '../../../assets/open_source.jpg';
import realtimeImg from '../../../assets/realtime.jpg';

// redux
import { connect } from 'react-redux'; // connect to store

// components
import PrimaryNav from '../../Nav/Primary/PrimaryNav.jsx';
import AuthNav from '../../Nav/AuthNav/AuthNav.jsx';
import SnackbarAlerts from '../../Misc/Snackbar/Snackbar.jsx';
import HomeHero from '../../Heros/Home/HomeHero.jsx';
import PublicFooter from '../../Nav/PublicFooter/PublicFooter.jsx';


const Home = props => {

    const { loggedIn } = props;

    return (
        <>
            {/* Conditional Nav */}
            {loggedIn === true 
                ? <AuthNav /> 
                : <PrimaryNav />
            }

            {/* Hero Section */}
            <HomeHero />

            {/* Blade 1 */}
            <div id={styles.bladeOne}>
                <div className="container">
                    <div className="bladeHeader tac">
                        <h1 className="heading">What is Log Inspector?</h1>
                    </div>
                    <div className="tac">
                        <p>Log Inspector provides a way to collect log messages and a place to monitor them.
                            <br />
                            It makes tracking errors easy and speeds up the debugging process for developers. 
                        </p>
                        <br />
                    </div>
                </div>
            </div>

            {/* Blade 2 */}
            <div id={styles.bladeTwo}>
                <div className="container">
                    <div className="bladeHeader">
                        <h1 className="heading">How it works</h1>
                    </div>
                    <div>
                        <p>Log Inspector relies on the use of a light-weight package dependency called &nbsp;
                            <span className="strong ">log-inspector</span> to send data in realtime to your Log Inspector account.
                        </p>
                        <br />
                    </div>
                    <div className="flex col2-container">
                        <div className="fb6">
                            <h2>Step 1</h2>
                            <h3>Register and whitelist domains</h3>
                            <br />
                            <p>
                                <Link to="/register" className="linkOrange">Click here</Link> to create your free account.
                                <br />
                                <br />
                                <Link to="/sign-in" className="linkOrange">Sign in</Link> and navigate to your profile settings.
                                <br />
                                <br />
                                Add your domain(s) to the whitelist. This will allow the data to flow into your account.
                            </p>

                        </div>
                        <div className="fb6">
                            <h2>Step 2</h2>
                            <h3>NPM / Yarn Package Integration</h3>
                            <br />
                            <p>A simple logging tool that can be used for debugging in the browser. 
                                Enabled in the console to display your _logger messages and ensure 
                                that they are not seen by users.
                            </p>
                            <br />
                            <p>
                                *Note: The Log Inspector package can be used without creating a Log Inspector account.
                                It can be used as a simple browser debugging tool, or even integrated into your own log tracking
                                system.
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="primaryCTA">Documentation</div>
                </div>
            </div>

            {/* Blade 3 */}
            <div id={styles.bladeThree}>
                <div className="container">
                    <div className="bladeHeader">
                        <h1 className="heading">Key Features</h1>
                    </div>
                    <div className="flex col3-container">
                        <div className="fb4">
                            <img src={openSourceImg} className={styles.blurbImg} />
                            <h2>Open Source</h2>
                            <p>A simple logging tool that can be used for debugging in the browser. 
                                Enabled in the console to display your _logger messages and ensure 
                                that they are not seen by users.
                            </p>
                        </div>
                        <div className="fb4">
                            <img src={debuggingImg} className={styles.blurbImg} />
                            <h2>Debugging</h2>
                            <p>A simple logging tool that can be used for debugging in the browser. 
                                Enabled in the console to display your _logger messages and ensure 
                                that they are not seen by users.
                            </p>
                        </div>
                        <div className="fb4">
                            <img src={realtimeImg} className={styles.blurbImg} />
                            <h2>Realtime</h2>
                            <p>A simple logging tool that can be used for debugging in the browser. 
                                Enabled in the console to display your _logger messages and ensure 
                                that they are not seen by users.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <PublicFooter  />

            <SnackbarAlerts />
        </>
    )
};

const mapStateToProps = state => ({
    loggedIn: state.login.loggedIn
});

const mapDispatchToProps = {
    // loginCheck,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));