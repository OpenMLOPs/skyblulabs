import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, Snackbar } from '@mui/material';
import axios from 'axios';
import './contact.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        description: '',
    });

    const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:3001/contact', formData);
            setIsSuccessPopupOpen(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                description: '',
            });
        } catch (error) {
            console.error('Error sending data to BFF:', error);
        }
    };

    const handleClosePopup = () => {
        setIsSuccessPopupOpen(false);
    };

    return (
        <Container maxWidth="sm" className='contactform'>
            <div className="form-box">
                <Typography variant="h4" align="center" gutterBottom>
                    Contact Us
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField label="Name" name="name" fullWidth margin="normal" required value={formData.name} onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Email" name="email" type="email" fullWidth margin="normal" required value={formData.email} onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Phone" name="phone" fullWidth margin="normal" required value={formData.phone} onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Description" name="description" multiline rows={4} fullWidth margin="normal" required value={formData.description} onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" type="submit" fullWidth>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Snackbar open={isSuccessPopupOpen} autoHideDuration={3000} onClose={handleClosePopup} message="Form Submitted Successfully" />
        </Container>
    );
};

export default ContactForm;