import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
return (
    <Grid container
        direction="column"
        alignItems="center"
        justify= "center"
    >
        <Card 
            sx={{ maxWidth: 345 }}
        >
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Hello World
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
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