import * as React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto';
import { Box, Container, Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Form from '../components/ContactUsForm';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const DataStorage = ({
  title,
  breadcrumbLinks,
  overviewTitle,
  overviewContent,
  typesTitle,
  types,
  toolsTitle,
  tools,
  imageSrc,
  requestForServiceContent
}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Navbar />
      <CssBaseline />
      <div role="presentation" style={{ margin: '144px 64px 40px 64px', fontFamily: 'Roboto', fontSize: '12px' }}>
        <Breadcrumbs aria-label="breadcrumb">
          {breadcrumbLinks.map((link, index) => (
            <Link
              key={index}
              underline="hover"
              color={index === breadcrumbLinks.length - 1 ? "text.primary" : "inherit"}
              href={link.href}
              aria-current={index === breadcrumbLinks.length - 1 ? "page" : undefined}
            >
              {link.name}
            </Link>
          ))}
        </Breadcrumbs>
      </div>
      <Container disableGutters maxWidth='100%' sx={{ marginBottom: '64px', padding: '0 64px 0 64px', fontFamily: 'Roboto', fontSize: '24px', fontWeight: 'bold', color: '#5C5C5C' }}>
        <Box component='div'>
          {title}
        </Box>
        <Box component='div' sx={{ margin: '24px 0 24px 0' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="tabs">
              <Tab label="Overview" {...a11yProps(0)} sx={{ textTransform: 'capitalize', fontFamily: 'Roboto', fontSize: '18px', fontWeight: '500', color: '#5C5C5C', width: '176px', textAlign: 'left' }} />
              <Tab label="Request For Service" {...a11yProps(1)} sx={{ textTransform: 'capitalize', fontFamily: 'Roboto', fontSize: '18px', fontWeight: '500', color: '#5C5C5C', width: '233px' }} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Typography gutterBottom sx={{ fontFamily: 'Roboto', fontSize: '20px', fontWeight: 'bold', color: '#5C5C5C' }}>
              {overviewTitle}
            </Typography>
            <Typography variant='subtitle1' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: 'regular', color: '#5C5C5C', marginBottom: '30px' }}>
              {overviewContent}
            </Typography>
            <Typography gutterBottom sx={{ fontFamily: 'Roboto', fontSize: '20px', fontWeight: 'bold', color: '#5C5C5C' }}>
              {typesTitle}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: '48px 0px 48px 0px' }}>
              <Box
                component='img'
                alt='Data Storage'
                src={imageSrc}
                maxWidth='30vw'
                width='100%'
              >
              </Box>
            </Box>
            <List
              sx={{
                listStyleType: 'number',
                listStylePosition: 'inside'
              }}
            >
              {types.map((type, index) => (
                <ListItem key={index} variant='subtitle2' sx={{ display: 'list-item', fontFamily: 'Roboto', fontSize: '18px', fontWeight: 'regular', color: '#5C5C5C' }}>
                  {type}
                </ListItem>
              ))}
            </List>
            <Typography gutterBottom sx={{ fontFamily: 'Roboto', fontSize: '20px', fontWeight: 'bold', color: '#5C5C5C', marginTop: "30px" }}>
              {toolsTitle}
            </Typography>
            <List
              sx={{
                listStyleType: 'number',
                listStylePosition: 'inside'
              }}
            >
              {tools.map((tool, index) => (
                <ListItem key={index} variant='subtitle4' sx={{ display: 'list-item', fontFamily: 'Roboto', fontSize: '18px', fontWeight: 'regular', color: '#5C5C5C' }}>
                  {tool}
                </ListItem>
              ))}
            </List>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {requestForServiceContent ? requestForServiceContent : <Form />}
          </CustomTabPanel>
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default DataStorage;