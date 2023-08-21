import React from 'react';
import { Container, Typography } from '@mui/material';
import Navbar from '../../components/navbar/navbar';

const about = () => {
    return (
        <>
            <Navbar />
            <Container className='about'>
                <Typography variant="h1" align="center" style={{ marginBottom: '50px', marginTop: '200px' }}>
                    <b>About Us</b>
                </Typography>
                <Typography variant='h5' align='center'>
                    We specializes in training, developing and delivering  software solutions, leveraging cutting-edge technologies to meet the unique needs of our clients in a time bound fashion enabling growth and digital transformation.
                </Typography>
            </Container>
        </>
    )
};

export default about;