import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, Snackbar, Paper } from '@mui/material';
import axios from 'axios';
import './careerform.css';
import Loading from '../loading/loading';

const Careerform = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
    const [isInvalidFileTypeSnackbarOpen, setIsInvalidFileTypeSnackbarOpen] = useState(false);
    const [isDragOver, setIsDragOver] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [uploadedFileName, setUploadedFileName] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formDataToSend = new FormData();
        if (!uploadedFile) return setIsInvalidFileTypeSnackbarOpen(true);
        formDataToSend.append('file', uploadedFile);
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });
        try {
            setLoading(true);
            await axios.post('http://localhost:3001/careers', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setIsSuccessPopupOpen(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
            });
            setUploadedFile(null);
            setUploadedFileName(null);
            setLoading(false);
        } catch (error) {
            console.error('Error sending data to BFF:', error);
        }
    };

    const handleClosePopup = () => {
        setIsSuccessPopupOpen(false);
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            if (file.type === 'application/pdf') {
                setUploadedFile(file);
                setUploadedFileName(file.name);

            } else {
                setIsInvalidFileTypeSnackbarOpen(true);
            }
        }
    };

    const handleClick = () => {
        document.getElementById('file').click();
    };

    const handleFileChange = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            const file = files[0];
            if (file.type === 'application/pdf') {
                setUploadedFile(file);
                setUploadedFileName(file.name);
            } else {
                setIsInvalidFileTypeSnackbarOpen(true);
            }
        }
    };

    return (
        <Container maxWidth="sm" className='careerform'>
            <Loading loading={isLoading} />
            <div className="form-box">
                <Typography variant="h2" align="center" gutterBottom style={{ marginBottom: '50px' }}><b>Careers</b></Typography>
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
                            <Paper className={`drop-zone ${isDragOver ? 'drag-over' : ''}`} onDragEnter={handleDragEnter} onDragOver={handleDragEnter} onDragLeave={handleDragLeave} onDrop={handleDrop} onClick={handleClick} variant='outlined' style={{ height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {uploadedFileName ? (
                                    <Typography variant="body1">{uploadedFileName}</Typography>
                                ) : (
                                    <>
                                        <input type="file" id="file" style={{ display: 'none' }} onChange={handleFileChange}/>
                                        <Typography variant="h6" color={'#bababa'}>Drag & Drop files here or click to browse</Typography>
                                    </>
                                )}
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" type="submit" fullWidth>Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Snackbar open={isInvalidFileTypeSnackbarOpen} autoHideDuration={3000} onClose={() => setIsInvalidFileTypeSnackbarOpen(false)} message="Attach a PDF File (Resume)" />
            <Snackbar open={isSuccessPopupOpen} autoHideDuration={3000} onClose={handleClosePopup} message="Form Submitted Successfully" />
        </Container>
    );
};

export default Careerform;