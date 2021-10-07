import React from  'react';
import styles from './PublicFooter.module.scss';
import { Link } from 'react-router-dom';

import Copyright from '../../Misc/Copyright';

const PublicFooter = props => {
    return (
        <div className={styles.publicFooterContainer}>
            <div className="container">
                <div className="flex gap-30">
                    <div className="fb4">
                        <h3 className="footerHeader">Navigation</h3>
                        <p className="footerLink"><Link to="/">Home</Link></p>
                        <p className="footerLink"><Link to="/sign-in">Sign In</Link></p>
                        <p className="footerLink"><Link to="/register">Register</Link></p>
                    </div>
                    <div className="fb4">
                        <h3 className="footerHeader">log-inspector</h3>
                        <p className="footerLink"><Link to="/documentation">Documentation</Link></p>
                        <p className="footerLink"><a href="https://www.npmjs.com/package/log-inspector" target="_blank">NPM Docs</a></p>
                        <p className="footerLink"><a href="https://yarnpkg.com/package/log-inspector" target="_blank">Yarn Docs</a></p>
                        <p className="footerLink"><a href="https://github.com/BEllis0/_logger" target="_blank">Github</a></p>
                    </div>
                    <div className="fb4">
                        <h3 className="footerHeader">Open Source</h3>
                        <p className="footerLink"><a href="https://github.com/BEllis0/log_inspector" target="_blank">Github</a></p>
                    </div>
                </div>
                <div className="flex flex-justify-center margin-tb-10">
                    <Copyright className="footerCredits margin-lr-20" />
                    <p className="footerCredits margin-lr-20"><a href="https://github.com/BEllis0" target="_blank">Developed by Brandon Ellis</a></p>
                </div>
            </div>
        </div>
    )
};

export default PublicFooter;