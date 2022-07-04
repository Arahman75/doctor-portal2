import { Button, Grid, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date}) => {
    const { id, name, time, space } = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

    return (

       <>
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ py: 5 }}>
                <Typography variant="h5" sx={{ color: 'info.main', fontWeight: '600' }} gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {space} Spaces Available
                </Typography>
                <Button onClick={handleBookingOpen} variant="contained" >Book Appointment</Button>
            </Paper>
        </Grid>
<BookingModal
date={date}
booking={booking}
openBooking={openBooking}
handleBookingClose={handleBookingClose}
>
</BookingModal>
       </>
    );
};

export default Booking;