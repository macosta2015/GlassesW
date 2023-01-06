import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@mui/material/TextField';


const styles = theme => ({
    // root: {
    //     flexGrow: 1
    // },
    paper: {
        padding: theme.spacing(10),
        xs:"10",
        sm:"6",
        md:"3",
        lg:"12",
        xl:"12",
    },
    container: {
        margin_left: "auto",
        margin_right: "auto",
        border: "5px solid",

        // border: "5px solid",
        // padding: "50px 0"
        // direction: "column", 
        // alignItems: "center",
        // justify: "center",
    }
});


const UnderstandingBreakpoints = withStyles(styles)(({ classes }) => (
    // <div className={classes.root}>
        <div className= {classes.container}
        >
            {/* <Grid item xs={10} sm={6} md={3}> */}
                <Paper className={classes.paper} >
                    {/* xs=12 sm=6 md=3 */}
                    <TextField
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    color="success" 
                    id="standard-basic"
                    label="First Name"
                    variant="standard"                
                />
                </Paper>
            {/* </Grid> */}

            {/* <Grid item xs={10} sm={6} md={3}> */}
                <Paper className={classes.paper}>
                    {/* xs=12 sm=6 md=3 */}
                    <TextField
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    color="success" 
                    id="standard-basic"
                    label="Last Name"
                    variant="standard"   
                />
                </Paper>
            {/* </Grid> */}
                
            {/* <Grid item xs={10} sm={6} md={3}> */}
                <Paper className={classes.paper}>
                    {/* xs=12 sm=6 md=3 */}
                    <TextField
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    color="success" 
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    />
                </Paper>
            {/* </Grid> */}
        </div>
    // </div>
));
export default UnderstandingBreakpoints;