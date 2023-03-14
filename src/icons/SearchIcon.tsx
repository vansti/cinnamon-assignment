import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

export const SearchIcon: React.FC<SvgIconProps> = React.memo((props) => {
  return (
    <SvgIcon {...props}>
      <path stroke="#718096" d="m14.5,15.5l4,4" />
      <circle fill="none" stroke="#718096" r="6" cy="8" cx="8" />
    </SvgIcon>
  );
});
