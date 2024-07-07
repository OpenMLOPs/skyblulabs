import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const AboutCard = ({ image, title, content }) => {
    return (
        <Card sx={{ width: { lg: '40vw', md: '422px', sm: '422px', xs: '350px' }, borderRadius: '12px' }} elevation={0}>
            <CardMedia
                sx={{ height: '380px', borderRadius: '12px', border: 1, borderColor: '#CAC4D0' }}
                image={image}
                alt="Image"
                component='img'
            />
            <CardContent>
                <Typography gutterBottom component="div" sx={{ fontSize: '24px', fontWeight: 'bold', color: "#5C5C5C", textAlign: 'left' }}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '18px', fontWeight: 'regular', color: '#5C5C5C' }}>
                    {content}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default AboutCard