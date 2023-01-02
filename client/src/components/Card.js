import React from 'react';
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom'

const Cards = ({ product }) => {

  return (
    <div style={{ margin:'15px auto', boxShadow: '0px 4px 10px rgba(0, 76, 255, 0.212)', }}>
      <Link to={`/product-details/${product._id}`} style={{textDecoration:'none', color:"inherit"}}>
        <div sx={{}} key={product.id}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              
            >
              {product.productName}
            </Typography>
            <Typography variant="h5" component="div">
            ₹{product.price}
            </Typography>
            <Typography sx={{ mb: 1.5 }} >
              Seller: {product.sellerName}
            </Typography>
          </CardContent>
          
        </div>
      </Link>
    </div>
  );
};

export default Cards;
