import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { SearchIcon } from 'icons';
import React from 'react';

interface HeaderProps {
  search: string
  handleSearch: React.ChangeEventHandler<HTMLInputElement>,
}

const sx = {
  root: {
    display: 'flex',
    minHeight: '84px',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '24px',
    lineHeight: '33px',
    fontWeight: 600,
  },
};

const Header: React.FC<HeaderProps> = (props) => {
  const {search, handleSearch} = props;

  return (
    <Box sx={sx.root}>
      <Typography sx={sx.title}>User management</Typography>
      <TextField
        size="small"
        variant="outlined"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default React.memo(Header);