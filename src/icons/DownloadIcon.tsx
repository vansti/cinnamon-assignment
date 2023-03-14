import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

export const DownloadIcon: React.FC<SvgIconProps> = React.memo((props) => {
  return (
    <SvgIcon {...props}>
      <path stroke="#718096" d="m5,17l0.9333,1l12.1334,0l0.9333,-1" />
      <path stroke="#718096" d="m12,2l0,11" />
      <path stroke="#718096" d="m9,11l3,2l3,-2" />
    </SvgIcon>
  );
});
