import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment.png';
import { Button, Typography } from '@mui/material';


const appointmentBanner ={
    background: `url(${bg})`,
    marginTop: '175px'
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
        <img 
        style={{width:'400px', marginTop:'-110px'}}
        src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6}  sx={{
          display:'flex',
            justifyContent: 'flex-start',
           textAlign: 'left',
           alignItems: 'center'
            }}> 
       
         <Box>
         <Typography variant='h6' sx={{mb:4}} style={{color:'#52F4F2'}}>
            Appointment
          </Typography>
          <Typography variant='h4' style={{color:'white'}}>
            Make an appointment Today
          </Typography>
          <Typography variant='h6' sx={{my:3}} style={{color:'white',fontSize:'14px', fontWeight:'300'}}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nostrum corrupti mollitia quae adipisci repellat quia ut commodi dignissimos! Quo.
          </Typography>
          <Button variant="contained" style={{backgroundColor:'#52F4F2'}}>Learn More</Button>
         </Box>
          </Grid>
          
        </Grid>
      </Box>
    );
};

export default AppointmentBanner;