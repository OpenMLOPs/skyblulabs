import React from 'react'
import Navbar from '../../components/navbar/navbar.jsx';
import Contact from '../../components/contact/contact.jsx';
import Service from '../../components/services/service.jsx';
import './home.css';

const Home = () => {
    const textColorStyle = {
        color: '#0F00BD',
    };

    return (
        <>
            <div className="overlayContainer">
                <Navbar />
                <div className="background">
                    <div className='bgoverlay'>
                        <div className="textContainer">
                            <p className="mainText"><b>Let's Build <span style={textColorStyle}>Your Project</span><br />Together</b></p>
                        </div>
                        <div className="contactdiv">
                            <Contact />
                        </div>
                    </div>
                </div>
            </div>
            <Service />
        </>
    );
};

export default Home;