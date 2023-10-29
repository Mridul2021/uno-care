import React from 'react';
import Page7_box from './Pag7_box';
import { Grid, Box, Typography } from '@mui/material';

const Page7 = () => {
  return (
    <div data-aos="fade-down" data-aos-duration="4000">
      <Box sx={{ background: 'linear-gradient(180deg, #003B9E 0%, #409FFF 48.96%, #9ACFFF 98.96%)', paddingTop: "13vh",paddingBottom: "13vh" }}>
        <Grid container direction="row" md={12}>
          <Grid variant md={6} sx={12} paddingLeft="6vw" paddingRight="18vw" paddingTop="20vh">
            <Grid container direction="column" sx={{ display: "flex", justifyContent: "center", color: "#FFF" }}>
              <Grid>
                {/* Update the fontWeight property to 700 */}
                <Typography variant="h4" sx={{ fontFamily: "Mulish", fontWeight: 700  }}>
                  Welcome to Our
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="h4" sx={{ fontFamily: "Mulish", fontWeight: 700  }}>
                  Healthcase Center
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="h7" sx={{ fontFamily: "Mulish" }}>
              
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="h7" sx={{ fontFamily: "Mulish" }}>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                  </ul>
                </Typography>
              </Grid>
              
            </Grid>
          </Grid>
          <Grid variant md={5.7} sx={12}>
            <Page7_box />
          </Grid>
        </Grid>
        
      </Box>
    </div>
  );
};

export default Page7;
