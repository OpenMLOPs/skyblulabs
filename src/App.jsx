import React from 'react'
import Navbar from './components/navbar/navbar'
import Carousel from './components/carousel/carousel';
import Service from './components/services/service';

const App = () => {
    return (
        <>
            <Navbar />
            {/* <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Services} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/" />
            </Switch> */}
            <Carousel />
            <Service />
        </>
    );
};

export default App;