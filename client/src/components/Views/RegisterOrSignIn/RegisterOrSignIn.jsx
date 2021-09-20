import React from 'react';
import { withRouter } from 'react-router';
// redux
import { connect } from 'react-redux'; // connect to store

import PrimaryNav from '../../Nav/Primary/PrimaryNav.jsx';
import RegisterForm from '../../Forms/Register/RegisterForm.jsx';
import SignInForm from '../../Forms/SignIn/SignInForm.jsx';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const RegisterOrSignIn = (props) => {
    return (
        <ThemeProvider theme={theme}>

            <PrimaryNav />

            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                />


                {/* Determine which form to display */}

                {props.location.pathname === "/register" &&
                    <RegisterForm />
                }
                
                {props.location.pathname === "/sign-in" &&
                    <SignInForm />
                }
      
            </Grid>
        </ThemeProvider>
    );
};

const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = {
    // loginCheck,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterOrSignIn));