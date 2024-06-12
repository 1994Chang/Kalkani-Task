import { Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { styled } from '@mui/system';
import React, { useEffect, useState } from 'react';
import SearchBar from '../Component/searchBar';
import { fetchNewData, getInitialData } from '../Api/animeData';
import AnimeCard from '../Component/animeCard';
import { toast } from 'react-toastify';



const BackgroundContainer = styled('div')({
  position: 'fixed', 
  top: 0, 
  left: 0, 
  width: '100%',
  height: '35vh',
  backgroundImage: 'url(https://www.bhmpics.com/downloads/cool-anime-character-Wallpapers/14.kkeu2a.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1, 
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: -1,
  },
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
});

const Dashboard = () => {
  const [cardData, setCardData] = useState(null);

  const fetchInitialData = async () => {
    const animeRes = await getInitialData();
    console.log(animeRes, "response");
    if (animeRes?.status === 200) {
      setCardData(animeRes.data);
      toast.success('Successfully fetch data');
    } else {
      toast.error('please enter movie name');
    }
  }


  const handleSearchChange = async(newSearchTerm) => {
    if (newSearchTerm.trim() !== '') {
        try {
            const response = await fetchNewData(newSearchTerm);
            setCardData(response.data);
            toast.success('Successfully fetch data');
            console.log(response.data,"using search");
        } catch (error) {
            toast.error('Error fetching data:', error);
        }
    }
          
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <>
      <BackgroundContainer>
        <Typography variant="h4" gutterBottom color="white">
          Search Anime Character
        </Typography>
        <SearchBar onSearchChange={handleSearchChange} />
        <Typography variant="p" gutterBottom color="white">
          Total {cardData ? cardData?.pagination?.items?.total : 0} Matching Anime Character Found
        </Typography>
      </BackgroundContainer>
      <Box style={{ marginTop: '35vh', overflowY: 'auto', height: '65vh' }}> {/* Add scrollable container */}
        <Grid container spacing={3} style={{ padding: '20px' }}>
          <Grid item xs={12}>
            {cardData ?
              <AnimeCard data={cardData} />
              :
              <Typography variant="h4" gutterBottom color="black" textAlign={"center"}>
                No Anime Character found...
              </Typography>
            }
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Dashboard;