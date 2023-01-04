import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@mui/material/TextField';


const styles = theme => ({
    root: {
    flexGrow: 1
    },
    paper: {
    padding: theme.spacing(12),
    textAlign: 'center',
    fontSize: 30,
    }
});


const UnderstandingBreakpoints = withStyles(styles)(({ classes }) => (
    <div className={classes.root}>
        <Grid container 
            direction="column" //We can delete this one 
            alignItems="center"
            justify= "center"
        >
            <Grid item xs={10} sm={6} md={3}>
                <Paper className={classes.paper}>
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
            </Grid>

            <Grid item xs={10} sm={6} md={3}>
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
            </Grid>
                
            <Grid item xs={10} sm={6} md={3}>
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
            </Grid>
        </Grid>
    </div>
));
export default UnderstandingBreakpoints;