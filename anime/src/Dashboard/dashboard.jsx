import { Typography, Grid, Card, CardContent, Box, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import React, { useEffect, useState } from 'react';
import SearchBar from '../Component/searchBar';
import { fetchNewData, getInitialData } from '../Api/animeData';
import AnimeCard from '../Component/animeCard';
import { toast } from 'react-toastify';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const BackgroundContainer = styled('div')({
  position: 'fixed', 
  top: 0, 
  left: 0, 
  width: '100%',
  height: '30vh',
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
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  
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


  const handleSearchChange = async (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    if (newSearchTerm.trim() !== '') {
      try {
        const response = await fetchNewData(newSearchTerm);
        setCardData(response.data);
        setCurrentPage(1); 
        toast.success('Successfully fetch data');
      } catch (error) {
        toast.error('Error fetching data:', error);
      }
    }else{
        fetchInitialData();
    }
  };
  
  const handleBackClick = async () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      try {
        const response = await fetchNewData(searchTerm, { page: newPage });
        setCardData(response.data);
        setCurrentPage(newPage);
        toast.success('Successfully fetch data');
      } catch (error) {
        toast.error('Error fetching data:', error);
      }
    } else {
      toast.info('You are on the first page.');
    }
  };
  
  const handleForwardClick = async () => {
    if (currentPage < cardData.pagination.last_visible_page) {
        const newPage = currentPage + 1;
        try {
            const response = await fetchNewData(searchTerm, { page: newPage });
            setCardData(response.data);
            setCurrentPage(newPage);
            toast.success('Successfully fetch data');
        } catch (error) {
            toast.error('Error fetching data:', error);
        }
    }else {
        toast.info('You are on the last page.');
      }
  };

  useEffect(() => {
    if(searchTerm === ""){
        fetchInitialData();
    }
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
      <Box style={{ marginTop: '35vh', overflowY: 'auto' }}> 
        <Grid container spacing={3} style={{ padding: '20px' }}>
          <Grid item xs={12}>
            {cardData ?
            <>
                <AnimeCard data={cardData} />
                <Grid container item xs={12} spacing={2} sx={{display: 'flex', justifyContent: 'center', marginTop:'20px'}}>
                    <IconButton>
                        <ArrowBackIosIcon onClick={()=>handleBackClick()}/>
                    </IconButton>
                    <IconButton>
                        <ArrowForwardIosIcon onClick={()=>handleForwardClick()}/>
                    </IconButton>
                </Grid>
            </>
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