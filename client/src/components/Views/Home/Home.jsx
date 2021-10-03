import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

import debuggingImg from '../../../assets/debugging.jpg';
import dataVizImg from '../../../assets/data-viz.jpg';
import openSourceImg from '../../../assets/open_source.jpg';

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

            {/* What is Log Inspector Blade */}
            <div className={styles.bladeWhatIsIt} id="bladeWhatIsIt">
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

            {/* Features Blade */}
            <div className={styles.bladeFeatures} id="bladeFeatures">
                <div className="container">
                    <div className="bladeHeader">
                        <h1 className="heading">Key Features</h1>
                    </div>
                    <div className="flex col3-container">
                        <div className="fb4">
                            <img src={dataVizImg} className={styles.blurbImg} />
                            <h2>Realtime Data</h2>
                            <p>
                                Data visualizations updated in realtime. Monitor issues accross your application from a high level
                                and get notified when problems occur.
                            </p>
                        </div>
                        <div className="fb4">
                            <img src={openSourceImg} className={styles.blurbImg} />
                            <h2>Easy Integration</h2>
                            <p>
                                Once you have an account, install the log-inspector package dependency on your application 
                                and configure the settings with the API key found on your profile.
                            </p>
                        </div>
                        <div className="fb4">
                            <img src={debuggingImg} className={styles.blurbImg} />
                            <h2>Debugging Support</h2>
                            <p>
                                Know when and where problems are occuring on your application. 
                                Provides your developers the insights and tooling they need to debug issues quickly.
                            </p>
                        </div>
                    </div>
                </div>
                <br />
            </div>

            {/* How it works blade */}
            <div className={styles.bladeHowItWorks} id="bladeHowItWorks">
                <div className="container">
                    <div className="bladeHeader">
                        <h1 className="heading">How it works</h1>
                    </div>
                    <div>
                        <p>Log Inspector relies on the use of a light-weight package dependency called &nbsp;
                            <span className="strong ">log-inspector</span> to send data in realtime to your Log Inspector account.
                            Once the package integration is complete and logs are flowing into your account,
                            Log Inspector provides a variety of data visualizations, options for notifications, 
                            and the ability to build projects and assign tasks.
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
                            <p>Using NPM or Yarn, add the package dependency&nbsp; 
                                <a href="https://www.npmjs.com/package/log-inspector" target="_blank" className="strong linkOrange">log-inspector</a>
                                &nbsp;to your application.
                                <br />
                                <br />
                                Configure the package settings with the API key and API endpoint found on your profile settings. 
                                Click the button below to see the full documentation for configuration.
                            </p>
                            <br />
                            <p>
                                *Note: The Log Inspector package can be used without creating a Log Inspector account.
                                It can be used as a simple browser debugging tool, or even integrated into your own log tracking
                                system.
                            </p>
                            <br />
                            <div className="primaryCTA">Documentation</div>
                            <br />
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

export default withRouter(connect(mapStateToProps, null)(Home));