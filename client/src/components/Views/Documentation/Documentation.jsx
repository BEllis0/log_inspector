import React from 'react';
import { withRouter } from 'react-router';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './Documentation.module.scss';

// redux
import { connect } from 'react-redux'; // connect to store

import AuthNav from '../../Nav/AuthNav/AuthNav.jsx';
import PrimaryNav from '../../Nav/Primary/PrimaryNav.jsx';
import DenseTable from '../../Data Viz/DenseTable/DenseTable.jsx';

import Paper from '@mui/material/Paper';

const DocumentationView = props => {
    const { loggedIn } = props;


    const configHeader = [
        'Property',
        'Type',
        'Description'
    ];

    const configData = [
        {parameterName: 'SiteName', type: 'String', description: 'Required. The name of your application or site'},
        {parameterName: 'environment', type: 'String', description: 'Optional. Used to discern between environments such as development, staging and production'},
        {parameterName: 'Channel', type: 'String', description: 'Optional. Subgroup of pages or sections within your application'},
        {parameterName: 'apiEndpoint', type: 'String', description: 'Required if you are using the Log Inspector service. This is the endpoint that log messages are sent to, found in account settings. Can be used for integrating with your own application'},
        {parameterName: 'websocket', type: 'String', description: 'Optional. Provides a way to send log messages to a websocket server'},
        {parameterName: 'apiKey', type: 'String', description: 'Required if you are using the Log Inspector service. API key found in account settings'},
    ];

    return (
        <>
            {/* Conditional Nav */}
            {loggedIn === true 
                ? <AuthNav /> 
                : <PrimaryNav />
            }
            <div id={styles.viewBackground}>
                <div className="container flex gap-10">
                    <div className="fb4">
                        <h1 className="heading">Documentation</h1>
                        <h2>Configuring the log-inspector package</h2>
                        <br />
                        <div className="divider-thin"></div>

                        <div id={styles.documentationMenu}>

                            <Link to="/documentation#what"><h2>What is log-inspector</h2></Link>
                            <div className="divider-thin"></div>
                            
                            <Link to="/documentation#installation"><h2>Installation</h2></Link>
                            <div className="divider-thin"></div>

                            <Link to="/documentation#usage"><h2>Usage</h2></Link>
                            <div className="divider-thin"></div>

                            <Link to="/documentation#config"><h2>Config</h2></Link>
                            <div className="divider-thin"></div>

                            <Link to="/documentation#examples"><h2>Examples</h2></Link>
                            <div className="divider-thin"></div>
                        </div>
                    </div>
                    <div className="fb8" id={styles.documentationDisplay}>
                        <Paper>
                            <div className="container">
                                <h2 id="what">What is log-inspector</h2>
                                <br />
                                <p>A simple, light-weight logging tool that can be used to assist with debugging. 
                                    The tool can be coupled with the Log Inspector service (the site you're on) or used as a stand alone tool for debugging in the browser. 
                                    When it is used with Log Inspector, it sends the log messages that fire on your site to 
                                    your account, where they are used to build data visualizations and assist with debugging and project management.
                                    <br /> <br />
                                    When it is used as a stand alone tool, it can be enabled in the console to display your _logger messages and ensure 
                                    that they are not seen by users. For those familiar with Adobe Launch, 
                                    the functionality is similar to _satellite.logger.</p>
                            </div>
                        </Paper>
                        
                        <Paper>
                            <div className="container">
                                <h2 id="what">Installation</h2>
                                <br />
                                <div className="flex gap-10">
                                    <div className="fb6">
                                        <p>NPM</p>
                                        <br />
                                        <div className={styles.markdownBox}>
                                            <p>npm i log-inspector</p>
                                        </div>
                                    </div>

                                    <div className="fb6">
                                        <p>Yarn</p>
                                        <br />
                                        <div className={styles.markdownBox}>
                                            <p>yarn add log-inspector</p>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <p>CDN</p>
                                <div className={styles.markdownBox}>
                                    <p>&lt;script src="https://unpkg.com/log-inspector"&gt;&lt;/script&gt;</p>
                                </div>
                                <br />
                                <p>or for a specific version:</p>
                                <div className={styles.markdownBox}>
                                    <p>&lt;script src="https://unpkg.com/log-inspector@VERSION/index.js"&gt;&lt;/script&gt;</p>
                                </div>
                            </div>
                        </Paper>

                        <Paper>
                            <div className="container">
                                <h2 id="config">Config</h2>
                                <br />
                                <p>A config function can be added to provide extended data to Log Inspector.</p>
                                <br />
                                <p>Function name: _logger.config{`{PROPERTIES}`}</p>
                                <br />
                                <p>Properties:</p>
                                <br />
                                <DenseTable tableHeader={configHeader} tableData={configData} />
                                <br />
                                <p>Example:</p>
                                <div className={styles.markdownBox}>
                                    <p>
                                        {`_logger.config({`} <br />
                                        &emsp;siteName: "Test Site Name", <br />
                                        &emsp;environment: "staging", <br />
                                        &emsp;channel: "enterprise", <br />
                                        &emsp;apiEndpoint: "/api/v1/endpoint", <br />
                                        &emsp;websocket: "wss://www.example.com/socketserver", <br />
                                        &emsp;apiKey: "12345" // necessary if connecting to _logger server <br />
                                        {`});`}
                                    </p>
                                </div>
                            </div>
                        </Paper>

                        <Paper>
                            <div className="container">
                                <h2 id="usage">Usage</h2>
                                <br />
                                <p>Object: window._logger</p>
                                <br />
                                <p>_logger is based on Javascript’s logging methods and 
                                    performs the exact same way.
                                    <br />
                                    <br />
                                    There are four types of logger methods you can use to send messages 
                                    that you can output to the console. This allows you to tailor the type 
                                    of log to the content of the message.
                                </p>
                                <br />
                                <div className={styles.markdownBox}>
                                    <p>
                                        - _logger.log(ARGS)
                                        <br />
                                        - _logger.info(ARGS)
                                        <br />
                                        - _logger.warn(ARGS)
                                        <br />
                                        - _logger.error(ARGS)
                                    </p>
                                </div>
                                <br />
                                <p>Enable the logger in the browser console with the following:</p>
                                <div className={styles.markdownBox}>
                                    <p>_logger.setDebug(true)</p>
                                </div>
                                <br />
                                <p>Disable the logger by setting:</p>
                                <div className={styles.markdownBox}>
                                    <p>_logger.setDebug(false)</p>
                                </div>
                            </div>
                        </Paper>

                        <Paper>
                            <div className="container">
                                <h2 id="examples">Examples</h2>
                                <br />
                                <p>
                                    Custom logs are a great place to log errors you identify from try/catch
                                     functions in custom code. Here is an example of wrapping custom code in 
                                     try/catch blocks and using the logger in conjunction to make sure any 
                                     errors identified don’t clog up the console for other users.
                                </p>
                                <div className={styles.markdownBox}>
                                    <p>
                                        {`try {`} <br />
                                        &emsp;return a + b; <br />
                                        {`} catch(err) {`} <br />
                                        &emsp;_logger.error('Error: ', err); <br />
                                        {`}`}
                                    </p>
                                </div>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>

        </>
    )
};

const mapStateToProps = state => ({
    loggedIn: state.login.loggedIn
});

export default withRouter(connect(mapStateToProps, null)(DocumentationView));