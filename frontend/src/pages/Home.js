import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/ServiceCard';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import '@fontsource/roboto';
import { Link } from 'react-router-dom';

import Banner from '../assets/banner.png';
import CardIMG1 from '../assets/card-img-1.png';
import CardIMG2 from '../assets/card-img-2.png';
import CardIMG3 from '../assets/card-img-3.png';
import CardIMG4 from '../assets/card-img-4.png';
import CardIMG5 from '../assets/card-img-5.png';
import CardIMG6 from '../assets/card-img-6.png';
import CardIMG7 from '../assets/card-img-7.png';
// import CardIMG8 from '../assets/card-img-8.png';
// import CardIMG9 from '../assets/card-img-9.png';
// import CardIMG10 from '../assets/card-img-10.png';
// import CardIMG11 from '../assets/card-img-11.png';

import {
  content1, content2, content3, content4, content5, content6, content7,
  // solutionscontent1, solutionscontent2, solutionscontent3, solutionscontent4
} from '../Content/card_contents';

const Home = () => {
  const jobSupportCards = [
    { image: CardIMG1, title: 'Data Storage', content: content1, link: '/datastorage'},
    { image: CardIMG2, title: 'Data Processing & ETL', content: content2, link: '/dataprocessing' },
    { image: CardIMG3, title: 'Data Analysis & Exploration', content: content3, link: '/dataanalysis' },
    { image: CardIMG4, title: 'ML & Model Development', content: content4, link: '/machinelearning' },
    { image: CardIMG5, title: 'Model Monitoring & Maintenance', content: content5, link: '/modelmonitoring' },
    { image: CardIMG6, title: 'MLOps', content: content6, link: '/mlops' },
    { image: CardIMG7, title: 'Continous Learning & Improvement', content: content7, link: '/cicd' }
  ];

  // const solutionCards = [
  //   { image: CardIMG8, title: 'UI/UX & Frontend Design', content: solutionscontent1, link: '/comingsoon' },
  //   { image: CardIMG9, title: 'ML & Operations', content: solutionscontent2, link: '/comingsoon' },
  //   { image: CardIMG10, title: 'Object Detection', content: solutionscontent3, link: '/comingsoon' },
  //   { image: CardIMG11, title: 'Workforce Optimization', content: solutionscontent4, link: '/comingsoon' }
  // ];

  const renderCards = (cards) => (
    cards.map((card, index) => (
      <Grid
        key={index}
        item
        xs={12}
        sm={6}
        md={5}
        lg={4}
        xl={2.8}
        display="flex"
        justifyContent="center"
      >
        <Card image={card.image} title={card.title} content={card.content} link={card.link}/>
      </Grid>
    ))
  );

  return (
    <div>
      <Navbar />
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        <Box
          component="img"
          src={Banner}
          alt="banner image"
          sx={{
            width: '100%',
            height: '100vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            objectFit: 'cover'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '0rem',
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            textAlign: 'left',
            paddingLeft: '3.802vw',
          }}
        >
          <Box>
            <Typography component="div" sx={{ fontFamily: 'Roboto', fontSize: { lg: '20px', md: '18px', sm: '18px', xs: '16px' }, textAlign: { lg: 'left', md: 'left', sm: 'left', xs: 'center' }, px: { lg: 0, md: '0', sm: '0', xs: '10px' } }}>
              We offers cost-effective job support services with expert developers to <br /> make your job easy and your professional journey smoother.
            </Typography>
            <Typography component="div" sx={{ fontFamily: 'Roboto', fontSize: { lg: '20px', md: '18px', sm: '18px', xs: '16px' }, marginTop: '10px', fontWeight: 'regular', textAlign: { lg: 'left', md: 'left', sm: 'left', xs: 'center' } }}>
              Make Your Work Effortless and Your Results Exceptional with <br /> SkyBluLabs!
            </Typography>
          </Box>
          <Typography component="div" sx={{ fontFamily: 'Roboto', fontSize: { lg: '46px', md: '40px', sm: '40px', xs: '30px' }, marginTop: '5px', fontWeight: 'regular', textAlign: { lg: 'left', md: 'left', sm: 'left', xs: 'center' } }}>
            Accelerate your career <br /> today with <Box component="span" sx={{ color: '#B8CBFF', fontWeight: 'bold' }}>SkyBluLabs</Box>.
          </Typography>
          <Box sx={{ marginTop: { lg: '48px', md: '48px', sm: '48px', xs: '35px' }, textAlign: { lg: 'left', md: 'left', sm: 'left', xs: 'center' } }}>
            <Link to="/contactus" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{ borderRadius: '20px', px: { lg: '26px', md: '24px', sm: '24px', xs: '20px' }, py: { lg: '10px', md: '10px', sm: '10px', xs: '8px' }, fontFamily: 'Roboto', textTransform: 'capitalize', fontSize: { lg: '18px', md: '18px', sm: '18px', xs: '16px' } }}>Get Started</Button>
            </Link>
          </Box>
        </Box>
      </Container>
      <Container disableGutters maxWidth={false}>
        <Box component='div' sx={{ display: 'flex', justifyContent: 'center', marginTop: '64px', marginBottom: '48px' }} id='jobsupport'>
          <Typography component="div" sx={{ fontFamily: 'Roboto', fontSize: { lg: '36px', md: '36px', sm: '36px', xs: '25px' }, fontWeight: 'bold', color: '#5C5C5C' }}>
            Job Support <Box component="span" sx={{ color: '#396EFF', fontWeight: 'bold' }}>Services</Box>
          </Typography>
        </Box>
      </Container>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container rowSpacing='44px' justifyContent="center">
          {renderCards(jobSupportCards)}
        </Grid>
      </Box>
      {/* <Container disableGutters maxWidth={false}>
        <Box component='div' sx={{ display: 'flex', justifyContent: 'center', marginTop: '64px', marginBottom: '48px' }} id='solutions'>
          <Typography component="div" sx={{ fontFamily: 'Roboto', fontSize: { lg: '36px', md: '36px', sm: '36px', xs: '25px' }, fontWeight: 'bold', color: '#5C5C5C' }}>
            Our <Box component="span" sx={{ color: '#396EFF', fontWeight: 'bold' }}>Solutions</Box>
          </Typography>
        </Box>
      </Container>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container rowSpacing='44px' columnSpacing={{ lg: '1px', md: '0.1px' }} justifyContent="center">
          {renderCards(solutionCards)}
        </Grid>
      </Box> */}
      <Footer />
    </div>
  );
};

export default Home;
