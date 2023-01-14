import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';


export default function MultilineTextFields() {
  return (
    <Grid container
    direction="column"
    alignItems="center"
    justify= "center"
    margin-top= "500"
    margin-bottom="500"
    >
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '20ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
          />
          <TextField
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
          />
          <TextField
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
          />
        </div>
      </Box>
    </Grid>
  );
}