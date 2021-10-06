import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './ErrorBoundary.module.scss';

// redux
import { connect } from 'react-redux'; // connect to store

import AuthNav from '../../Nav/AuthNav/AuthNav.jsx';
import PrimaryNav from '../../Nav/Primary/PrimaryNav.jsx';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        hasError: false,
        error: null
      };
    }
  
    static getDerivedStateFromError(err) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true, error: err };
    }
  
    render() {
      const { loggedIn } = this.props;
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
            <>
            {/* Conditional Nav */}
            {loggedIn === true 
                ? <AuthNav /> 
                : <PrimaryNav />
            }
            <div id={styles.viewBackground}>
                <h1>Something went wrong.</h1>
                <br />
                <div className="primaryCTA"><Link to="/">Return Home</Link></div>
            </div>

        </>
            
        )
      }
  
      return this.props.children; 
    }
};

const mapStateToProps = state => ({
    loggedIn: state.login.loggedIn
});

export default withRouter(connect(mapStateToProps, null)(ErrorBoundary));