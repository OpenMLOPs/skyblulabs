import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  { id: 1, src: 'https://s7ap1.scene7.com/is/image/TCSCOMprod/innovate-adapt-thrive?wid=1366&hei=768&dpr=off', alt: 'Image 1' },
  { id: 2, src: 'https://s7ap1.scene7.com/is/image/TCSCOMprod/2023-global-cloud-study?wid=1366&hei=768&dpr=off', alt: 'Image 2' },
  { id: 3, src: 'https://s7ap1.scene7.com/is/image/TCSCOMprod/progress-with-purpose?wid=1366&hei=768&dpr=off', alt: 'Image 3' },
  { id: 4, src: 'https://s7ap1.scene7.com/is/image/TCSCOMprod/design-for-future?wid=1366&hei=768&dpr=off', alt: 'Image 4' },
  { id: 5, src: 'https://s7ap1.scene7.com/is/image/TCSCOMprod/net-negative-benchmark?wid=1366&hei=768&dpr=off', alt: 'Image 5' },
  { id: 6, src: 'https://s7ap1.scene7.com/is/image/TCSCOMprod/ir-annocement?wid=1400&hei=788&dpr=off', alt: 'Image 6' },
];

const CustomCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={50}
        swipeScrollTolerance={5}
        autoPlay={true}
        interval={3000}
        showIndicators={false}
      >
        {images.map((image) => (
          <div key={image.id} className="carousel-slide">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;