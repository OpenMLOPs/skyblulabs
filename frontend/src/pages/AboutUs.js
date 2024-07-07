import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Banner from '../assets/about-us-banner.png';
import Card from '../components/AboutCard';

import CardIMG1 from '../assets/about-card-img-1.png'
import CardIMG2 from '../assets/about-card-img-2.png'
import CardIMG3 from '../assets/about-card-img-3.png'
import CardIMG4 from '../assets/about-card-img-4.png'

const aboutCards = [{
  image: CardIMG1,
  title: 'Expertise',
  content: 'Our team comprises seasoned professionals proficient in AI, ML, and business consulting, ensuring top-notch service delivery.'
},
{
  image: CardIMG2,
  title: 'Innovation',
  content: "We're committed to staying ahead of the curve, constantly exploring new technologies and methodologies to deliver innovative solutions."
},
{
  image: CardIMG3,
  title: 'Client-Centric Approach',
  content: 'Building long-term relationships with clients is our priority, focusing on trust, transparency, and tailored solutions to exceed expectations.'
},
{
  image: CardIMG4,
  title: 'Results-Driven',
  content: 'We measure our success by the success of our clients, delivering tangible, measurable results to drive business performance.'
}
];

const AboutUs = () => {

  const renderCards = (cards) => (
    cards.map((card, index) => (
      <Grid item
        lg={6}
        key={index}
        display="flex"
        justifyContent="center">
        <Card key={index} image={card.image} title={card.title} content={card.content} />
      </Grid>
    ))
  );

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
            height: { lg: '500px', md: '450px', sm: '400px', xs: '430px' },
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
            height: { lg: '500px', md: '450px', sm: '400px', xs: '430px' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white',
            backgroundColor: 'rgba(10, 28, 50, 0.7)',
            textAlign: 'center',
          }}
        >
          <Typography component="div" sx={{ fontFamily: 'Roboto', fontSize: { lg: '48px', md: '46px', sm: '36px', xs: '25px' }, marginTop: '5px', fontWeight: 'bold' }}>
            About <Box component="span" sx={{ color: '#B8CBFF', fontWeight: 'bold' }}>Us</Box>
          </Typography>
          <Box>
            <Typography component="div" sx={{ fontFamily: 'Roboto', fontSize: { lg: '20px', md: '18px', sm: '14px', xs: '12px' } }}>
              SkyBluLabs is a startup specializing in business optimization, and AI/ML solutions. Our mission is <br /> to empower individuals and businesses alike with cutting-edge technologies and expert guidance.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Container disableGutters maxWidth={false}>
        <Box component='div' sx={{ display: 'flex', justifyContent: 'center', marginTop: '52px', marginBottom: '32px' }}>
          <Typography component="div" sx={{ fontFamily: 'Roboto', fontSize: { lg: '36px', md: '36px', sm: '36px', xs: '25px' }, fontWeight: 'bold', color: '#5C5C5C' }}>
            What Set Us Apart
          </Typography>
        </Box>
      </Container>
      <Container disableGutters maxWidth={false}>
        <Grid container rowSpacing='40px' justifyContent="center" columnSpacing={{ md: '34px', lg: '0px' }}>
          {renderCards(aboutCards)}
        </Grid>
      </Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '64px' }}>
        <Divider sx={{ borderColor: '#5C5C5C', width: { lg: '80%', md: '85%', sm: '85%', xs: '85%' }, opacity: '20%' }} />
      </Box>
      <Container disableGutters maxWidth={false}>
        <Box component='div' sx={{ display: 'flex', justifyContent: 'center', marginTop: '24px', marginBottom: '52px', textAlign: 'center', padding: '10px' }}>
          <Typography component="div" sx={{ fontFamily: 'Roboto', fontSize: { lg: '24px', md: '24px', sm: '22px', xs: '22px' }, fontWeight: 'regular', color: '#396EFF' }}>
            At <Box component="span" sx={{ color: '#396EFF', fontWeight: 'bold' }}>SkyBluLabs</Box>, we're not just service providers; we're< br/>partners in your journey to success. Let's unlock your< br/>potential together.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </div>
  )
}

export default AboutUs