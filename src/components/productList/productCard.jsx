import React from 'react';
import { Box, Button, Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

function ProductCard() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/250',
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
    <Box sx={{ maxWidth: 400, margin: '0 auto', position: 'relative' }}>
      <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
        <SwipeableViews index={activeIndex} onChangeIndex={handleSwipeChange}>
          {images.map((imageUrl, index) => (
            <Box key={index} sx={{ display: 'flex', justifyContent: 'center', height: 300 }}>
              <img src={imageUrl} alt={`Image ${index + 1}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </Box>
          ))}
        </SwipeableViews>
        <IconButton sx={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }} aria-label="previous" onClick={handleBack}>
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton sx={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }} aria-label="next" onClick={handleNext}>
          <KeyboardArrowRight />
        </IconButton>
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Furniture Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description of the furniture goes here. You can provide additional details about the product.
        </Typography>
        <Box sx={{ display: 'flex', gap:'20px', alignItems: 'center', mt: 2 }}>
          <Typography variant="h6" component="div">
            $100 {/* Actual price */}
          </Typography>
          <Typography variant="body1" component="div" sx={{ color: 'text.secondary', textDecoration: 'line-through' }}>
            $120 {/* Original price */}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{  }}>
        <Button size="small" variant="contained" color="primary">
          Add to Cart
        </Button>
        <Button size="small" variant="outlined" color="primary">
          Wishlist
        </Button>
      </CardActions>
    </Box>
  );
}

export default ProductCard;
