import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Form from '../components/ContactUsForm';
import Banner from '../assets/contact-us-banner.png';

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <CssBaseline />
      <Container disableGutters maxWidth={false} sx={{ marginTop: '5rem', padding: 0 }}>
        <Box
          component="img"
          src={Banner}
          alt="banner image"
          sx={{
            width: '100%',
            height: { lg: '450px', md: '450px', sm: '350px', xs: '280px' },
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            objectFit: 'cover'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '5rem',
            left: 0,
            width: '100%',
            height: { lg: '450px', md: '450px', sm: '350px', xs: '280px' },
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white',
            backgroundColor: 'rgba(10, 28, 50, 0.6)',
            textAlign: 'center',
          }}
        >
          <Typography component="div" sx={{ fontFamily: 'Roboto', fontSize: { lg: '48px', md: '46px', sm: '36px', xs: '25px' }, marginTop: { lg: '100px', md: '100px', sm: '80px', xs: '70px' }, fontWeight: 'bold' }}>
            Get in <Box component="span" sx={{ color: '#B8CBFF', fontWeight: 'bold' }}>Touch</Box>
          </Typography>
          <Box>
            <Typography component="div" sx={{ fontFamily: 'Roboto', fontSize: { lg: '20px', md: '18px', sm: '14px', xs: '12px' } }}>
              Reach out to us, and let us help you to make your job easy!
            </Typography>
          </Box>
        </Box>
      </Container>
      <Container disableGutters sx={{ height: { lg: '35rem', md: '35rem', sm: '37rem', xs: '44rem' } }}>
        <Box sx={{ width: '80vw', height: { lg: '46rem', md: '46rem', sm: '44rem', xs: '52rem' }, backgroundColor: '#F1F5FF', position: 'absolute', top: { lg: '350px', md: '350px', sm: '300px', xs: '250px' }, left: '0px', right: '0px', marginLeft: 'auto', marginRight: 'auto', borderRadius: '12px', boxShadow: 3, display: 'flex', flexDirection: 'column' }}>
          <Container maxWidth={false} sx={{ width: '70vw' }}>
            <Box sx={{ marginTop: '5vh', marginBottom: '4vh' }}>
              <Typography gutterBottom sx={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: { lg: '30px', md: '30px', sm: '28px', xs: '20px' }, color: '#5C5C5C' }}>
                Let’s connect
              </Typography>
              <Typography gutterBottom sx={{ fontFamily: 'Roboto', fontWeight: 'regular', fontSize: { lg: '20px', md: '20px', sm: '16px', xs: '12px' }, color: '#5C5C5C' }}>
                Let's collaborate to unlock new opportunities and elevate your professional path together.
              </Typography>
            </Box>
            <Form />
          </Container>
        </Box>
      </Container>
      <Footer />
    </div>
  )
}

export default ContactUs