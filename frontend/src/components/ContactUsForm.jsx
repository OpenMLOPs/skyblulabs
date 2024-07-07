import React, { useState } from 'react';
import { Box, Button, Grid, TextField as MuiTextField, Snackbar, Alert } from '@mui/material';

const CustomTextField = ({ label, name, type, value, onChange, required, multiline, rows }) => (
    <MuiTextField
        label={label}
        name={name}
        type={type}
        fullWidth
        required={required}
        value={value}
        onChange={onChange}
        multiline={multiline}
        rows={rows}
        sx={{
            '& .MuiOutlinedInput-root': {
                backgroundColor: 'white',
                '& fieldset': {
                    borderWidth: '2px',
                },
                '&:hover fieldset': {
                    borderWidth: '2px',
                },
                '&.Mui-focused fieldset': {
                    borderWidth: '2px',
                },
                '& input, & textarea': {
                    color: 'blue',
                    backgroundColor: 'white',
                },
                '& .MuiInputBase-inputMultiline': {
                    color: 'blue',
                },
            },
        }}
    />
);

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        message: ''
    });

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(`Field ${name} changed to ${value}`);
    };

    const getAccessToken = async () => {
        const client_id = '9ApWfx8q3F7k1ueAXnE69hFjmfNFqWFC';
        const client_secret = 'FNNikV3HhayePF9HZvdxgxs3RT_6cgGiMHUCZ6jPla5f0Ui4Ig56IT53ddDD2vaq';
        const audience = 'https://skyblulabs-db-api.onrender.com/';
        const auth0_domain = 'dev-7ntgddmblegtjfp4.us.auth0.com';

        const url = `https://${auth0_domain}/oauth/token`;
        const headers = {
            'Content-Type': 'application/json',
        };
        const payload = {
            client_id: client_id,
            client_secret: client_secret,
            audience: audience,
            grant_type: 'client_credentials',
        };

        try {
            console.log('Requesting access token...');
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(payload),
            });
            const data = await response.json();
            console.log('Access token received');
            return data.access_token;
        } catch (error) {
            console.error('Error fetching access token:', error);
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        try {
            const token = await getAccessToken();

            if (!token) {
                console.log('Failed to get access token');
                setSnackbarMessage('Failed to submit the form.');
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
                return;
            }
            console.log('Submitting form data to server...');
            const response = await fetch('https://skyblulabs-db-api.onrender.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Form submitted successfully');
                setSnackbarMessage('Form submitted successfully!');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    company: '',
                    country: '',
                    message: ''
                });
            } else {
                console.log('Failed to submit the form');
                setSnackbarMessage('Failed to submit the form.');
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
            }
        } catch (error) {
            console.error('Error:', error);
            setSnackbarMessage('An error occurred while submitting the form.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    };

    const handleSnackbarClose = () => {
        console.log('Snackbar closed');
        setSnackbarOpen(false);
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <CustomTextField
                        label="First Name"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomTextField
                        label="Last Name"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <CustomTextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <CustomTextField
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomTextField
                        label="Company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomTextField
                        label="Country Name"
                        name="country"
                        type="text"
                        value={formData.country}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <CustomTextField
                        label="Message"
                        name="message"
                        type="text"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: '#396EFF',
                                '&:hover': {
                                    backgroundColor: '#115293'
                                },
                                mt: 3,
                                textTransform: 'capitalize',
                                borderRadius: '20px',
                                padding: '10px 30px',
                            }}
                        >
                            Submit your query
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ContactUsForm;
