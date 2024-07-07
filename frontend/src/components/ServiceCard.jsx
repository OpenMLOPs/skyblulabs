import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import '@fontsource/roboto';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const ServiceCard = ({ image, title, content, link }) => {
    return (
        <CardActionArea sx={{ width: 325, height: 400 }}>
            <Link to={link} style={{ textDecoration: 'none' }}>
                <Card sx={{ maxWidth: 325, height: 400, borderRadius: '12px', boxShadow: 9 }} variant='outlined'>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: 2
                    }}>
                        <CardMedia
                            component="img"
                            image={image}
                            alt="Image"
                            sx={{ height: 98, width: 300 }}
                        />
                        <CardContent>
                            <Typography
                                sx={{
                                    fontFamily: 'Roboto',
                                    fontSize: 20,
                                    fontWeight: '800',
                                    textAlign: 'left',
                                    color: '#5C5C5C',
                                    mb: 1.5,
                                    width: 300
                                }}>
                                {title}
                            </Typography>
                            {Object.entries(content).map(([subheading, items]) => (
                                <Typography
                                    key={subheading}
                                    sx={{
                                        fontFamily: 'Roboto',
                                        fontSize: 16,
                                        color: '#5C5C5C',
                                        my: 1,
                                        fontWeight: '600',
                                    }}>
                                    {subheading}
                                    <Typography sx={{
                                        fontSize: 16,
                                    }}>
                                        {items.join(', ')}
                                    </Typography>
                                </Typography>
                            ))}
                        </CardContent>
                    </Box>
                </Card>
            </Link>
        </CardActionArea>
    )
}

export default ServiceCard;