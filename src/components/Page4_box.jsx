import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import img1 from '../images/🦆 emoji _eye_.png';

const Page4 = () => {
  return (
    <div>
      <Box
        paddingTop='4vh'
        paddingLeft='4vh'
        height="30vh"
        width="30vh"
        bgcolor="#DEEAFF"
        justifyContent="left"
        borderRadius='5vh'      >
        <Box
          height='12vh'
          width='12vh'
          bgcolor='#BFD7FF'
          borderRadius='2vh'
        >
          <Grid component='img'
            paddingTop='2.8vh'
            paddingRight='2vh'
            paddingLeft='2.5vh'
            src={img1}
            width='70px'
            height='60px'
          />
        </Box>
        <Typography sx={{ marginTop: '2vh', fontWeight: '700' }}>
          ophthalmologist
        </Typography>
        <Typography sx={{ marginTop: '2vh', fontWeight: '300', fontSize: '10px' }}>
          Lorem ipsum dolor sit amet.
        </Typography>
        <Button sx={{
          marginTop:'2vh',
              backgroundColor: "#0000",
              border: "1px solid #FFF", // Add white border
              borderRadius:"15px",
              color: "#127DDD",
              borderColor:'#127DDD',
              marginLeft:'3vh'
            }}>
          Learn More
        </Button>
      </Box>
    </div>
  );
};

export default Page4;
