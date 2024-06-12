import React from 'react';
import { Box, Card, CardContent, CardMedia, Chip, Grid, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const AnimeCard = ({ data }) => {
  return (
    <>
      <Grid container item xs={12} spacing={2}>
        {data?.data?.map((item, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ display: 'flex', marginBottom: 2, maxHeight:'150px' }}>
                <Grid xs={2}>
                    <CardMedia
                        component="img"
                        sx={{ width: '100%', height: '100%' }}
                        image={item.images.jpg.image_url}
                        alt={item.name}
                    />  
                </Grid>
                <Grid xs={8}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography variant="h5">{item.name}</Typography>
                    {item.nicknames.map((nicknameItem, index) => (
                        <Chip label={nicknameItem} key={index} sx={{ marginRight: 1 }} />
                    ))}
                    </CardContent>
                </Grid>
                <Grid item xs={1} sx={{ display: 'flex',alignSelf:'flex-start',justifyContent: 'right'  }}>
                    <FavoriteIcon color="error" />
                    <Typography variant="body2" sx={{ ml: 0.5 }}>
                        {item.favorites}
                    </Typography>
                </Grid>
                <Grid container xs={1} sx={{ display: 'flex', alignSelf:'center', justifyContent: 'center' }}>
                    <IconButton>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
     
    </>
  );
};

export default AnimeCard;