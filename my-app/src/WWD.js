import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';




export default function HorizontalCentering() {
  return (
    <div>
      <Grid container
        direction="column"
        alignItems="center"
        justify= "center"
        margin-top= "501"
        >
        <Box
          sx={{
            mx: 'auto',
            width: '91%',
            p: '11%',
            m: '5%',
            // p: 10,
            // m: 10,
            bgcolor: (theme) =>
              theme.palette.mode === 'dark' ? '#101010' : 'grey.50',
            color: (theme) =>
              theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
            border: '1px solid',
            borderColor: (theme) =>
              theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
            borderRadius: 2,
            textAlign: 'center',
            fontSize: '0.875rem',
            fontWeight: '700',
          }}
        >
          <Typography sx={{ typography: { sm: 'h1', xs: 'h5' } }} >
          What We Do
          </Typography>       
          <Typography align="left" sx={{ typography: { sm: 'h3', xs: 'h5' } }} >
            We provide vision to needed people by making use of the latest technologies. 
            3D printing has provided us to lower the logistical costs. 
          </Typography>
      </Box>
      </Grid>
    </div>
  );
}