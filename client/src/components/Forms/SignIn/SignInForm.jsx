import * as React from 'react';
import { withRouter } from 'react-router';

// redux
import { connect } from 'react-redux'; // connect to store
import { login, pollServer } from '../../../actions/login.js';
import { getProfile } from '../../../actions/users.js';
import { getMessagesByUser } from '../../../actions/messages.js';

// UI kit components
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

// components
import Copyright from '../../Misc/Copyright.jsx';

const SignInForm = props => {

    const { loggedIn, login, getProfile, getMessagesByUser, pollServer } = props;

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        login({
            email: email,
            password: password
        });
    };

    return (
        <Grid item xs={12} sm={8} md={5} elevation={6} square="true">
            <Box
            sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box
                onSubmit={handleSubmit}
                component="form" 
                noValidate 
                sx={{ mt: 1 }}
            >
                <TextField
                onChange={e => setEmail(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                />
                <TextField
                onChange={e => setPassword(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Sign In
                </Button>
                <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                    Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
            </Box>
            </Box>
        </Grid>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.login.loggedIn
});

const mapDispatchToProps = {
    login,
    getProfile,
    getMessagesByUser,
    pollServer
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInForm));