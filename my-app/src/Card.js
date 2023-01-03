import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Button, CardActionArea, CardActions } from '@mui/material';
import image from './img/WeWeGlassesImage1.jpg'

export default function MultiActionAreaCard() {
return (
    <Grid container
        direction="column"
        alignItems="center"
        justify= "center"
        margin-top= "500"
    >
        <Card 
            sx={{ maxWidth: 345 }}
        >
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image= {image}
                alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    WeWe Glasses pairs
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    We are helping kids and older adults to see in a more affordable way.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
            </CardActions>
        </Card>
    </Grid>

);
}