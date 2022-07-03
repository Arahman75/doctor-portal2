import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';


const services =[
    {
      name: 'Fluoride Treatment',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia officiis illum provident minima tempora laborum necessitatibus libero ab tempore consequuntur? Quia, ea! Doloribus excepturi ad nemo esse blanditiis iusto eum.',
      img: fluoride
    },
    {
      name: 'Cavity Filling',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia officiis illum provident minima tempora laborum necessitatibus libero ab tempore consequuntur? Quia, ea! Doloribus excepturi ad nemo esse blanditiis iusto eum.',
      img: cavity
    },
    {
      name: 'Teeth Whitening',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia officiis illum provident minima tempora laborum necessitatibus libero ab tempore consequuntur? Quia, ea! Doloribus excepturi ad nemo esse blanditiis iusto eum.',
      img: whitening
    }
  ]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
       <Container>
        <Typography sx={{fontWeight: 500,   color: 'info.main', m: 2}} variant='h6' component='div'>
            OUR SERVICES
        </Typography>
        <Typography sx={{fontWeight: 600, m: 5}} variant='h4' component='div'>
            Service We Provide
        </Typography>
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            services.map(service => <Service
            key={service.name}
            service={service}
            ></Service>)
        }
        </Grid>
       </Container>
      </Box>
    );
};

export default Services;