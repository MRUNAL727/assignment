import React, { useState } from 'react';
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
    type: '',
  });
  const [msg, setMsg] = useState()
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    const response = await axios.post(
      'http://localhost:8000/api/user/register',
      data
    );
    console.log(response)
    if(response.status === 200)
    {
     navigate('/')
    }else{
      setMsg(response)
    }
  };
  return (
    <div
      style={{
        width: '60%',
        margin: '50px auto',
        height: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 5,
        boxShadow: '0px 4px 10px rgba(0, 76, 255, 0.212)',
      }}
    >
      <div style={{}}>
        <h1 style={{ textAlign: 'center' }}>Register</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TextField
            id="outlined-basic"
            type="email"
            label="Email"
            variant="outlined"
            style={{ margin: 20, width: 500 }}
            name="email"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            type="password"
            label="Password"
            variant="outlined"
            style={{ margin: 20 }}
            name="password"
            onChange={handleChange}
          />
        </div>

        <div style={{ margin: 20, width: 500 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.type}
              label="Age"
              name="type"
              onChange={handleChange}
            >
              <MenuItem value={'seller'}>Seller</MenuItem>
              <MenuItem value={'buyer'}>Buyer</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly'
          }}
        >
          <Button variant="contained" onClick={handleClick}>
            Register
          </Button>
          <Button variant="contained" onClick={() => navigate('/')}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
