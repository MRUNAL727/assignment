import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const navigate = useNavigate();
  const { state, dispatch } = useContext(CartContext);

  console.log(state);
  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/products/${id}`
      );
      setProduct(response.data);
    };
    getProduct();
  }, []);

  const handleClick = () => {};

  return (
    <div style={{ width: '30%', margin: '20px auto', display: 'flex' }}>
      {product && (
        <Card key={product._id} style={{ height: '40vh' }}>
          <div style={{ display: 'flex', margin: '50px 50px 20px 50px' }}>
            <div style={{ width: '30%' }}>
              <img src="/camera.jpg" width="100%" />
            </div>
            <div style={{ margin: 20 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {product.productName}
                </Typography>
                <Typography variant="h5" component="div">
                  {product.price}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Seller: {product.sellerName}
                </Typography>
              </CardContent>
            </div>
          </div>

          <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              onClick={() => {
                dispatch({
                  type: 'ADD_TO_CART',
                  payload: product,
                  id: product._id,
                });
                navigate('/view-products')
              }}
            >
              Add to cart
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default ProductDetails;
