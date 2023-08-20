import React, { useState } from 'react';
import { ButtonGroup, Button, Container, Grid, Paper, Typography } from '@mui/material';
import './service.css';

const Division1 = () => (
    <div className="divisions">
        <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
                <Paper className="paper">
                    <img className="image" src="https://th.bing.com/th/id/R.61b4349fe2633d6166c7d2c1b3f013c3?rik=UXW1J5dXIWZvDw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f7ia%2foyk%2f7iaoykXxT.png&ehk=RRM5bbJX0L1kzb6xxAJKGRfPTBQByy7ho0ZibezYD9E%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="Image 1" />
                    <Typography variant="h6">SCM</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper className="paper">
                    <img className="image" src="https://th.bing.com/th/id/R.168974f0a202a19888e8b017e4d65249?rik=vi7EGCSvdxsJUQ&riu=http%3a%2f%2fgetdrawings.com%2fvectors%2fshopping-cart-logo-vector-1.png&ehk=78EnuYkQr4dJ25tFVnk%2fBFiLcJ%2b4PoIX%2fBLZHHREh%2fY%3d&risl=&pid=ImgRaw&r=0" alt="Image 2" />
                    <Typography variant="h6">Retail</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper className="paper">
                    <img className="image" src="https://w7.pngwing.com/pngs/783/629/png-transparent-computer-icons-desktop-car-icon-black-angle-room-car-thumbnail.png" alt="Image 3" />
                    <Typography variant="h6">Automobile</Typography>
                </Paper>
            </Grid>
        </Grid>
    </div>
);

const Division2 = () => (
    <div className="divisions">
        <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
                <Paper className="paper">
                    <img className="image" src="https://i.vimeocdn.com/portrait/18609368_640x640" alt="Image 1" />
                    <Typography variant="h6">Databricks</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper className="paper">
                    <img className="image" src="https://th.bing.com/th/id/R.3938e0e2787cbf423ab5b52f29792bdf?rik=py2e0JNJLamkpg&riu=http%3a%2f%2fwww.mapcentia.com%2fimages%2ficons%2ffrontpage%2fsql.png&ehk=jEyc4kBN3cezoSFhr7%2bE7hnZnBkktUejEd3GqLGQSX4%3d&risl=&pid=ImgRaw&r=0" alt="Image 2" />
                    <Typography variant="h6">SQL</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper className="paper">
                    <img className="image" src="https://www.ambient-it.net/wp-content/uploads/2020/12/logo-datalake.png" alt="Image 3" />
                    <Typography variant="h6">Datalake</Typography>
                </Paper>
            </Grid>
        </Grid>
    </div>
);

const Division3 = () => (
    <div className="divisions">
        <Grid container spacing={3} className='gridcontainer'>
            <Grid item xs={12} sm={4}>
                <Paper className="paper">
                    <img className="image" src="https://th.bing.com/th/id/R.09ba0105b3bc11dac5b7c09443812189?rik=7UmhMl5FciECwQ&riu=http%3a%2f%2famueller.github.io%2fsklearn_014_015_pydata%2fsklearn-logo.png&ehk=%2fdoHlCDrKDgQK%2bMOem6eU3lvCRQHqQrt9J%2f3veiO1Pw%3d&risl=&pid=ImgRaw&r=0" alt="Image 1" />
                    <Typography variant="h6">Sklearn</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper className="paper">
                    <img className="image" src="https://luxcapital-website-media.s3.amazonaws.com/wp-content/uploads/2019/12/23115642/Logo-600x554.png" alt="Image 2" />
                    <Typography variant="h6">Huggingface</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper className="paper">
                    <img className="image" src="https://i1.wp.com/albertfattal.com/wp-content/uploads/2018/03/Tensorflow_logo.svg.png?ssl=1" alt="Image 3" />
                    <Typography variant="h6">Tensorflow</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper className="paper">
                    <img className="image" src="https://s3.amazonaws.com/thinkific-import/118220/wBgYN2MITy6p7oFPa3c4_SpaCy_logo_svg_png" alt="Image 4" />
                    <Typography variant="h6">Spacy</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper className="paper">
                    <img className="image" src="https://miro.medium.com/max/432/1*dTrIcbxzVvVqtev-b_US9Q.png" alt="Image 5" />
                    <Typography variant="h6">Kubeflow</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper className="paper">
                    <img className="image" src="https://techcrunch.com/wp-content/uploads/2021/05/VertexAI-512-color.png?resize=300" alt="Image 6" />
                    <Typography variant="h6">VertexAI</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper className="paper">
                    <img className="image" src="https://ms-toolsai.gallerycdn.vsassets.io/extensions/ms-toolsai/vscode-ai/0.6.19/1608155192316/Microsoft.VisualStudio.Services.Icons.Default" alt="Image 7" />
                    <Typography variant="h6">AzureMLStudio</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper className="paper">
                    <img className="image" src="https://mlflow.org/docs/0.2.1/_static/MLflow-logo-final-black.png" alt="Image 8" />
                    <Typography variant="h6">Mlflow</Typography>
                </Paper>
            </Grid>
        </Grid>
    </div>
);

const App = () => {
    const [activeDivision, setActiveDivision] = useState(1);

    const handleDivisionChange = (divisionNumber) => {
        setActiveDivision(divisionNumber);
    };

    return (
        <Container className='servicecontainer'>
            <Typography variant="h3" align="center" style={{ marginBottom: '25px', marginTop: '25px' }}>
                <b>Our Services</b>
            </Typography>
            <ButtonGroup className='buttongroup' fullWidth variant="contained">
                <Button className='first' onClick={() => handleDivisionChange(1)} variant={activeDivision === 1 ? 'contained' : 'outlined'}>Data Science</Button>
                <Button onClick={() => handleDivisionChange(2)} variant={activeDivision === 2 ? 'contained' : 'outlined'}>ETL</Button>
                <Button className='last' onClick={() => handleDivisionChange(3)} variant={activeDivision === 3 ? 'contained' : 'outlined'}>AI/ML</Button>
            </ButtonGroup>
            <div style={{ marginTop: '20px' }}>
                {activeDivision === 1 && <Division1 />}
                {activeDivision === 2 && <Division2 />}
                {activeDivision === 3 && <Division3 />}
            </div>
        </Container>
    );
};

export default App;