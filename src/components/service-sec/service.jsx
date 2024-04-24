import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Fade } from 'react-reveal';

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const ServiceBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  border: '1px solid #e0e0e0',
  borderRadius: theme.spacing(2),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

function Service() {
  return (
    <Box id="service" py={8} bgcolor="#f7f7f7">
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Fade bottom>
            <ServiceBox>
              <LocalShippingIcon color="primary" fontSize="large" />
              <Typography variant="h6" mt={2}>Furniture Delivery</Typography>
              <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            </ServiceBox>
          </Fade>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Fade bottom delay={200}>
            <ServiceBox>
              <CheckCircleIcon color="primary" fontSize="large" />
              <Typography variant="h6" mt={2}>Quality products</Typography>
              <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            </ServiceBox>
          </Fade>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Fade bottom delay={400}>
            <ServiceBox>
              <SupportAgentIcon color="primary" fontSize="large" />
              <Typography variant="h6" mt={2}>24/7 Support</Typography>
              <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            </ServiceBox>
          </Fade>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Service;
