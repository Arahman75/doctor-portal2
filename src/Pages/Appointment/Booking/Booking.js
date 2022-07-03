import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const Booking = ({booking}) => {
    const {id, name, time, space} = booking;
    return (
        
            <Grid item xs={12} sm={6} md={4}>
   <h2>{name}</h2>
    </Grid>
       
    );
};

export default Booking;