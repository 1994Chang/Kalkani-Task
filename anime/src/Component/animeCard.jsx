import React from 'react';
import { Box, Card, CardContent, CardMedia, Chip, Grid, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowImg from '../asset/next.png';

const AnimeCard = ({ data }) => {
    
    const handleCardClick = (url) =>{
        window.open(url, '_blank');
    }
    return (
        <>
            <Grid container item xs={12} spacing={2}>
                {data?.data?.map((item, index) => (
                    <Grid item xs={12} key={index}>
                        <Card sx={{ display: 'flex', marginBottom: 1 }} className='card'>
                            <Grid item xs={3} lg={1}>
                                <CardMedia
                                    component="img"
                                    className='card_img'
                                    sx={{ width: '100%', height: '100%',objectFit:'cover' }}
                                    image={item.images.jpg.image_url}
                                    alt={item.name}
                                />  
                            </Grid>
                            <Grid item xs={6} lg={9}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography variant="h5">{item.name}</Typography>
                                {item.nicknames.map((nicknameItem, index) => (
                                    <Chip label={nicknameItem} key={index} sx={{ margin: 0.2}}/>
                                ))}
                                </CardContent>
                            </Grid>
                            <Grid item xs={1} lg={1} sx={{ display: 'flex',alignSelf:'flex-start',justifyContent: 'center' ,mt:1 }}>
                                <FavoriteIcon color="error" />
                                <Typography variant="body2" sx={{ ml: 0.5}}>
                                    {item.favorites}
                                </Typography>
                            </Grid>
                            <Grid item xs={2} lg={1} sx={{ display: 'flex', alignSelf:'center', justifyContent: 'center' }}>
                                <IconButton onClick={()=> handleCardClick(item?.url)}>
                                    <img src={ArrowImg} height={42} width={42}/>
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