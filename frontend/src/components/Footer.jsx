import React from 'react';
import { Box, Container, Grid, Typography, Link, Divider } from '@mui/material';
import { Facebook, LinkedIn, WhatsApp } from '@mui/icons-material';
import { HashLink } from 'react-router-hash-link';

import logo from '../assets/logo.png';

const jobSupportLinks = [
  { text: 'Data Storage', url: '/datastorage' },
  { text: 'ETL', url: '/dataprocessing' },
  { text: 'Data Analysis', url: '/dataanalysis' },
  { text: 'Machine Learning', url: '/machinelearning' },
  { text: 'Model Management', url: '/modelmonitoring' },
  { text: 'CI/CD', url: '/cicd' },
  { text: 'MLOps', url: '/mlops' },
];

// const solutionsLinks = [
//   { text: 'UI/UX', url: '/comingsoon' },
//   { text: 'ML & Ops', url: '/comingsoon' },
//   { text: 'Object Detection', url: '/comingsoon' },
//   { text: 'Workforce Optimization', url: '/comingsoon' },
// ];

const socialLinks = [
  { icon: <Facebook />, url: 'https://www.facebook.com/profile.php?id=61561144756450' },
  { icon: <LinkedIn />, url: 'https://www.linkedin.com/company/skyblulabs-llp' },
  // { icon: <WhatsApp />, url: '#' },
];

const splitArrayIntoChunks = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const Footer = () => {
  const jobSupportChunks = splitArrayIntoChunks(jobSupportLinks, 4);
  // const SolutionsChunks = splitArrayIntoChunks(solutionsLinks, 2);

  return (
    <Box sx={{ width: '100%', bgcolor: '#384C63', color: 'white', mt: 8, py: 4 }}>
      <Container maxWidth='100%'>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} container direction="column" alignItems={{ xs: 'center', md: 'center' }} paddingX={{ xs: 2, md: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ paddingLeft: { md: '1.5rem', xs: '1rem' } }}>
              <img src={logo} alt="SkyBluLabs Logo" style={{ width: '150px', maxWidth: '100%' }} />
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'center' }, mb: 2, paddingLeft: { md: '1.5rem', xs: '1rem' } }}>
              {socialLinks.map((link, index) => (
                <Link
                  href={link.url}
                  color="inherit"
                  key={index}
                  sx={{ ml: index > 0 ? 1 : 0, textDecoration: 'none' }}
                >
                  {link.icon}
                </Link>
              ))}
            </Box>
            <Typography variant="body2" sx={{
              fontFamily: 'Roboto',
              fontWeight: 'regular',
              fontSize: 14,
              textAlign: { xs: 'center', md: 'left' },
              paddingLeft: { md: '1.5rem', xs: '1.5rem' }
            }}>
              Accelerate your career with SkyBluLabs
            </Typography>
          </Grid>
          <Grid item xs={12} md={8} container spacing={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item xs={12} sm={3} container direction="column" alignItems={{ xs: 'center', sm: 'center' }}>
              <HashLink to='/#jobsupport' style={{ textDecoration: 'none' }}>
                <Typography variant="h6" sx={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 18, mb: 1.5, cursor: 'pointer', color: 'white' }}>
                  Job Support
                </Typography>
              </HashLink>
              <Grid container spacing={2}>
                {jobSupportChunks.map((chunk, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    {chunk.map((link, linkIndex) => (
                      <Typography
                        variant="body2"
                        key={linkIndex}
                        sx={{
                          fontFamily: 'Roboto',
                          fontWeight: 'regular',
                          fontSize: 14,
                          mb: 0.5,
                          textAlign: { xs: 'center', sm: 'left' }
                        }}
                      >
                        <Link href={link.url} color="inherit" sx={{ textDecoration: 'none' }}>
                          {link.text}
                        </Link>
                      </Typography>
                    ))}
                  </Grid>
                ))}
              </Grid>
              {/* {jobSupportLinks.map((link, index) => (
                <Typography
                  variant="body2"
                  key={index}
                  sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 'regular',
                    fontSize: 14,
                    mb: 0.5,
                    textAlign: { xs: 'center', sm: 'left' }
                  }}
                >
                  <Link href={link.url} color="inherit" sx={{ textDecoration: 'none' }}>
                    {link.text}
                  </Link>
                </Typography>
              ))} */}
            </Grid>
            {/* <Grid item xs={12} sm={4} container direction="column" alignItems={{ xs: 'center', sm: 'flex-start' }}>
              <HashLink to='/#solutions' style={{ textDecoration: 'none' }}>
                <Typography variant="h6" sx={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 18, mb: 1.5, cursor: 'pointer', color: 'white' }}>
                  Solutions
                </Typography>
              </HashLink>
              {solutionsLinks.map((link, index) => (
                <Typography
                  variant="body2"
                  key={index}
                  sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 'regular',
                    fontSize: 14,
                    mb: 0.5,
                    textAlign: { xs: 'center', sm: 'left' }
                  }}
                >
                  <Link href={link.url} color="inherit" sx={{ textDecoration: 'none' }}>
                    {link.text}
                  </Link>
                </Typography>
              ))}
            </Grid> */}
            <Grid item xs={12} sm={3} container direction="column">
              <HashLink to='/aboutus' style={{ textDecoration: 'none' }} >
                <Typography variant="h6" sx={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 18, mb: 1.5, cursor: 'pointer', color: 'white', display: 'flex', justifyContent: 'center' }}>
                  About Us
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 'regular',
                    fontSize: 14,
                    mb: 0.5,
                    textAlign: { xs: 'center', sm: 'left' },
                    textDecoration: 'none',
                    color: "white"
                  }}
                >
                  SkyBluLabs offers individuals cutting-edge AI/ML solutions and specialized job support, alongside client-centric consulting for measurable success.
                </Typography>
              </HashLink>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Divider sx={{ borderColor: '#ffffff', width: '100%', opacity: '12%' }} />
        </Box>
        <Box mt={2} textAlign="center">
          <Typography variant="body2" sx={{ fontFamily: 'Roboto', fontWeight: 'regular', fontSize: 14, display: 'flex', justifyContent: 'center' }}>
            &copy;2024 Designed by SkyBluLabs
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
