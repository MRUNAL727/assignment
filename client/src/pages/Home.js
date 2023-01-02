import React from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div style={{width:'30%', margin:'auto',height:'50vh',display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
     

      <Button variant="contained" onClick={()=> navigate('/add-products')}>Add Products</Button>
      <Button variant="contained" onClick={()=> navigate('/view-products')}>View Products</Button>

    </div>
  );
};

export default Home;
