import {React,useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Create() {
    //update date
    const [flight,setFlight]=useState({
      flightNo:'',
      departureTime:'',
      arrivalTime:'',
      ecoSeatNo:'',
      businessSeatNo:'',
      airport:'',
      terminal:''
       });
    const createFlight=()=>{
        axios.post('http://localhost:5000/flights',flight).then(()=>{
          window.location.reload(false);
        })
    };
  return (
      <>
      <h2>
          Create Flight
      </h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Flight Number" variant="outlined" value={flight.flightNo}onChange={(event)=>{
          setFlight({ ...flight,flightNo:event.target.value})
        }}/>
      <TextField id="outlined-basic" label="Departure Time" variant="outlined" value={flight.departureTime}onChange={(event)=>{
          setFlight({ ...flight,departureTime:event.target.value})
        }}/>
      <TextField id="outlined-basic" label="Arrival Time" variant="outlined" value={flight.arrivalTime}onChange={(event)=>{
          setFlight({ ...flight,arrivalTime:event.target.value})
        }}/>
      <TextField id="outlined-basic" label="Economic Seat Number" variant="outlined"value={flight.ecoSeatNo}onChange={(event)=>{
          setFlight({ ...flight,ecoSeatNo:event.target.value})
        }}/>
              <TextField id="outlined-basic" label="Business Seat Number" variant="outlined" value={flight.businessSeatNo}onChange={(event)=>{
          setFlight({ ...flight,businessSeatNo:event.target.value})
        }}/>
      <TextField id="outlined-basic" label="Airport" variant="outlined" value={flight.airport}onChange={(event)=>{
          setFlight({ ...flight,airport:event.target.value})
        }}/>
      <TextField id="outlined-basic" label="Terminal" variant="outlined"value={flight.terminal}onChange={(event)=>{
          setFlight({ ...flight,terminal:event.target.value})
        }}/>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={createFlight}>Create Flight</Button>
    </Stack>
    </Box>
    </>
  );
}