import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import React from 'react';
import { LOGO_URL, LOGO_WIDTH } from './constants';

const Logo = styled.img`
  margin-left: 60px;
`;

const sx = {
  appBar: {
    backgroundColor: 'white',
    minHeight: 60,
    display: 'flex',
    justifyContent: 'center',
  }
};

export const AppHeader: React.FC = () => {
  return (
    <AppBar position='sticky' color='transparent' sx={sx.appBar}>
      <Logo src={LOGO_URL} alt='cinnamon' width={LOGO_WIDTH} />
    </AppBar>
  );
}

export default React.memo(AppHeader);
