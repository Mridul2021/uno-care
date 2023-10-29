import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import heart from "../images/🦆 emoji _anatomical heart_.png";
import eye from "../images/🦆 emoji _eye_.png"
import bone from "../images/🦆 emoji _bone_.png"
const CardiologistCard = () => {
  const handleCardClick = () => {
    // Handle the click event here, e.g., navigate to a new page or perform an action.
    console.log('Card clicked');
  };

  const buttonStyles = {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    boxShadow: 'none',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'white',
      boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.3)', // Shadow on hover
      borderRadius:"10px"
    },
  };

  return (
    <Box
      sx={{
        width: "250px",
        backgroundColor: "#FAFAFA",
        borderTopLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        padding: "15px",
        boxShadow:"10",
        borderColor:'#263238',
      }}
    >
      <Grid container>
        <Grid item xs={12} lg={12}>
          <Typography
            sx={{
              color: "#404040",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "normal",
            }}
          >
            Specialities Available
          </Typography>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Typography
            sx={{
              color: "#8A8A8A",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            Select Specialities
          </Typography>
        </Grid>
        <Grid item xs={12} lg={12} marginBottom='2vh'>
          <Button sx={buttonStyles} style={{textAlign:"left", width:"16vw"}} onClick={handleCardClick}>
            <Box
              sx={{
                height: "50px",
                width: "50px",
                backgroundColor: "#CEE8FF",
                borderRadius: "10px",
              }}
            >
              <Box
                component="img"
                src={heart}
                style={{ height: "30px", width: "24px", margin: "10px" }}
              />
            </Box>
            <Box sx={{ marginLeft: "10px" }}>
              <Typography
                sx={{
                  color: "#404040",
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "normal",
                  marginTop: "5px",
                }}
              >
                Cardiologist
              </Typography>
              <Typography
                sx={{
                  color: "#8A8A8A",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "normal",
                }}
              >
                5 Doctors Available
              </Typography>
            </Box>
          </Button>
        </Grid>
        <Grid item xs={12} lg={12} marginBottom='2vh'>
          <Button sx={buttonStyles} style={{textAlign:"left", width:"16vw"}} onClick={handleCardClick}>
            <Box
              sx={{
                height: "50px",
                width: "50px",
                backgroundColor: "#CEE8FF",
                borderRadius: "10px",
              }}
            >
              <Box
                component="img"
                src={bone}
                style={{ height: "30px", width: "24px", margin: "10px" }}
              />
            </Box>
            <Box sx={{ marginLeft: "10px" }}>
              <Typography
                sx={{
                  color: "#404040",
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "normal",
                  marginTop: "5px",
                }}
              >
                Orthopedist
              </Typography>
              <Typography
                sx={{
                  color: "#8A8A8A",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "normal",
                }}
              >
                5 Doctors Available
              </Typography>
            </Box>
          </Button>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Button sx={buttonStyles} style={{textAlign:"left", width:"16vw"}} onClick={handleCardClick}>
            <Box
              sx={{
                height: "50px",
                width: "50px",
                backgroundColor: "#CEE8FF",
                borderRadius: "10px",
              }}
            >
              <Box
                component="img"
                src={eye}
                style={{ height: "24px", width: "24px", margin: "12px" }}
              />
            </Box>
            <Box sx={{ marginLeft: "10px" }}>
              <Typography
                sx={{
                  color: "#404040",
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "normal",
                  marginTop: "5px",
                }}
              >
                ophthalmologist
              </Typography>
              <Typography
                sx={{
                  color: "#8A8A8A",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "normal",
                }}
              >
                5 Doctors Available
              </Typography>
            </Box>
          </Button>
        </Grid>
        <Grid item xs={12} lg={12} textAlign="center">
          <Button variant="outlined" sx={{ borderRadius: "10px", marginBlock: "5px" }}>
            <Typography
              sx={{
                color: "#127DDD",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "normal",
                padding:"1vh"
              }}
            >
              Explore All
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardiologistCard;
