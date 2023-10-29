import React from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';

const Page4 = () => {
  const buttonStyles={
    textTransform: 'none',

  }
  return (
    
    <div>
      <Box
        width="auto"
        height="auto"
        backgroundColor="#FFF"
        paddingRight="5vw"
        paddingLeft="5vw"
        paddingTop="5vh"
        borderRadius="20px"

      >
        <Typography marginTop="5vh" marginBottom="2vh">
          Kindly Fill In The Required Details In The Form and Book An Appointment
        </Typography>
        <Grid container direction="row" md={12}>
          {/* First 6 grid items (left side) */}
          <Grid item container md={6} direction="column">
            {/* First Name */}
            <Grid container direction="column" marginBottom="2vh">
              First Name
              <TextField sx={{width:'auto', marginRight:"2.6vw"}} name="firstName" required />
            </Grid>
            {/* Age */}
            <Grid container direction="column" marginBottom="2vh">
              Age
              <TextField sx={{width:'auto', marginRight:"2.6vw"}} name="age" required />
            </Grid>
            {/* Disease/Illness Type */}
            <Grid container direction="column" marginBottom="2vh">
              Disease/Illness Type
              <TextField sx={{width:'auto', marginRight:"2.6vw"}} name="diseaseType" required />
            </Grid>
            {/* Mobile Number */}
            <Grid container direction="column" marginBottom="2vh">
              Mobile Number
              <TextField sx={{width:'auto', marginRight:"2.6vw"}} name="mobileNumber" required />
            </Grid>
            {/* Address Line 1 */}
            <Grid container direction="column" marginBottom="2vh">
              Address Line 1
              <TextField sx={{width:'auto',marginRight:"2.6vw"}} name="addressLine1" required  />
            </Grid>
          </Grid>
          {/* Last 6 grid items (right side) */}
          <Grid item container md={6} direction="column">
            {/* Last Name */}
            <Grid container direction="column" marginBottom="2vh">
              Last Name
              <TextField sx={{width:'auto', marginRight:"2.6vw"}} name="firstName" required />
            </Grid>
            {/* Age */}
            <Grid container direction="column" marginBottom="2vh">
              Gender
              <TextField sx={{width:'auto', marginRight:"2.6vw"}} name="age" required />
            </Grid>
            {/* Disease/Illness Type */}
            <Grid container direction="column" marginBottom="2vh">
              Secect Appointment Type
              <TextField sx={{width:'auto', marginRight:"2.6vw"}} name="diseaseType" required />
            </Grid>
            {/* Mobile Number */}
            <Grid container direction="column" marginBottom="2vh">
              Email Id
              <TextField sx={{width:'auto', marginRight:"2.6vw"}} name="mobileNumber" required />
            </Grid>
            {/* Address Line 1 */}
            <Grid container direction="column" marginBottom="2vh">
              Address Line 2
              <TextField sx={{width:'auto', marginRight:"2.6vw"}} name="addressLine1" required />
            </Grid>
          </Grid>
        </Grid>
        <Box>
          <Button >

          </Button>
        </Box>
        <Box sx={{display:"flex", justifyContent:"center", height:"auto",width:"auto", paddingBottom:"3vh"}}>
        <Button
              variant="contained"
              size="medium"
              style={buttonStyles}
              sx={{
                borderRadius: 20,
                color: 'white',
                marginRight: '50px',
                
              }}
            >
              Doctor Login
            </Button>
            </Box>
      </Box>
    </div>
  );
};

export default Page4;
