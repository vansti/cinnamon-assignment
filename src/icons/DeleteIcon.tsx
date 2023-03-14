import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

export const DeleteIcon: React.FC<SvgIconProps> = React.memo((props) => {
  return (
    <SvgIcon {...props}>
      <path fill="none" stroke="#718096" d="m8,11l0.8199,8.199c0.1022,1.022 0.9626,1.801 1.9901,1.801l4.38,0c1.0275,0 1.8879,-0.779 1.9901,-1.801l0.8199,-8.199m-13,-4l16,0"/>
      <path fill="none" stroke="#718096" d="m13,3c-2.5,0 -4,2.5 -4,4l8,0c0,-1.5 -1.5,-4 -4,-4z"/>
      <path fill="none" stroke="#718096" d="m8,11l0.8199,8.199c0.1022,1.022 0.9626,1.801 1.9901,1.801l4.38,0c1.0275,0 1.8879,-0.779 1.9901,-1.801l0.8199,-8.199m-13,-4l16,0"/>
      <path fill="none" stroke="#718096" d="m13,3c-2.5,0 -4,2.5 -4,4l8,0c0,-1.5 -1.5,-4 -4,-4z"/>
    </SvgIcon>
  );
});
