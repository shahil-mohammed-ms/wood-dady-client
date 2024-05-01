import React from 'react';
import './index.css';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

function ProductCard() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const images = [
    '/gallery/products/p1.jpg',
    '/gallery/products/p1.jpg',
    '/gallery/products/p1.jpg',
    // Add more image URLs as needed
  ];

  const handleSwipeChange = (index) => {
    setActiveIndex(index);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleBack = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Box className="product-card">
      <Box className="image-container">
        <SwipeableViews index={activeIndex} onChangeIndex={handleSwipeChange}>
          {images.map((imageUrl, index) => (
            <Box key={index} className="image">
              <img src={imageUrl} alt={`Image ${index + 1}`} />
            </Box>
          ))}
        </SwipeableViews>
        <div className='nav-button'>
        <IconButton className=" prev" onClick={handleBack}>
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton className="  next" onClick={handleNext}>
          <KeyboardArrowRight />
        </IconButton>
        </div>
      
      </Box>
      <CardContent>
        <Typography variant="h5" component="div">
          Furniture Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description of the furniture goes here. You can provide additional details about the product.
        </Typography>
        <Box className="price-section">
          <Typography variant="h6" component="div">
            $100 {/* Actual price */}
          </Typography>
          <Typography variant="body1" component="div" className="original-price">
            $120 {/* Original price */}
          </Typography>
        </Box>
      </CardContent>
      <Box className="actions">
        <button className="action-button add-to-cart">Add to Cart</button>
        <button className="action-button wishlist">Wishlist</button>
      </Box>
    </Box>
  );
}

export default ProductCard;
