import React from 'react';
import { Box, Grid, Container, Typography, IconButton, Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const buttonStyles = {
  textTransform: 'none',
};

const Page2_box = () => {
  return (
    <div data-aos="fade-up-left">
      <Grid container spacing={2} justifyContent="space-around">
        <Grid item lg={5} xs={12}>
          <Box
            width="auto"
            height="auto"
            borderRadius={7}
            bgcolor="#166BFC"
            position="relative"
          >
            <Grid container direction="row">
              <Grid xs={6}>
                <Box
                  width="8vw"
                  height="8vw"
                  borderRadius={50}
                  bgcolor="#0045B9"
                  position="absolute"
                  top="20px"
                  left="20px"
                ></Box>
              </Grid>
              <Grid item xs={4} marginTop="5vh" color='white'>
                <Typography sx={{ fontSize: "30px" }}>
                  Sep
                </Typography>
                <Typography sx={{ fontSize: "30px" }}>
                  01
                </Typography>
              </Grid>
              <Grid item xs={12} color='white' marginTop="7vh" display="flex" justifyContent="center">
                <Typography sx={{ fontSize: "22px", marginLeft: '2vw', marginRight: '2vw', fontWeight: '600' }}>
                  Book Appointment <br />
                  <span style={{ fontSize: '22px', fontWeight: '200' }}>Visit UNO.Care near you or call us at 1800-889-0189 to book an appointment</span>
                </Typography>
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="center"> {/* Center the button horizontally */}
                <Button
                endIcon={<ArrowRightAltIcon/>}

                  variant="contained"
                  size="medium"
                  style={buttonStyles}
                  sx={{
                    borderRadius: 20,
                    color: 'white',
                    backgroundColor: '#0045B9',
                    marginTop: '20px', // Add margin-top to center vertically
                    padding:'12px',
                    marginBottom:'3vh'
                  }}
                >
                  Book Appointment
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Box
            width="auto"
            height="auto"
            borderRadius={7}
            bgcolor="#166BFC"
            position="relative"
          >
            <Grid container direction="row" marginTop='5vh'>
              <Grid xs={6}>
                <Box
                  width="6vw"
                  height="6vw"
                  borderRadius={50}
                  bgcolor="#0045B9"
                  position="absolute"
                  top="20px"
                  left="20px"
                ></Box>
              </Grid>
              <Grid item xs={4} marginTop="5vh" color='white'>
                <Typography sx={{ fontSize: "25px" }}>
                  Sep
                </Typography>
                <Typography sx={{ fontSize: "25px" }}>
                  02
                </Typography>
              </Grid>
              <Grid item xs={12} color='white' marginTop="7vh" display="flex" justifyContent="center">
                <Typography sx={{ fontSize: "18px", marginLeft: '2vw', marginRight: '2vw', fontWeight: '600' }}>
                Consultation <br />
                  <span style={{ fontSize: '16px', fontWeight: '200' }}>Consult the best experienced MBBS/MD Doctors</span>
                </Typography>
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="center"> {/* Center the button horizontally */}
                <Button
                endIcon={<ArrowRightAltIcon/>}

                  variant="contained"
                  size="medium"
                  style={buttonStyles}
                  sx={{
                    borderRadius: 20,
                    color: 'white',
                    backgroundColor: '#0045B9',
                    marginTop: '20px', // Add margin-top to center vertically
                    padding:'12px',
                    marginBottom:'3vh'
                  }}
                >
                  Know More
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item lg={3} xs={12}>
          <Box
            width="auto"
            height="auto"
            borderRadius={7}
            bgcolor="#166BFC"
            position="relative"
          >
            <Grid container direction="row" marginTop='8vh'>
              <Grid xs={6}>
                <Box
                  width="4vw"
                  height="4vw"
                  borderRadius={50}
                  bgcolor="#0045B9"
                  position="absolute"
                  top="20px"
                  left="20px"
                ></Box>
              </Grid>
              <Grid item xs={4} marginTop="5vh" color='white'>
                <Typography sx={{ fontSize: "15px" }}>
                  Sep
                </Typography>
                <Typography sx={{ fontSize: "15px" }}>
                  01
                </Typography>
              </Grid>
              <Grid item xs={12} color='white' marginTop="3vh" display="flex" justifyContent="center">
                <Typography sx={{ fontSize: "16px", marginLeft: '2vw', marginRight: '2vw', fontWeight: '600' }}>
                  Digital Prescription <br />
                  <span style={{ fontSize: '12px', fontWeight: '200' }}>Get your Digital Prescription</span>
                </Typography>
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="center"> {/* Center the button horizontally */}
                <Button
                endIcon={<ArrowRightAltIcon/>}

                  variant="contained"
                  size="medium"
                  style={buttonStyles}
                  sx={{
                    borderRadius: 20,
                    color: 'white',
                    backgroundColor: '#0045B9',
                    marginTop: '20px', // Add margin-top to center vertically
                    padding:'12px',
                    marginBottom:'3vh'
                  }}
                >
                  Know More
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        {/* <Grid item xs={4}>
          <Box
            width="auto"
            height="245px"
            borderRadius={7}
            bgcolor="#166BFC"
          ></Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            width="auto"
            height="171px"
            borderRadius={7}
            bgcolor="#166BFC"
          ></Box>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default Page2_box;
