import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageSlider from './ImageSlider.jsx'

function SpecialItemsSlider() {

  const sliders = [
    {url: 'https://img.freepik.com/premium-photo/planet-with-surreal-landscape-inhabited-by-magical-creatures_124507-149098.jpg','title': 'img-1'},
    {url: 'https://img.freepik.com/premium-photo/poster-universe-with-man-woman-looking-stars_662214-90683.jpg','title': 'img-2'},
    {url: 'https://img.freepik.com/premium-photo/man-standing-front-planet-with-planets-background_900396-14752.jpg', 'title': 'img-3'}
  ]

  const containerStyles = {
    width: '500px',
    height: '280px',
    margin: '0 auto',

  }

  return (
    <div>
        <h2>Special Items (Slider)</h2>
        <div style={containerStyles}>
            <ImageSlider slides={sliders}/> 
        </div>
    </div>
  );
}

export default SpecialItemsSlider;
