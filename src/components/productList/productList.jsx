import React from 'react';
import ProductCard from './productCard';
import './index.css';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function ProductList() {

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };


  return (
    <div className='ProductsBox'>
      <div className="Title">
        <h1>Featured Products</h1>
      </div>
      <div className="ProductList"> {/* Updated class name */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
       

<div className="pagination">
<Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
</div>

      </div>
    </div>
  );
}

export default ProductList;
