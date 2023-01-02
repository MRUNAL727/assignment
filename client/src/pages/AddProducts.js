import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true

const AddProducts = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    productName: '',
    price: 0,
    sellerName: '',
  });
  const [msg, setMsg] = useState();
  const [accountType, setAccountType] = useState();

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   setAccountType(user.type);
  //   if (accountType === 'buyer') {
  //     setMsg({msg:'Please login as a seller', col:'red'});
  //   }
  // }, []);
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
   
       await axios.post(
        'http://localhost:8000/api/products/add',
        data
      ).then((response)=>
        {navigate('/');}
      
      ).catch((err)=>{
        setMsg(err.response.data.msg)
      })
      // if (response.status === 200) {
      // }
  }
  console.log(msg)
  return (
    <div
      style={{
        width: '60%',
        margin: '50px auto',
        height: '70vh',
        borderRadius: 5,
        boxShadow: '0px 4px 10px rgba(0, 76, 255, 0.212)',
      }}
    >
      {msg && <Typography style={{textAlign:'center'}}>{msg}</Typography>}

      <div>
        <h1 style={{ textAlign: 'center' }}>Add products</h1>
        <div style={{ display: 'flex', width:'50%', margin:'auto',justifyContent:'center', flexDirection: 'column', alignItems:'center'}}>
          <TextField
            id="outlined-basic"
            type="text"
            label="Product name"
            variant="outlined"
            name="productName"
            onChange={handleChange}
            style={{ margin: 20, width:'100%'}}
          />
          <TextField
            id="outlined-basic"
            type="number"
            label="Price"
            variant="outlined"
            name="price"
            onChange={handleChange}
            style={{ margin: 20, width:'100%'}}
          />

          <TextField
            id="outlined-basic"
            type="text"
            label="Seller name"
            variant="outlined"
            name="sellerName"
            onChange={handleChange}
            style={{ margin: 20, width: '100%' }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            width:'30%',
            margin:'auto'
          }}
        >
          <Button variant="contained" onClick={handleClick}>
            Add product
          </Button>
          <Button variant="contained" onClick={() => navigate('/')}>
            Cancel
          </Button>
        </div>
      </div>

    </div>
  );
};

export default AddProducts;
