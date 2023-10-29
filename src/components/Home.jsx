import React from 'react'
import { Grid, Typography, Button, Box, Paper, styled, Hidden } from '@mui/material'
import team from "../images/medical-team.png";
import blood from "../images/blood-type.png";
import medicine from "../images/medicine.png";
import video from "../images/video-call.png";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import Specialists from './Specialists';


const Home = () => {
  return (
    <div style={{marginTop:30}}>
      <Grid container direction="row" alignItems="center" data-aos="fade-up-left">
        <Grid item sm={8}>
        <Hidden smDown>
          <Typography variant="h2" sx={{marginTop:6}} >
              Primary Healthcare For Bharat
          </Typography>
          <Typography variant="h6" sx={{marginTop:1}}>
              Sab Theek Hojayega!
          </Typography>
          </Hidden>
        <Hidden smUp>
          <Typography variant="h5" sx={{marginTop:6}} >
              Primary Healthcare For Bharat
          </Typography>
          <Typography variant="h8" sx={{marginTop:1}}>
              Sab Theek Hojayega!
          </Typography>
          </Hidden>
        </Grid>
        <Grid container direction="row" alignItems="center" sx={{marginTop:"80px"}}>
          <Grid containner direction="row"  item xs={12} sm={4} order={{xs:2,sm:1}} >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={2}>
              <img
              src={team}
              alt="Logo"
              style={{ width: 54, height: 54, marginLeft: '20px', marginTop:'10px' }}
              />
            </Grid>
            <Grid item xs={10}>
              <Typography varient="h1" marginTop={1} marginLeft={4}>
                Multi Specialities
              </Typography>
              <Typography marginLeft={4}>
                Lorem ipsum dolor sit amet.
              </Typography>
            </Grid>
          </Grid>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={3}>
              <img
              src={medicine}
              alt="Logo"
              style={{ width: 54, height: 54, marginLeft: '20px', marginTop:'10px' }}
              />
            </Grid>
            <Grid item xs={9}>
              <Typography varient="h1" marginTop={1}>
                Pharmacy
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet.
              </Typography>
            </Grid>
          </Grid>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={3}>
              <img
              src={video}
              alt="Logo"
              style={{ width: 54, height: 54, marginLeft: '20px', marginTop:'10px' }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography varient="h1" marginTop={1}>
                Video Consultation
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet.
              </Typography>
            </Grid>
          </Grid>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={3}>
              <img
              src={blood}
              alt="Logo"
              style={{ width: 54, height: 54, marginLeft: '20px', marginTop:'10px' }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography varient="h1" marginTop={1}>
                Lab Tests
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet.
              </Typography>
            </Grid>
          </Grid>
          </Grid>
          <Grid container item xs={12} sm={8} justifyContent='center' order={{xs:1,sm:2}}>
          <Grid container rowSpacing={1} columnSpacing={{sm: 6, xs:12}}>
            <Hidden smDown>
              <Grid item xs={2}>
                <img
                src={img1}
                alt="Logo"
                style={{ width: 296, height: 348, marginTop:'35px' }}
                />
              </Grid>
            </Hidden>
            <Hidden smDown>
              <Grid item xs={2}>
                <img
                src={img2}
                alt="Logo"
                style={{ width: 381, height: 489, marginLeft: '185px', marginTop:'10px' }}
                />
              </Grid>
            </Hidden>
            <Hidden smUp>
            <Grid item xs={2}>
                <img
                src={img2}
                alt="Logo"
                style={{ width: 320, height: 450, marginLeft: '18px', marginTop:'-40px' }}
                />
              </Grid>
            </Hidden>
            <Grid sx={{marginTop:"70px", marginLeft:"auto"}}>
              <Specialists/>
            </Grid>
            
          </Grid>
          </Grid>
        {/* see app.js also */}
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
