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
            <Card sx={{ display: 'flex', marginBottom: 2 }}>
                <Grid xs={2} md={1}  sx={{ width: '100%', height: '100%' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: '100%', height: '100%' }}
                        image={item.images.jpg.image_url}
                        alt={item.name}
                    />
                </Grid>
                <Grid xs={6} md={9}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography variant="h5">{item.name}</Typography>
                    {item.nicknames.map((nicknameItem, index) => (
                        <Chip label={nicknameItem} key={index} sx={{ marginRight: 1 }} />
                    ))}
                    </CardContent>
                </Grid>
                <Grid container xs={4} md={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Grid item xs={2} md={1} sx={{ display: 'flex',alignSelf:'flex-start' }}>
                        <FavoriteIcon color="error" />
                        <Typography variant="body2" sx={{ ml: 0.5 }}>
                        {item.favorites}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} md={1} sx={{ display: 'flex', justifyContent: 'center', alignSelf:'flex-end',marginRight:'20%',padding:'10%' }}>
                        <IconButton>
                        <ArrowForwardIosIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AnimeCard;