import { Alert, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const {user, registerUser, isLoading, authError } = useAuth();
    

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        // console.log(field, value, newLoginData);
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password did not match!');
            return
        }
        registerUser(loginData.email, loginData.password);
        e.preventDeFault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                   {!isLoading && <form onSubmit={handleLoginSubmit}>
                   <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name='name'
                            onChange={handleOnChange}
                            variant="standard" />
                        <br></br>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type='email'
                            label="Your Email"
                            name='email'
                            onChange={handleOnChange}
                            variant="standard" />
                        <br></br>
                       
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type='password'
                            label="Your Password"
                            name='password'
                            onChange={handleOnChange}
                            variant="standard" />
                        <br></br>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type='password'
                            label="Retype Your Password"
                            name='password2'
                            onChange={handleOnChange}
                            variant="standard" />
                        <br></br>
                        <Button type='submit' sx={{ width: '75%', m: 1 }} variant="contained">Register</Button>
                        {/* <NavLink style={{textDecoration:'none'}} to='/register'><Button variant="text">New User? Please Register</Button></NavLink> */}
                        <a style={{ textDecoration: 'none' }} href='/login'><Button variant="text">Already Register? Please Login</Button></a>
                    </form>}
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">Create user successfully!</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;