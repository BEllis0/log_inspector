import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { withRouter } from 'react-router';

// redux
import { connect } from 'react-redux'; // connect to store
import { closeMessage } from '../../../actions/snackbar.js';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarAlerts = (props) => {
    const { message, severity, closeMessage } = props;
  
    const open = Boolean(message);
    const setSeverity = Boolean(severity)

    const handleClose = (event, reason) => {
        closeMessage();
    };

    const customSuccessStyle = {
        backgroundColor: '#00798C',
        color: 'white'
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert style={severity === 'success' ? customSuccessStyle : {}} onClose={handleClose} severity={setSeverity ? severity : 'success'} sx={{ width: '100%' }}>
                {open ? message : ""}
            </Alert>
        </Snackbar>
    );
};

const mapStateToProps = state => ({
    message: state.snackbar.message,
    severity: state.snackbar.severity
});

const mapDispatchToProps = {
    closeMessage
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SnackbarAlerts));