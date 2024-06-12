import { Grid, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import React, { useState } from 'react';


// Styled TextField component
const CustomTextField = styled(TextField)(({ theme }) => ({
  width: '70%',
  '& .MuiInputBase-root': {
    color: 'white',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: 'white',
  },
  '& .MuiInput-underline:hover:before': {
    borderBottomColor: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
  '& .MuiSvgIcon-root': {
    color: 'white',
  },
}));

const SearchBar = ({ onSearchChange }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async (event) => {
        const searchQuery = event.target.value;
        setSearchTerm(searchQuery);
        onSearchChange(searchQuery);
    };


  return (
    <Grid container justifyContent="center">
      <CustomTextField
        placeholder="Enter Anime Name"
        type="text"
        fullWidth
        value={searchTerm}
        onChange={handleSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </Grid>
  );
}

export default SearchBar;