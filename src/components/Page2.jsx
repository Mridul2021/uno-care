import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import Page2_box from './Page2_box';
import ShopIcon from '@mui/icons-material/Shop'; // Import the ShopIcon
import AppleIcon from '@mui/icons-material/Apple';
import booking from '../images/page2icons/booking 1.png';
import online from '../images/page2icons/online 1.png';
import prescription from '../images/page2icons/prescription 1.png';
import security from '../images/page2icons/securitysafe.png';
import unnamed  from '../images/page2icons/unnamed 1.png'
const MyComponent = () => {
  return (
    <Box
      marginTop={15}
      marginLeft={7}
      marginBottom={15}
      marginRight={7}
      width="auto"
      height="auto"
      borderRadius={7}
      bgcolor="#D0E5FF"
      
      
    >
      <Grid container direction="row" marginLeft="40px" data-aos="fade-up-right">
        <Grid item xs={4} marginTop="30px">
          <Typography sx={{ fontSize: "36px" }} color="#0045B9" fontWeight="700">
            3 Steps
            <span style={{ fontWeight: "200" }}> And Get</span>
          </Typography>
          <Typography sx={{ fontSize: "36px" }} color="#0045B9" fontWeight="700">
            Complete Health Check-up
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            Follow These 3 Simple Steps And Avail Primary Healthcare Services
          </Typography>
          <Grid marginTop="20vh">
            <Button
              variant="outlined"
              sx={{
                borderRadius: "10px",
                marginBlock: "10px",
                padding: "2vh", // Added padding
                display: "flex", // Make button content flex to align icon and text
                alignItems: "center", // Align items vertically
                textAlign: "left", // Align text to the left
              }}
              startIcon={<ShopIcon/>} // Increased icon size
            >
              {/* Use a nested Grid container with column direction */}
              <Grid container direction="column">
                <Typography
                  sx={{
                    color: "#127DDD",
                    fontSize: "10px",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}>
                  GET IT ON
                </Typography>
                <Typography
                  sx={{
                    color: "#127DDD",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}>
                  APPLE STORE
                </Typography>
              </Grid>
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "10px",
                marginBlock: "10px",
                padding: "2vh", // Added padding
                display: "flex", // Make button content flex to align icon and text
                alignItems: "center", // Align items vertically
                textAlign: "left", // Align text to the left
              }}
              startIcon={<AppleIcon sx={{ fontSize: 40 }}/>} // Increased icon size
            >
              {/* Use a nested Grid container with column direction */}
              <Grid container direction="column">
                <Typography
                  sx={{
                    color: "#127DDD",
                    fontSize: "10px",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}>
                  GET IT ON
                </Typography>
                <Typography
                  sx={{
                    color: "#127DDD",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}>
                  Google play
                </Typography>
              </Grid>
            </Button>
            <Grid container direction="row">
              <Grid >
              <Box
              height="12vh"
              width="12vh"
              backgroundColor="#eceff1"
              borderRadius="10px"
              marginTop="9vh"
              marginLeft="1vw">
                
              </Box>
              <Typography color='#0045B9'>
              ABHA Integrated
              </Typography>
              </Grid>
              <Grid >
              <Box
              height="12vh"
              width="12vh"
              backgroundColor="#eceff1"
              borderRadius="10px"
              marginTop="9vh"
              marginLeft="6vw">
                
              </Box>
              <Typography marginLeft="5vw" color='#0045B9'>
              Private & Secure
              </Typography>
              </Grid>
              
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={7.5} sx={{ marginTop: "28vh", marginRight: "40px", marginBottom: '10vh' }}>
          <Page2_box />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyComponent;
